import React from 'react';
import Image from 'next/image';

// --- DATA: 7 Punarjani Initiatives from the logos ---
const initiativeData = [
    { id: 1, title: "Palliative Care Wing (Arikil)", imageSrc: "/assets/initiatives/img_1.jpg", description: "Providing compassionate, holistic care for patients and their families facing serious illness." },
    { id: 2, title: "Paediatrics", imageSrc: "/assets/initiatives/img_2.jpg", description: "Dedicated support for children and young patients, ensuring access to essential medical services." },
    { id: 3, title: "Blood Wing", imageSrc: "/assets/initiatives/img_3.jpg", description: "Organizing and streamlining voluntary blood donation to maintain a reliable blood supply." },
    { id: 4, title: "Drug Wing", imageSrc: "/assets/initiatives/img_4.jpg", description: "Assisting underprivileged patients by funding access to necessary and often expensive medications." },
    { id: 5, title: "Gift of Giving", imageSrc: "/assets/initiatives/img_5.jpg", description: "General fundraising and support to meet diverse emergency medical and institutional needs." },
    { id: 6, title: "Hair 2 Care", imageSrc: "/assets/initiatives/img_6.jpg", description: "Providing emotional and physical support for patients, often through specialized care projects." },
    { id: 7, title: "Feathers", imageSrc: "/assets/initiatives/img_7.jpg", description: "A unique welfare program focused on restoring the dignity and hope of vulnerable patients." },
];

const InitiativesSection: React.FC = () => {
    const PRIMARY_BLUE = 'text-[#2C55C0]'; 
    const BG_COLOR = 'bg-white'; 
    const TEXT_COLOR = 'text-[#0F172A]'; 

    return (
        <section id="initiatives" className={`py-20 ${BG_COLOR}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Title Matching established style */}
                <h2 className={`text-4xl font-extrabold uppercase ${PRIMARY_BLUE} mb-16 text-center tracking-wider`}>
                    Our Programs: Punarjani Initiatives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"> {/* 3-column grid for 7 items */}
                    {initiativeData.map((project) => (
                        <div key={project.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-6 text-center transition-shadow duration-300 hover:shadow-2xl">
                            
                            {/* Logo Display Area */}
                            <div className="w-32 h-32 relative mb-4"> 
                                <Image
                                    src={project.imageSrc} 
                                    alt={project.title + " logo"}
                                    layout="fill"
                                    objectFit="contain" // Ensures the circular logo fits
                                    priority
                                />
                            </div>

                            <h3 className={`text-xl font-bold ${TEXT_COLOR} mb-2`}>{project.title}</h3>
                            <p className="text-gray-600 flex-grow text-base">{project.description}</p>
                        </div>
                    ))}
                </div>
                
                
                <div className="text-center mt-16">
                    <a 
                        href="#donate" 
                        className="inline-block bg-[#2563EB] text-white py-3 px-8 rounded-full font-bold hover:bg-[#3B82F6] transition duration-300 shadow-md text-lg"
                    >
                        Support Our Work Today &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InitiativesSection;