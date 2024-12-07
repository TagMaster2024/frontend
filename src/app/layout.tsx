'use client'
// import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import "./globals.css";
import '@suiet/wallet-kit/style.css';
import WalletProviderWrapper from '@/components/wallet-provider-wrapper';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen">
        <WalletProviderWrapper>
          <Navbar />
          {children}
        </WalletProviderWrapper>
      </body>
    </html>
  );
}
