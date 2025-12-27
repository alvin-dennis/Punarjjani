"use client";

import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


import { cn } from "@/lib/utils";
import { hero } from "@/lib/data";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/useisMobile";

export default function Hero() {
  const {
    title,
    subtitle,
    primaryButton,
    secondaryButton,
    programs,
    backgroundImage,
  } = hero;

  const isMobile = useIsMobile();
  const router = useRouter();

  const [qrOpen, setQrOpen] = useState(false);

  useEffect(() => {
    if (!qrOpen) return;

    const timer = setTimeout(() => {
      setQrOpen(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, [qrOpen]);

  const handleThankYou = () => {
    toast.success("Thank you for donating!", { duration: 2500 });
    setTimeout(() => {
      router.push("/thankyou");
    }, 2500);
  };

  const marqueeX = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const speed = 0.05;

    const moveBy = delta * speed;
    let current = marqueeX.get() - moveBy;

    const singleSetWidth =
      programs.length * 356 + programs.length * 24;

    if (Math.abs(current) >= singleSetWidth) {
      current = 0;
    }

    marqueeX.set(current);
  });

  return (
    <section
      id="hero"
      className={cn(
        "relative w-full min-h-screen flex flex-col overflow-hidden"
      )}
    >
      <Navbar />
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mt-5 lg:mt-20 flex-1 flex flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center max-w-4xl gap-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            {title}
          </h1>

          <p className="text-gray-200 max-w-xl">{subtitle}</p>

          <p className="text-gray-300">
            Reg No.: TSR/TC/368/2017
          </p>

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {primaryButton && (
                isMobile ? (
                  <Button
                    variant="secondary"
                    className="px-6 sm:px-8 md:px-10 py-4 text-lg"
                    onClick={() => {
                      toast.loading("Redirecting to Google Pay...", {
                        duration: 2000,
                      });
                      window.location.href = primaryButton.href;
                      setTimeout(() => {
                        handleThankYou();
                      }, 4000);
                    }}
                  >
                    {primaryButton.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    variant="secondary"
                    className="px-6 sm:px-8 md:px-10 py-4 text-lg"
                    onClick={() => setQrOpen(true)}
                  >
                    {primaryButton.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )
              )}

              {secondaryButton && (
                <Link href={secondaryButton.href}>
                  <Button
                    variant="outline"
                    className="px-6 sm:px-8 md:px-10 py-4 text-lg"
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
          style={{ x: marqueeX }}
        >
          {[...programs, ...programs].map((program, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.3 }}
              className="shrink-0 w-[356px] h-[480px] rounded-2xl shadow-lg relative overflow-hidden"
            >
              <Image
                src={program.image}
                alt={program.title}
                width={356}
                height={480}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              <div className="absolute bottom-0 p-6">
                <span className="text-white uppercase tracking-widest text-sm">
                  {program.category}
                </span>
                <h3 className="text-white text-2xl font-semibold">
                  {program.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={qrOpen} onOpenChange={setQrOpen}>
        <DialogContent className="max-w-sm text-center">
          <DialogHeader>
            <DialogTitle>Scan to Donate</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center gap-4">
            <Image
              src="/assets/donate/qr.png"
              alt="Donate QR Code"
              width={220}
              height={220}
            />

            <p className="text-sm text-muted-foreground">
              Scan using GPay / any UPI app
            </p>

            <Button
              variant={"default"}
              className="mt-5 px-4 py-2"
              onClick={() => {
                setQrOpen(false);
                handleThankYou();
              }}
            >
              I&apos;ve completed the payment
            </Button>

          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
