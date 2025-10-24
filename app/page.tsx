"use client";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Footer />
    </>
  );
}
