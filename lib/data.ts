import { NavItem, Stat, Social } from "@/lib/types";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#pricing" },
  { label: "Statistics", href: "#docs" },
  { label: "Team", href: "/team" },
];

export const ctaButton: NavItem = {
  label: "Donate",
  href: `${process.env.NEXT_PUBLIC_DONATION_URL}`,
};

export const hero = {
  title: "A Mission to Restore Health and Hope",
  subtitle:
    "Providing compassionate medical care to those in need — supporting underprivileged communities with essential healthcare, and restoring hope and dignity to vulnerable lives.",
  primaryButton: {
    label: "Donate Now",
    href: `${process.env.NEXT_PUBLIC_DONATION_URL}`,
  },
  secondaryButton: {
    label: "View our initiatives",
    href: "#initiatives",
  },
  programs: [
    {
      image: "/assets/events/sparsham-6.0.webp",
      category: "Events",
      title: "Sparsham 6.0",
    },
    {
      image: "/assets/events/sparsham-9.0.webp",
      category: "Events",
      title: "Sparsham 9.0",
    },
    {
      image: "/assets/events/yearlygathering.webp",
      category: "Meetups",
      title: "Yearly Gathering",
    },
    {
      image: "/assets/events/30challenge.webp",
      category: "Campaign",
      title: "₹30 Challenge",
    },
    {
      image: "/assets/events/donation.webp",
      category: "Donation",
      title: "Hair Donation",
    },
  ],
  backgroundImage: "/assets/home/hero.webp",
};

export const about = {
  heading: "Our Vision: The Punarjani Mission",
  subHeading: "A New Beginning Through Collaboration",
  paragraphs: [
    "PUNARJJANI is a charitable initiative under Students of Government Medical College Thrissur, dedicated to providing medical care and support to underprivileged patients. Rooted in the values of compassion and the spirit of the Hippocratic Oath, it brings together doctors, students, and volunteers to restore health, dignity, and hope to those in need." ,
    "The name “Punarjjani,” meaning “rebirth,” reflects its mission of giving individuals a second chance at life. By bridging the gap in healthcare access, Punarjjani stands as a symbol of unity, service, and humanity."
  ],
  cta: {
    href: "#team",
    label: "Meet Our Team of Collaborators →"
  },
}


export const initiatives = [
  {
    id: 1,
    title: "Palliative Care Wing (Arikil)",
    imageSrc: "/assets/initiatives/arikil.png",
    description:
      "This wing focuses on holistic approach by providing comfort and supporting the physical, emotional and spitirual needs of the patient and their families to improve their quality of life.",
  },
  {
    id: 2,
    title: "Paediatrics",
    imageSrc: "/assets/initiatives/paediatrics.png",
    description:
      "This wing aims to nurture the physical, emotional and developmental well-being of every child in distress by reminding them that they are not alone in the world.",
  },
  {
    id: 3,
    title: "Blood Wing",
    imageSrc: "/assets/initiatives/blood-wing.png",
    description:
      "Through education, motivation and mobilization of healthy blood donors, the blood wing bridges the gap between the blood donors and the recepients.",
  },
  {
    id: 4,
    title: "Drug Wing",
    imageSrc: "/assets/initiatives/drug-wing.png",
    description:
      "This wing ensures that the medicines are available for underpriviledged patients at free of cost.",
  },
  {
    id: 5,
    title: "Gift of Giving",
    imageSrc: "/assets/initiatives/gog.png",
    description:
      "This wing facilitates and motivates individuals to include the needy patients in the celebrations of their special occasions like birthdays with their generous contributions.",
  },
  {
    id: 6,
    title: "Hair 2 Care",
    imageSrc: "/assets/initiatives/hair2care.png",
    description:
      "This wing has, and will continue to elevate the quality of life of warriors fighting with cancer by providing wigs free of cost with the hairs procured through voluntary hair donations.",
  },
  {
    id: 7,
    title: "Feathers",
    imageSrc: "/assets/initiatives/feathers.png",
    description:
      "This wing aims to provide essential clothing and garments to emergency and underpriviledged patients.",
  },
];


export const stats: Stat[] = [
    { id: 1, value: 22, label: "Years of dedicated service" },
    { id: 2, value: 450000, label: "worth of annual medical and charitable services" },
    { id: 3, value: 15, label: "medical camps providing free medical care and awareness" },
];
  
export const team = {
  advisors: [
    {
      id: 1,
      name: "Dr. Baburaj",
      role: "HOD, Anaesthesia",
      image: "/assets/team/advisors/Dr.Baburaj.png",
    },
    {
      id: 2,
      name: "Dr. Janaki",
      role: "Professor, Paediatrics",
      image: "/assets/team/advisors/Dr.Janaki.png",
    },
    {
      id: 3,
      name: "Dr. Reshmi",
      role: "Associate Professor, OBG",
      image: "/assets/team/advisors/Dr.Resmy.png",
    },
    {
      id: 4,
      name: "Dr. Sarin",
      role: "Associate Professor, Dermatology",
      image: "/assets/team/advisors/Dr.Sarin.png",
    },
    {
      id: 5,
      name: "Dr. Sreekumar",
      role: "HOD, Surgery",
      image: "/assets/team/advisors/Dr.Sreekumar.png",
    },
  ],
  executives: [
    {
      id: 1,
      name: "Hanih PC",
      role: "President",
      image: "/assets/team/executives/Hanih.png",
    },
    {
      id: 2,
      name: "Medha",
      role: "Vice President",
      image: "/assets/team/executives/Medha.png",
    },
    {
      id: 3,
      name: "Aza",
      role: "Secretary",
      image: "/assets/team/executives/Aza.png",
    },
    {
      id: 4,
      name: "Sibhathulla",
      role: "Joint Secretary",
      image: "/assets/team/executives/Sibhathulla.png",
    },
    {
      id: 5,
      name: "Simil",
      role: "Treasurer",
      image: "/assets/team/executives/Simil.png",
    },
  ],
};


export const footer = {
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/PratheekshaTMC",
      icon: FaFacebook,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/punarjjani_tmc",
      icon: FaInstagram,
    },
  ] as Social[],
  sections: [
    {
      title: "Navigation",
      links: [
        { name: "About", href: "#about" },
        { name: "Initiatives", href: "#initiatives" },
        { name: "Impact", href: "#impact" },
        { name: "Team", href: "#team" },
        { name: "Donate", href: "/donate" },
      ],
    },
    {
      title: "Initiatives",
      links: [
        { name: "Palliative Care Wing", href: "#initiatives" },
        { name: "Blood Wing", href: "#initiatives" },
        { name: "Paediatrics", href: "#initiatives" },
        { name: "Drug Wing", href: "#initiatives" },
        { name: "Gift of Giving", href: "#initiatives" },
        { name: "Hair 2 Care", href: "#initiatives" },
        { name: "Feathers", href: "#initiatives" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Use", href: "/termsandconditions" },
        { name: "Donation Policy", href: "/donationpolicy" },
        { name: "Refund Policy", href: "/refundpolicy" },
      ],
    },
  ],
};