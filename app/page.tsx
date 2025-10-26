"use client";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";
import About from '@/components/About';
import InitiativesSection from "@/components/InitiativesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Statistics />
      <InitiativesSection />
      <Footer />
    </>
  );
}
