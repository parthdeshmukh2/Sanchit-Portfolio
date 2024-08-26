import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import favicon from "./favicon.ico"
import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
 
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
        {/* <title>{metadata?.title}</title>  */}
      {/* //  <meta name="description" content={metadata.description} /> */}
      </Head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
