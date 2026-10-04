import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Signalist",
  description: "Track real-time stock prices, get personalized alerts and explore detailed company insights",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  let dark;
  return (
    <html
      lang="en"
      className={dark}
    >
      <body className="min-h-full flex flex-col">
      {children}
      </body>
    </html>
  );
}
