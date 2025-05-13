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
        label: "Go to experience Tab1",
        content: "About this piece of work",
        href: "/experience/Tab1",
      },
      {
        type: "link",
        label: "Go to experience Tab2",
        content: "About this piece of work",
        href: "/experience/Tab2",
      },
      {
        type: "link",
        label: "Go to experience Tab3",
        content: "About this piece of work",
        href: "/experience/Tab3",
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
        label: "Go to projects Tab1",
        content: "About this piece of work",
        href: "/projects/Tab1",
      },
      {
        type: "link",
        label: "Go to projects Tab2",
        content: "About this piece of work",
        href: "/projects/Tab2",
      },
      {
        type: "link",
        label: "Go to projects Tab3",
        content: "About this piece of work",
        href: "/projects/Tab3",
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
