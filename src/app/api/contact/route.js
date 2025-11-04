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
                    from: 'onboarding@resend.dev',
                    //to: [process.env.CONTACT_EMAIL || 'chauffeurgrooming@example.com'],
                    to: 'dgtutv@gmail.com',
                    subject: `Grooming Inquiry from ${formData.ownerName}`,
                    text: emailBody,
                    reply_to: formData.ownerEmail,
                }),
            });

            // Get detailed error response from Resend
            const resendData = await resendResponse.json();

            if (!resendResponse.ok) {
                // Log the full error details
                console.error('Resend API Error:', {
                    status: resendResponse.status,
                    statusText: resendResponse.statusText,
                    error: resendData
                });

                // Return specific error message from Resend
                return NextResponse.json(
                    { 
                        error: resendData.message || 'Failed to send email via Resend',
                        details: resendData,
                        status: resendResponse.status
                    },
                    { status: resendResponse.status }
                );
            }

            // Success - log the response
            console.log('Email sent successfully via Resend:', resendData);

            return NextResponse.json({ 
                success: true, 
                message: 'Email sent successfully!',
                emailId: resendData.id  // Resend returns an email ID
            });
        }
        else{
            console.error('Missing RESEND_API_KEY in environment variables');
            return NextResponse.json(
                { error: 'Email service not configured. Please contact support.' },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('Contact form error:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        return NextResponse.json(
            { 
                error: 'Failed to send message. Please try again.',
                debug: process.env.NODE_ENV === 'development' ? error.message : undefined
            },
            { status: 500 }
        );
    }
}
