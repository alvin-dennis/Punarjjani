import type { Metadata } from "next";
import { Toaster } from "sonner";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Donate — Punarjjani",
  description:
    "Support Punarjjani — help us sustain our mission to Restore Health and Hope, providing compassionate medical care to those in need — supporting underprivileged communities with essential healthcare, and restoring hope and dignity to vulnerable lives.",
  openGraph: {
    title: "Donate — Punarjjani",
    description:
      "Support Punarjjani — help us sustain our mission to Restore Health and Hope, providing compassionate medical care to those in need — supporting underprivileged communities with essential healthcare, and restoring hope and dignity to vulnerable lives.",
    url: "https://punarjjani.vercel.app/donate",
    siteName: "Punarjjani",
    images: [
      {
        url: "https://punarjjani.vercel.app/assets/logo-cover.png",
        width: 1200,
        height: 630,
        alt: "Donate to Punarjjani",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate — Punarjjani",
    description:
      "Support Punarjjani — help us sustain our mission to Restore Health and Hope, providing compassionate medical care to those in need — supporting underprivileged communities with essential healthcare, and restoring hope and dignity to vulnerable lives.",
  },
};

export default function DonationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Navbar />
      <Toaster position="top-center" richColors />
      {children}
    </section>
  );
}
