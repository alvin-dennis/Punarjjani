"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Initiatives from "@/components/Initiatives";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Initiatives />
      <Stats />
      <Team />
      <Footer />
    </>
  );
}
