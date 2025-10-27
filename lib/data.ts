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
  href: "/donate",
};

export const hero = {
  title: "A Mission to Restore Health and Hope",
  subtitle:
    "Providing compassionate medical care to those in need — supporting underprivileged communities with essential healthcare, and restoring hope and dignity to vulnerable lives.",
  primaryButton: {
    label: "Donate Now",
    href: "/donate",
  },
  secondaryButton: {
    label: "View our initiatives",
    href: "#initiatives",
  },
  programs: [
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
    {
      image: "https://placehold.co/500x400",
      category: "Placeholder",
      title: "Placeholder",
    },
  ],
};

export const about = {
  heading: "Our Vision: The Punarjani Mission",
  subHeading: "A New Beginning Through Collaboration",
  paragraphs: [
    "Punarjani, which translates to \"rebirth\" or \"rejuvenation\", is a community-driven initiative built on the belief that local resources and volunteer commitment can drive profound transformation.",
    "Today, we are a transparent, tech-enabled platform that focuses on providing compassionate medical care to those in need — supporting underprivileged communities with essential healthcare, and restoring hope and dignity to vulnerable lives."
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
    imageSrc: "/assets/initiatives/arikil.svg",
    description:
      "Providing compassionate, holistic care for patients and their families facing serious illness.",
  },
  {
    id: 2,
    title: "Paediatrics",
    imageSrc: "/assets/initiatives/paediatrics.svg",
    description:
      "Dedicated support for children and young patients, ensuring access to essential medical services.",
  },
  {
    id: 3,
    title: "Blood Wing",
    imageSrc: "/assets/initiatives/blood-wing.svg",
    description:
      "Organizing and streamlining voluntary blood donation to maintain a reliable blood supply.",
  },
  {
    id: 4,
    title: "Drug Wing",
    imageSrc: "/assets/initiatives/drug-wing.svg",
    description:
      "Assisting underprivileged patients by funding access to necessary and often expensive medications.",
  },
  {
    id: 5,
    title: "Gift of Giving",
    imageSrc: "/assets/initiatives/gog.svg",
    description:
      "General fundraising and support to meet diverse emergency medical and institutional needs.",
  },
  {
    id: 6,
    title: "Hair 2 Care",
    imageSrc: "/assets/initiatives/hair2care.svg",
    description:
      "Providing emotional and physical support for patients, often through specialized care projects.",
  },
  {
    id: 7,
    title: "Feathers",
    imageSrc: "/assets/initiatives/feathers.svg",
    description:
      "A unique welfare program focused on restoring the dignity and hope of vulnerable patients.",
  },
];


export const stats: Stat[] = [
    { id: 1, value: 1500, label: "Active Users", sub: "Last 30 days" },
    { id: 2, value: 320, label: "Projects Completed" },
    { id: 3, value: 98, label: "Client Satisfaction", sub: "In %" },
];
  
export const team = [
  {
    id: 1,
    name: "Dr. Ananya Rao",
    role: "Medical Director",
    bio: "Over 12 years of experience in community health programs, leading clinical teams and trainings.",
    image: "https://placehold.co/400x400",
    linkedin: "https://www.linkedin.com/",
    email: "ananya@punarjjani.org",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Program Manager",
    bio: "Coordinates outreach and logistics for mobile clinics and community drives.",
    image: "https://placehold.co/400x400",
    linkedin: "https://www.linkedin.com/",
    email: "rahul@punarjjani.org",
  },
  {
    id: 3,
    name: "Ms. Latha Iyer",
    role: "Volunteer Coordinator",
    bio: "Builds and supports our volunteer network with training and resource allocation.",
    image: "https://placehold.co/400x400",
    linkedin: "https://www.linkedin.com/",
    email: "latha@punarjjani.org",
  },
  {
    id: 4,
    name: "Amit Verma",
    role: "Fundraising Lead",
    bio: "Leads donor relations and fundraising initiatives to sustain our programs.",
    image: "https://placehold.co/400x400",
    linkedin: "https://www.linkedin.com/",
    email: "amit@punarjjani.org",
  },
];

export const footer = {
  socials: [
    { label: "Facebook", href: "#", icon: FaFacebook },
    { label: "Instagram", href: "#", icon: FaInstagram },
    { label: "LinkedIn", href: "#", icon: FaLinkedin },
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
        { name: "Terms of Use", href: "/terms" },
        { name: "Donation Policy", href: "/donation-policy" },
        { name: "Refund Policy", href: "/refund-policy" },
      ],
    },
  ],
};