import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./layoutComponents/ClientLayout";
import { lora } from "./fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // TODO: Customize this default title and description for your business
  title: {
    default: "Chauffeur Grooming | Mobile Pet Grooming in Fraser Valley, BC",
    template: "%s | Chauffeur Grooming"
  },
  description: "Professional mobile pet grooming delivered to your doorstep in the Fraser Valley. Certified groomers specializing in stress-free, one-on-one grooming for dogs and cats. Serving Abbotsford and surrounding areas.",
  keywords: ["mobile pet grooming", "dog grooming", "cat grooming", "Fraser Valley grooming", "Abbotsford pet grooming", "mobile groomer", "professional pet grooming", "canine esthetician"],
  authors: [{ name: "Chauffeur Grooming" }],
  creator: "Chauffeur Grooming",
  publisher: "Chauffeur Grooming",

  // TODO: Update these URLs if you get a custom domain
  metadataBase: new URL('https://chauffeur-grooming.up.railway.app'),
  alternates: {
    canonical: '/',
  },

  // Open Graph metadata for social media sharing
  // TODO: Create a social-preview.jpg image (1200x630px recommended) and update this path
  openGraph: {
    title: "Chauffeur Grooming | Mobile Pet Grooming in Fraser Valley",
    description: "Professional mobile pet grooming delivered to your doorstep. Certified groomers specializing in stress-free care for dogs and cats.",
    url: 'https://chauffeur-grooming.up.railway.app',
    siteName: 'Chauffeur Grooming',
    images: [
      {
        url: '/ruby.JPG',
        width: 1200,
        height: 630,
        alt: 'Chauffeur Grooming - Mobile Pet Grooming Service',
      }
    ],
    locale: 'en_CA',
    type: 'website',
  },

  // Twitter Card metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Chauffeur Grooming | Mobile Pet Grooming',
    description: 'Professional mobile pet grooming in Fraser Valley, BC',
    images: ['/ruby.JPG'],
  },

  // Verification tags (add when you set up Google Search Console, etc.)
  // TODO: Uncomment and add verification codes when ready
  // verification: {
  //   google: 'your-google-verification-code',
  //   yandex: 'your-yandex-verification-code',
  //   bing: 'your-bing-verification-code',
  // },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Robots meta tag
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${geistSans.variable} ${geistMono.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
