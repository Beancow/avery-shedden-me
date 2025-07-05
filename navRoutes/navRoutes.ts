import {
  LinkSectionWithHref,
  LinkSectionWithSlug,
  NavSection,
  TriggerSectionItem,
} from "@/types/navigationProps";

const defaultRoutes: NavSection[] = [
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
        info: {
          title: "My Interests",
          content: "Learn about my interests and what I enjoy doing.",
          meta: {
            description: "Avery's interests and hobbies.",
            keywords: ["interests", "hobbies", "Avery"],
          },
        },
      },
      {
        type: "linkWithHref",
        label: "Pride",
        href: "/about/pride",
        info: {
          title: "Pride",
          content: "Learn about my pride and what it means to me.",
          meta: {
            description: "Avery's pride and its significance.",
            keywords: ["pride", "LGBTQ+", "Avery"],
          },
        },
      },
      {
        type: "linkWithHref",
        label: "Contact me",
        href: "/contact",
        info: {
          title: "Contact me",
          content: "Get in touch with me.",
          meta: {
            description: "Contact information for Avery.",
            keywords: ["contact", "Avery"],
          },
        },
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
        info: {
          title: "Software Engineer",
          content: "About my work as a Software Engineer",
          meta: {
            description: "Avery's experience as a Software Engineer.",
            keywords: ["software engineer", "Avery"],
          },
        },
        href: "/experience/SoftwareEngineer",
        default: true,
      },
      {
        type: "linkWithSlug",
        info: {
          title: "DevOps Engineer",
          content: "About my work as a DevOps Engineer",
          meta: {
            description: "Avery's experience as a DevOps Engineer.",
            keywords: ["devops engineer", "Avery"],
          },
        },
        href: "/experience/DevOpsEngineer",
      },
      {
        type: "linkWithSlug",
        info: {
          title: "It Service Desk Engineer",
          content: "About my work as an It Service Desk Engineer",
          meta: {
            description: "Avery's experience as an It Service Desk Engineer.",
            keywords: ["it service desk engineer", "Avery"],
          },
        },
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
        info: {
          title: "My dotfiles",
          content: "About my customised shell configuration and other utils",
          meta: {
            description: "Avery's dotfiles and shell configuration.",
            keywords: ["dotfiles", "shell", "Avery"],
          },
        },
        href: "/projects/shell",
        default: true,
      },
      {
        type: "linkWithSlug",
        info: {
          title: "This Site",
          content: "About the site you are currently viewing",
          meta: {
            description: "Avery's personal website and its features.",
            keywords: ["personal website", "Avery"],
          },
        },
        href: "/projects/thisSite",
      },
      {
        type: "linkWithSlug",
        info: {
          title: "SAF Landing Page",
          content: "About the SAF Landing Page project",
          meta: {
            description: "Avery's SAF Landing Page project.",
            keywords: ["SAF Landing Page", "Avery"],
          },
        },
        href: "/projects/SAFLandingPage",
      },
      {
        type: "linkWithSlug",
        info: {
          title: "Habit Tracker",
          content: "How I approached building a Habit Tracker and why",
          meta: {
            description: "Avery's Habit Tracker project.",
            keywords: ["Habit Tracker", "Avery"],
          },
        },
        href: "/projects/habitTracker",
      },
    ],
  },
  {
    type: "linkWithHref",
    label: "Donante",
    href: "/donate",
    info: {
      title: "Donate",
      content:
        "Support me - but also mostly let me show of my payment implementation",
      meta: {
        description: "Avery's Donation page.",
        keywords: ["donate", "help a girl out", "Avery", "payment"],
      },
    },
  },
];

export default class NavRoutes {
  private routes: NavSection[] = defaultRoutes;
  constructor(newNavRoutes: NavSection[] = defaultRoutes) {
    this.routes = newNavRoutes;
  }

  getRoutes() {
    return this.routes;
  }

  getTriggerSection = (
    sectionBaseHref: string
  ): TriggerSectionItem | undefined => {
    return this.getRoutes().find(
      (item): item is TriggerSectionItem =>
        item.type === "trigger" && item.sectionBaseHref === sectionBaseHref
    );
  };

  getSlugSections = (baseHref: string) => {
    const section = this.getTriggerSection(baseHref);
    if (!section) {
      return [];
    }
    return section.items.filter(
      (item): item is LinkSectionWithSlug => item.type === "linkWithSlug"
    );
  };

  findRouteByHref(href: string) {
    const allPaths = this.getRoutes().reduce(
      (
        acc: (LinkSectionWithHref | LinkSectionWithSlug)[],
        route: NavSection
      ) => {
        if (route.type === "linkWithHref" || route.type === "linkWithSlug") {
          acc.push(route);
        } else if (route.type === "trigger") {
          acc.push(
            ...(route.items.filter((item) => item.type !== "linkWithIcon") ||
              [])
          );
        }
        return acc;
      },
      []
    );
    return allPaths.find((route) => route.href === href);
  }

  checkIfRouteExists(href: string) {
    return this.findRouteByHref(href) !== undefined;
  }

  isKeyPresentInRoute(key: string, route: NavSection) {
    return key in route;
  }

  hasInfo(routesToCheck: NavSection[]) {
    return routesToCheck.filter((route) =>
      this.isKeyPresentInRoute("info", route)
    );
  }

  getPageTitle(href: string) {
    const route = this.findRouteByHref(href);
    if (!route) {
      return "Page Not Found";
    }
    if (route.type === "linkWithHref" || route.type === "linkWithSlug") {
      return route.info?.title || "No title available.";
    }
  }
}
