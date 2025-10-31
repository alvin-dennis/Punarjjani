"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { hero } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Hero() {
  const {
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    programs,
    backgroundImage,
  } = hero;

  return (
    <section
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden"
      )}
      id="hero"
      aria-label="Hero section"
    >
      <Navbar />
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          width={1920}
          height={1080}
          className="object-cover z-0 lg:h-auto h-full w-full"
          fetchPriority="high"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />{" "}
      </div>
      <div className="relative z-10 mt-5 lg:mt-20 flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center max-w-4xl gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl">
            {subtitle}
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {primaryButton && (
                <Link href={primaryButton.href}>
                  <Button
                    variant="secondary"
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 sm:text-lg md:text-lg"
                  >
                    {primaryButton.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-3" />
                  </Button>
                </Link>
              )}
              {secondaryButton && (
                <Link href={secondaryButton.href}>
                  <Button
                    variant="outline"
                    className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 sm:text-lg md:text-lg"
                  >
                    {secondaryButton.label}
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 lg:mt-20 w-full py-16 overflow-hidden">
        <motion.div
          className="flex gap-6 pl-6"
          animate={{
            x: [0, -((programs.length * 24 + programs.length * 356) / 2)],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: programs.length * 3,
              ease: "linear",
            },
          }}
        >
          {[...programs, ...programs].map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
              className="shrink-0 w-80 h-[480px] rounded-2xl shadow-lg cursor-pointer relative overflow-hidden"
            >
              <Image
                src={program.image}
                alt={program.title}
                width={356}
                height={480}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 356px"
                unoptimized
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-2">
                <span className="text-white/80 uppercase tracking-widest text-sm">
                  {program.category}
                </span>
                <h3 className="text-white text-2xl font-semibold leading-snug">
                  {program.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
