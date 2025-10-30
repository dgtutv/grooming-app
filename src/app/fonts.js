import { Playfair_Display, Lora } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
});

// Lora is a readable, tasteful serif with a slightly more contemporary, legible feel
// than Playfair while keeping an elegant/fancy look.
export const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lora",
});
