# Email Configuration for Contact Form

## Setup Instructions

The contact form uses a server-side API route to send emails. You have three options:

### Option 1: Resend (Recommended - Easiest)
1. Sign up at https://resend.com (free tier: 100 emails/day)
2. Get your API key
3. Create a `.env.local` file in the root directory:
```
RESEND_API_KEY=your_api_key_here
CONTACT_EMAIL=chauffeurgrooming@gmail.com
```
4. Verify your domain in Resend dashboard (or use their test domain for development)

### Option 2: Gmail SMTP
1. Install nodemailer: `npm install nodemailer`
2. Create an app password in your Gmail account settings
3. Update `.env.local`:
```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
CONTACT_EMAIL=chauffeurgrooming@gmail.com
```
4. Uncomment the Gmail section in `/src/app/api/contact/route.js`

### Option 3: Development Mode (Current)
- Currently logs to console
- Shows success message to user
- No actual emails sent
- Good for testing the form functionality

## Testing
1. Start dev server: `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check console logs or your email depending on which option you chose

## Production Deployment
Make sure to add environment variables to your hosting provider (Vercel, Netlify, etc.)
