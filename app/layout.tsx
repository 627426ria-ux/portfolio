import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Switch to Playfair
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// Initialize the Luxury Serif Font
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif", // We will use this variable
  style: ['normal', 'italic'] // Ensure we load the italic version
});

export const metadata: Metadata = {
  title: "Shaham - Portfolio",
  description: "View my works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add font-serif variable to body */}
      <body className={`${inter.className} ${playfair.variable} bg-black`}>{children}</body>
    </html>
  );
}