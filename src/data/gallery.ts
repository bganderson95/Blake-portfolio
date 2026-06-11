export type GalleryItem = {
  id: number;
  title: string;
  src: string;
  description?: string;
  link?: { href: string; label: string };
  bg?: string;
  wide?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "HYBRD Logo Concept",
    src: "gallery/Hybrd Logo Transparent.png",
    description: "Logo concept for the HYBRD fitness app.",
    link: {
      href: "/projects/hybrd-fitness-app",
      label: "View project",
    },
  },
  {
    id: 2,
    title: "Search UI Animation",
    src: "/gallery/Search%20home.gif",
    description: "",
    bg: "#272727",
  },
  {
    id: 3,
    title: "Parcel — Logomark",
    src: "/gallery/Parcel-logo.svg",
    bg: "#f0ede8",
    description:
      "Logo for Parcel, a Chrome extension exploring micropayments for paywalled news articles.",
    link: { href: "/projects/parcel-chrome-extension", label: "View project" },
  },
  {
    id: 4,
    title: "Centrifuge — Full Logo",
    src: "/gallery/Centrifuge%20full%20logo.png",
    description: "Logo design for my friend's team at Amazon",
    bg: "#f5f5f5",
    wide: true,
  },
  {
    id: 5,
    title: "Centrifuge — Logomark",
    src: "/gallery/Centrifuge%20small%20logo.png",
    description: "Smaller logo concept for the AWS Centrifuge team",
    bg: "#f5f5f5",
  },
  {
    id: 6,
    title: "Button Animation System",
    src: "/gallery/animated%20buttons%20home.gif",
    description: "",
    bg: "#262625",
  },
  {
    id: 7,
    title: "Daily Drop Icon System",
    src: "/gallery/DD%20icons%20black.png",
    description: "Icon set for a music app prototype",
    bg: "#000000",
    wide: true,
  },
  {
    id: 8,
    title: "UX Icon Set",
    src: "/gallery/UX%20icons.png",
    description: "",
    bg: "#ffffff",
  },
  {
    id: 9,
    title: "BA Interlocking Logo Concepts",
    src: "/gallery/BAInterlockingLogos.png",
    description: "",
    bg: "#f5f5f5",
  },
  {
    id: 10,
    title: "Wedding Logo",
    src: "/gallery/Blake-Wedding-Logo.png",
    description:
      "Logo design for my wedding in Portugal. Saúde means cheers in Portuguese, and the logo was designed to resemble a traditional portuguese tile. The scene in the middle of the tile resembles the view from our venue in the Douro Valley.",
    bg: "#f7f5f0",
  },
  {
    id: 11,
    title: "Button Micro-interaction",
    src: "/gallery/button.gif",
    description: "",
  },
  {
    id: 12,
    title: "Calculator UI",
    src: "/gallery/calculator.png",
    description: "",
    bg: "#f5f5f5",
  },
  {
    id: 13,
    title: "Dropdown Animation",
    src: "/gallery/dropdown.gif",
    description: "",
    bg: "#ffffff",
  },
];
