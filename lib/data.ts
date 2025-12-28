import { NavItem, Stat, Social } from "@/lib/types";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const navItems: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Initiatives", href: "/#initiatives" },
  { label: "Statistics", href: "/#stats" },
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
      image: "/assets/events/izha.webp",
      category: "Donation",
      title: "Izha",
    },
    {
      image: "/assets/events/anandham.webp",
      category: "Event",
      title: "Anandham",
    },
    {
      image: "/assets/events/haemophilia.webp",
      category: "Event",
      title: "World Haemophilia day Observation",
    },
    {
      image: "/assets/events/paediatrics.webp",
      category: "Event",
      title: "Paediatrics Celebration",
    },
    {
      image: "/assets/events/punarjjani-wtsp.webp",
      category: "Event",
      title: "Launch of Punarjjani WhatsApp Helpline",
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
    email: "hair2care2025@gmail.com",
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

export const testimonials = [
  {
    name: "Dr. Ajayan P. V.",
    role: "Department of ENT ",
    exp: "Former Staff advisor",
    image: "/assets/testimonials/ajayanpv.webp",
    quote:
      "It's been 20 years since I have been close to Punarjjani, then known as Pratheeksha. As an answer to the question of many - What is the purpose of Punarjjani for the students; in this era of highly dynamic doctor - patient relationship, the exposure to the society, as well as the patients of this society, that students get from this initiative is invaluable. Many are in the opinion that the education system in the past is better than the present. Even though I am not an alumni of this college, I would say the present education system is at its best at Thrissur Medical College. All my best wishes to Punarjjani.",
  },
  {
    name: "Dr. Purushothaman",
    role: "Department of Paediatrics",
    exp: "Former staff adviser",
    image: "/assets/testimonials/purushothaman.webp",
    quote:
      "I joined Thrissur Medical College as a teacher in August 1987, and over the years of teaching and medical practice, I was able to make lifelong friendships and memories with students. In the early 1990s, a senior colleague started the 'We Care Trust', of which I was also a part. Around 2003–2004, students launched Pratheeksha, embodying progressive ideas in medical education and service, many of whom later became leading figures in modern medicine. After a brief pause, Pratheeksha was reborn as Punarjjani and its activities expanded into other fields. In 2023, I was able to reconnect with the new generation of Punarjjani, and I enjoyed a lot spending time with them. My heartfelt wishes to Punarjjani.",
  },
  {
    name: "Dr. Sheela.T.A",
    role: "Department of Paediatrics",
    exp: "Former staff adviser",
    image: "/assets/testimonials/sheela.webp",
    quote:
      "I am privileged to have been associated with Team Punarjani of GMC Thrissur as a staff advisor for several years. Their compassion-driven initiatives, especially in Paediatrics—such as Appoopanthadi, Chithrashalabham, and Pancharamuttayi—beautifully reflect how students become caring companions to children with chronic illnesses. May this spirit of empathy continue to grow and inspire,It has been truly heart-warming to collaborate with them and witness the diverse programs they have successfully conducted.",
  },
  {
    name: "Dr. Sujith Joseph Bunglavan",
    role: "2002 Batch",
    exp: "Former General secretary",
    image: "/assets/testimonials/sujith.webp",
    quote:
      "PUNARJJANI, the charity wing of Government Medical College, Thrissur, truly demonstrates how compassionate care can transform lives.In the initial years starting as PRATHEEKSHA-A ray of Good Hope eventually transforming to PUNARJJANI and now growing beyond the boundaries we had set in during those days,the dedication of the students and doctors to support patients beyond hospital walls reflects a rare blend of medical excellence and humaneness.By mobilising resources, offering emotional support, and standing with families during their most difficult moments, PUNARJJANI has become a powerful example of community-driven healthcare in Kerala.",
  },
  {
    name: "Dr. Anees Ismail",
    role: "2015 Batch",
    exp: "Former President",
    image: "/assets/testimonials/anees.webp",
    quote:
      "Punarjani has been a constant light in my journey, shaping me not only into a better doctor but also into a more compassionate human being. Serving others through Punarjani touched my heart deeply, helping me grow emotionally and teaching me the true meaning of kindness and selfless service. Every experience reminded me why I chose medicine—to heal, to listen, and to stand by those in need. The lessons I learned here will stay with me forever, guiding both my personal life and my medical career.",
  },
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
      name: "Aza",
      role: "Secretary",
      image: "/assets/team/executives/Aza.png",
    },
    {
      id: 3,
      name: "Medha",
      role: "Vice President",
      image: "/assets/team/executives/Medha.png",
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
        { name: "Terms of Use", href: "/termsandconditions" },
        { name: "Refund Policy", href: "/refundpolicy" },
      ],
    },
  ],
};