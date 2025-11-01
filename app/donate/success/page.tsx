"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Success() {
  return (
    <section className="w-full text-foreground antialiased">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="mb-6 max-w-3xl text-3xl font-medium tracking-tight text-foreground md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Thank you for your
          <br />
          Donation!!
        </motion.h1>

        <motion.div
          className="max-w-3xl space-y-4 text-base text-muted-foreground md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p>
            We&apos;re charitable initiative under Students of Government
            Medical College Thrissur, dedicated to providing medical care and
            support to underprivileged patients. Rooted in the values of
            compassion and the spirit of the Hippocratic Oath, it brings
            together doctors, students, and volunteers to restore health,
            dignity, and hope to those in need.
          </p>
          <p>
            We provide compassionate medical care to those in need — supporting
            underprivileged communities with essential healthcare, and restoring
            hope and dignity to vulnerable lives.
          </p>
        </motion.div>
        <motion.a
          href="/"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          aria-label="Go Back Home"
        >
          <Button
            variant="secondary"
            className="px-6 mt-10 sm:px-8 md:px-10 py-3 sm:py-4 sm:text-lg md:text-xl"
          >
            Go back Home
          </Button>
        </motion.a>
      </div>
    </section>
  );
};
