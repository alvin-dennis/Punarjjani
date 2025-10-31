"use client";

import { MoveUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;
  return (
    <Link
      className="p-2.5 flex justify-center bg-primary rounded-[140px] fixed bottom-10 right-10  cursor-pointer"
      href="#navbar"
    >
      <MoveUp className="w-8 h-8 md:w-8 md:h-8 text-white" />
    </Link>
  );
}
