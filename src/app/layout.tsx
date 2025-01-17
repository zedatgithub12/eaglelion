import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WebHeader } from "@/sections/Header";
import { ScrollProvider } from "@/contexts/ScrollContexts";
import StickyHeader from "@/sections/Header/StickyHeader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EagleLion Dev Challenge",
  description: "Square website cloning challenge from eagle lion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProvider>
          <WebHeader />
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
