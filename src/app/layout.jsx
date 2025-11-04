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
  title: "Chauffeur Grooming",
  description: "Mobile grooming delivered to your doorstep",
  icons: {
    icon: "/logo-outline.svg",
    shortcut: "/logo-outline.svg",
    apple: "/logo-outline.svg",
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
