"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { navItems, ctaButton } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/useisMobile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isMobile = useIsMobile();
  const router = useRouter();

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

  const handleCtaClick = () => {
    if (!isMobile) {
      setQrOpen(true);
      return;
    }

    toast.loading("Redirecting to Google Pay...", { duration: 2000 });
    setTimeout(() => {
      setQrOpen(true);
    }, 4000);
  };

  return (
    <div id="navbar" className="flex justify-center w-full py-6 px-4">
      <div className="flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg w-full max-w-3xl relative z-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logo.svg"
            alt="Punarjjani Logo"
            width={120}
            height={40}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className="text-lg text-gray-900 hover:text-gray-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button variant="default" className="px-5 py-2" onClick={handleCtaClick}>
            {ctaButton.label}
          </Button>
        </motion.div>
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-6 w-6 text-gray-900" />
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6 text-primary" />
            </motion.button>

            <div className="flex flex-col space-y-6 items-center justify-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-2xl text-gray-900 font-medium"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-6 w-full"
              >
                {isMobile ? (
                  <Link href={ctaButton.href}>
                    <Button
                      variant="default"
                      className="w-full px-5 py-3 rounded-full"
                      onClick={() => {
                        toggleMenu();
                        handleCtaClick();
                      }}
                    >
                      {ctaButton.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="default"
                    className="w-full px-5 py-3 rounded-full"
                    onClick={() => {
                      toggleMenu();
                      handleCtaClick();
                    }}
                  >
                    {ctaButton.label}
                  </Button>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              variant="default"
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
    </div>
  );
}
