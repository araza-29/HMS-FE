import type { Metadata } from "next";
import { Young_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

// Serif for headings
const youngSerif = Young_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
});

// Sans serif for body text
const instrumentSans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RehabEase - Hospital Management System",
  description: "Complete healthcare management solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${youngSerif.variable} font-sans`}>
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
