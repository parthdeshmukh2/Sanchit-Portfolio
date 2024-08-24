import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import favicon from "./favicon.ico"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Sanchit Chopra",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href='./favicon.ico' />
        <title>{metadata?.title}</title> 
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
