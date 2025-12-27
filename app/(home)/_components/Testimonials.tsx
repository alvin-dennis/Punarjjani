import { VercelCard } from "@/components/ui/vercel-card";
import Image from "next/image";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
    return (
        <section className="text-center px-4">
            <h2 className="text-3xl md:text-5xl text-primary font-bold">
                Wisdom Passed Down by Our Predecessors  
            </h2>

            <div className="mt-16 mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                {testimonials.map((t, index) => (
                    <VercelCard
                        key={index}
                        className="flex h-full flex-col p-5"
                    >
                        <p className="mt-3 text-sm text-gray-500 text-justify flex-1">
                            {t.quote}
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                            <Image
                                src={t.image}
                                alt={t.name}
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">
                                    {t.name}
                                </h2>
                                <p className="text-sm text-gray-500">{t.role}</p>
                                <p className="text-sm text-gray-500">{t.exp}</p>
                            </div>
                        </div>
                    </VercelCard>
                ))}
            </div>
        </section>
    );
}
