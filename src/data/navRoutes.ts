import { NavSection } from "@/components/navigation/navigationProps";

export const navRoutes: NavSection[] = [
  {
    type: "trigger",
    label: "About",
    mobileNavLabel: "Home",
    sectionBaseHref: "/about",
    items: [
      {
        type: "linkWithHref",
        label: "My Interests",
        href: "/about/interests",
      },
      {
        type: "linkWithHref",
        label: "Pride",
        href: "/about/pride",
      },
      {
        type: "linkWithHref",
        label: "Contact me",
        href: "/contact",
      },
    ],
  },
  {
    type: "trigger",
    label: "Experience",
    sectionBaseHref: "/experience",
    items: [
      {
        type: "linkWithSlug",
        label: "Software Engineer",
        content: "About my work as a Software Engineer",
        href: "/experience/SoftwareEngineer",
        default: true,
      },
      {
        type: "linkWithSlug",
        label: "DevOps Engineer",
        content: "About my work as a DevOps Engineer",
        href: "/experience/DevOpsEngineer",
      },
      {
        type: "linkWithSlug",
        label: "IT Service Desk Engineer",
        content: "About my work as an It Service Desk Engineer",
        href: "/experience/ItServiceDeskEngineer",
      },
    ],
  },
  {
    type: "trigger",
    label: "Projects",
    sectionBaseHref: "/projects",
    items: [
      {
        type: "linkWithSlug",
        label: "My dotfiles",
        content: "About my customised shell configuration and other utils",
        href: "/projects/shell",
        default: true,
      },
      {
        type: "linkWithSlug",
        label: "This Website - Averything",
        content:
          "About how I approached building this website and my love of word play",
        href: "/projects/thisSite",
      },
      {
        type: "linkWithSlug",
        label: "SAF Landing Page",
        content: "About the SAF Landing Page project",
        href: "/projects/SAFLandingPage",
      },
      {
        type: "linkWithSlug",
        label: "Habit Tracker",
        content: "How I approached building a Habit Tracker and why",
        href: "/projects/habitTracker",
      },
    ],
  },
  {
    type: "linkWithHref",
    label: "Donations",
    href: "/donation",
  },
];
