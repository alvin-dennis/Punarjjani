import Image from "next/image";
import Link from "next/link";
import { initiatives } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { VercelCard } from "@/components/ui/vercel-card";

export default function Initiatives() {
  return (
    <section id="initiatives" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold uppercase text-primary mb-16 text-center tracking-wider">
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
                  alt={project.title + " logo"}
                  className="object-contain"
                  width={200}
                  height={200}
                  priority
                />
              </div>

              <h3 className="text-xl font-bold text-accent mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 grow text-base">
                {project.description}
              </p>
            </VercelCard>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/donate">
            <Button
              variant="secondary"
              className="inline-block py-3 px-8 rounded-full font-bold transition duration-300 shadow-md text-lg"
            >
              Support Our Work Today &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
