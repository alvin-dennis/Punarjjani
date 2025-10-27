"use client";

import { ScrollProgress } from "@/components/ui/scroll-progress";
import { BlurFade } from "@/components/ui/blur-fade";
import Hero from "@/app/(home)/_components/Hero";
import About from "@/app/(home)/_components/About";
import Initiatives from "@/app/(home)/_components/Initiatives";
import Stats from "@/app/(home)/_components/Stats";
import Team from "@/app/(home)/_components/Team";

const BLUR_FADE_DELAY = 0.04;

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress className="h-1.5 bg-primary" />

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <Hero />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <About />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 6}>
        <Initiatives />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <Stats />
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 10}>
        <Team />
      </BlurFade>
    </div>
  );
}
