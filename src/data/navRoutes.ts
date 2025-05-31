import { NavSection } from "@/components/navigation/navigationProps";

export const navRoutes: NavSection[] = [
  {
    type: "trigger",
    label: "About",
    sectionBaseHref: "/about",
    items: [
      {
        type: "link",
        label: "My Interests",
        content: "What I'm interested in",
        href: "/about/interests",
      },
      {
        type: "link",
        label: "Pride",
        content: "Groups I support and why",
        href: "/about/pride",
      },
      {
        type: "link",
        label: "Contact me",
        content: "Contact me",
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
        type: "link",
        label: "Software Engineer",
        content: "About my work as a Software Engineer",
        href: "/experience/SoftwareEngineer",
        default: true,
      },
      {
        type: "link",
        label: "DevOps Engineer",
        content: "About my work as a DevOps Engineer",
        href: "/experience/DevOpsEngineer",
      },
      {
        type: "link",
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
        type: "link",
        label: "My dotfiles",
        content: "About my customised shell configuration and other utils",
        href: "/projects/shell",
        default: true,
      },
      {
        type: "link",
        label: "This Website - Averything",
        content:
          "About how I approached building this website and my love of word play",
        href: "/projects/thisSite",
      },
      {
        type: "link",
        label: "SAF Landing Page",
        content: "About the SAF Landing Page project",
        href: "/projects/SAFLandingPage",
      },
      {
        type: "link",
        label: "Habit Tracker",
        content: "How I approached building a Habit Tracker and why",
        href: "/projects/habitTracker",
      },
    ],
  },
  {
    type: "link",
    label: "Donations",
    content:
      "As a trans person, I would appreciate your support - I dont like to ask for money, but it does help to show my ability to implement a donation system :D",
    href: "/donation",
  },
];
