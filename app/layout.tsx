// Main Layout

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { New_Rocker } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newRocker = New_Rocker({
  variable: "--font-new-rocker",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "L.A. Killer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newRocker.variable} h-full antialiased`}
    >
      <body className="flex h-dvh flex-col">{children}</body>
    </html>
  );
}
