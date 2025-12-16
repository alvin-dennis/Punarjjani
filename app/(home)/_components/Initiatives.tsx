"use client";

import Image from "next/image";
import { initiatives, hero } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { VercelCard } from "@/components/ui/vercel-card";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useIsMobile } from "@/hooks/useisMobile";

export default function Initiatives() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [qrOpen, setQrOpen] = useState(false);
  const { primaryButton } = hero;

  useEffect(() => {
    if (!qrOpen) return;
    const timer = setTimeout(() => setQrOpen(false), 20000);
    return () => clearTimeout(timer);
  }, [qrOpen]);

  const handleThankYou = () => {
    toast.success("Thank you for donating!", { duration: 2500 });
    setTimeout(() => router.push("/thankyou"), 2500);
  };

  const handleDonateClick = () => {
    if (!primaryButton) return;

    if (isMobile) {
      toast.loading("Redirecting to Google Pay...", { duration: 2000 });
      window.location.href = primaryButton.href;
      setTimeout(handleThankYou, 4000);
    } else {
      setQrOpen(true);
    }
  };

  return (
    <section id="initiatives" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold uppercase text-primary mb-16 text-center tracking-wider">
          Our Programs: Punarjani Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {initiatives.map((project) => (
            <VercelCard
              key={project.id}
              className="flex flex-col items-center p-6 text-center"
              animateOnHover
            >
              <div className="w-32 h-32 relative mb-4">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} logo`}
                  width={200}
                  height={200}
                  className="object-contain"
                  priority
                />
              </div>

              <h3 className="text-xl font-bold text-accent mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-justify grow text-base">
                {project.description}
              </p>
            </VercelCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="secondary"
            className="py-3 px-8 rounded-full font-bold text-lg shadow-md"
            onClick={handleDonateClick}
          >
            Support Our Work Today →
          </Button>
        </div>
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
