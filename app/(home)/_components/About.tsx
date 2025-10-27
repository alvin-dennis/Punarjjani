import Image from "next/image";
import Link from "next/link";
import { about } from "@/lib/data";
import { VercelCard } from "@/components/ui/vercel-card";

export default function About() {
  return (
    <section id="#about" className="py-20 text-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold uppercase text-primary mb-16 text-center tracking-wider">
          {about.heading}
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-accent text-center">
              {about.subHeading}
            </h3>

            {about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="mt-4 text-lg text-justify leading-relaxed text-gray-700"
              >
                {p}
              </p>
            ))}

            <Link
              href={about.cta.href}
              className="mt-8 inline-block font-bold text-gray-700 hover:underline transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {about.cta.label}
            </Link>
          </div>
          <div className="md:pl-8 flex items-center justify-center">
            <VercelCard
              className="w-full max-w-sm mx-auto p-8 flex flex-col items-center justify-center"
              animateOnHover
            >
              <Image
                src="/assets/logo.svg"
                alt="Punarjani Project Logo - Symbol of Rebirth"
                width={250}
                height={250}
                className="object-contain"
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 208px"
                priority
              />
              <p className="text-gray-600 text-center font-semibold mt-4">
                Our symbol of collective rejuvenation.
              </p>
            </VercelCard>
          </div>
        </div>
      </div>
    </section>
  );
}
