import { NavSection } from "@/components/navigation/navigationProps";

export const navRoutes: NavSection[] = [
  {
    type: "link",
    label: "Home",
    content: "Home",
    href: "/",
  },
  {
    type: "trigger",
    label: "Experience",
    sectionBaseHref: "/experience",
    items: [
      {
        type: "link",
        label: "SumUp",
        content: "About my work at SumUp",
        href: "/experience/SumUp",
      },
      {
        type: "link",
        label: "SIS",
        content: "My work at SIS - Satelite Internet Services",
        href: "/experience/SIS",
      },
      {
        type: "link",
        label: "SalesMaster",
        content: "About my work at SalesMaster",
        href: "/experience/SalesMaster",
      },
    ],
  },
  {
    type: "trigger",
    label: "Projects",
    sectionBaseHref: "/projects",
    items: [
      {
        type: "link",
        label: "Custom Shell Prompt",
        content: "About this piece of work",
        href: "/projects/shell",
      },
      {
        type: "link",
        label: "CV Website",
        content: "About this piece of work",
        href: "/projects/CVSite",
      },
      {
        type: "link",
        label: "SAF Landing Page",
        content: "About this piece of work",
        href: "/projects/SAFStuff",
      },
      {
        type: "link",
        label: "SAF Website",
        content: "About this piece of work",
        href: "/projects/SAFWebsite",
      },
    ],
  },
  {
    type: "link",
    label: "Connect",
    content: "Contact me",
    href: "/connect",
  },
];
