import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-monteserrat",
  subsets: ["latin"],
});
const nura = localFont({
  src: "../public/fonts/Nura_Medium.ttf",
  variable: "--font-nura",
});

export const metadata: Metadata = {
  title: "Punarjjani",
  description: "A Mission to Restore Health and Hope",
  authors: [{ name: "Punarjjani" }],
  openGraph: {
    title: "Punarjjani",
    description:
      "PUNARJJANI is a charitable initiative under Students of Government Medical College Thrissur, dedicated to providing medical care and support to underprivileged patients. Rooted in the values of compassion and the spirit of the Hippocratic Oath, it brings together doctors, students, and volunteers to restore health, dignity, and hope to those in need.",
    siteName: "Punarjjani",
    url: "https://punarjjani.vercel.app/",
    type: "website",
    images: ["/assets/logo-cover.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://punarjjani.vercel.app/"),
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} ${nura.variable} font-monteserrat antialiased bg-muted`}
      >
        <Toaster position="top-center" reverseOrder={true} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
