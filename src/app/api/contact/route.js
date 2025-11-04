import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const formData = await request.json();
        
        // Validate required fields
        const requiredFields = ['ownerName', 'ownerEmail', 'ownerPhone', 'dogBreed', 'dogAge', 'message'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                return NextResponse.json(
                    { error: `${field} is required` },
                    { status: 400 }
                );
            }
        }

        // Create email body
        const emailBody = `
New Contact Form Submission

Owner Information:
Name: ${formData.ownerName}
Email: ${formData.ownerEmail}
Phone: ${formData.ownerPhone}

Dog Information:
Name: ${formData.dogName || 'Not provided'}
Breed: ${formData.dogBreed}
Age: ${formData.dogAge}

Message:
${formData.message}
        `.trim();
        if (process.env.RESEND_API_KEY) {
            const resendResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    from: 'Chauffeur Grooming <onboarding@resend.dev>', // Change to your verified domain
                    to: [process.env.CONTACT_EMAIL || 'chauffeurgrooming@example.com'],
                    subject: `Grooming Inquiry from ${formData.ownerName}`,
                    text: emailBody,
                    reply_to: formData.ownerEmail,
                }),
            });

            if (!resendResponse.ok) {
                throw new Error('Failed to send email via Resend');
            }

            return NextResponse.json({ success: true, message: 'Email sent successfully!' });
        }
        else{
            console.error('Contact form error:', error);
            return NextResponse.json(
                { error: 'Failed to send message. Please try again.' },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
