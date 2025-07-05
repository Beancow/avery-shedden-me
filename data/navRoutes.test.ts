import NavRoutes from "@/data/navRoutes";
import { NavSection } from "@/types/navigationProps";

describe("NavRoutes", () => {
  const mockRoutes: NavSection[] = [
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
      ],
    },
    {
      type: "linkWithHref",
      label: "Donate",
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

  const mockNavRoutes = new NavRoutes([...mockRoutes]);

  describe("getRoutes", () => {
    it("should return all routes", () => {
      const routes = mockNavRoutes.getRoutes();
      expect(routes).toEqual(mockRoutes);
    });

    it("should return the same reference as the internal routes", () => {
      const routes = mockNavRoutes.getRoutes();
      expect(routes).toStrictEqual(mockRoutes);
    });
  });

  describe("findRouteByHref", () => {
    it("should find a direct linkWithHref route", () => {
      const route = mockNavRoutes.findRouteByHref("/donate");
      expect(route).toEqual({
        type: "linkWithHref",
        label: "Donate",
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
      });
    });

    it("should find a linkWithHref route nested in a trigger section", () => {
      const route = mockNavRoutes.findRouteByHref("/about/interests");
      expect(route).toEqual({
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
      });
    });

    it("should find a linkWithSlug route nested in a trigger section", () => {
      const route = mockNavRoutes.findRouteByHref(
        "/experience/SoftwareEngineer"
      );
      expect(route).toEqual({
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
      });
    });

    it("should return undefined for non-existent route", () => {
      const route = mockNavRoutes.findRouteByHref("/non-existent");
      expect(route).toBeUndefined();
    });

    it("should return undefined for empty href", () => {
      const route = mockNavRoutes.findRouteByHref("");
      expect(route).toBeUndefined();
    });
  });

  describe("checkIfRouteExists", () => {
    it("should return true for existing routes", () => {
      expect(mockNavRoutes.checkIfRouteExists("/donate")).toBe(true);
      expect(mockNavRoutes.checkIfRouteExists("/about/interests")).toBe(true);
      expect(
        mockNavRoutes.checkIfRouteExists("/experience/SoftwareEngineer")
      ).toBe(true);
    });

    it("should return false for non-existent routes", () => {
      expect(mockNavRoutes.checkIfRouteExists("/non-existent")).toBe(false);
      expect(mockNavRoutes.checkIfRouteExists("")).toBe(false);
    });
  });

  describe("checkKeyExistsInRoute", () => {
    it("should return true when key exists in route", () => {
      const route = mockRoutes[2];
      expect(mockNavRoutes.isKeyPresentInRoute("info", route)).toBe(true);
      expect(mockNavRoutes.isKeyPresentInRoute("type", route)).toBe(true);
      expect(mockNavRoutes.isKeyPresentInRoute("href", route)).toBe(true);
    });

    it("should return false when key does not exist in route", () => {
      const route = mockRoutes[2];
      expect(mockNavRoutes.isKeyPresentInRoute("nonExistentKey", route)).toBe(
        false
      );
      expect(mockNavRoutes.isKeyPresentInRoute("items", route)).toBe(false); // linkWithHref doesn't have items
    });

    it("should work with trigger routes", () => {
      const route = mockRoutes[0];
      expect(mockNavRoutes.isKeyPresentInRoute("items", route)).toBe(true);
      expect(mockNavRoutes.isKeyPresentInRoute("mobileNavLabel", route)).toBe(
        true
      );
      expect(mockNavRoutes.isKeyPresentInRoute("sectionBaseHref", route)).toBe(
        true
      );
    });
  });

  describe("hasInfo", () => {
    it("should return routes that have info property", () => {
      const routesWithInfo = mockNavRoutes.hasInfo(mockRoutes);

      expect(routesWithInfo).toContain(mockRoutes[2]);
      expect(routesWithInfo).not.toContain(mockRoutes[0]);
      expect(routesWithInfo).not.toContain(mockRoutes[1]);
    });

    it("should return empty array when no routes have info", () => {
      const routesWithoutInfo: NavSection[] = [
        {
          type: "trigger",
          label: "Test",
          sectionBaseHref: "/test",
          items: [],
        },
      ];

      const result = mockNavRoutes.hasInfo(routesWithoutInfo);
      expect(result).toEqual([]);
    });

    it("should handle empty input array", () => {
      const result = mockNavRoutes.hasInfo([]);
      expect(result).toEqual([]);
    });
  });

  describe("getPageTitle", () => {
    it("should return title for existing linkWithHref route", () => {
      const title = mockNavRoutes.getPageTitle("/donate");
      expect(title).toBe("Donate");
    });

    it("should return title for existing linkWithSlug route", () => {
      const title = mockNavRoutes.getPageTitle("/experience/SoftwareEngineer");
      expect(title).toBe("Software Engineer");
    });

    it("should return title for nested linkWithHref route", () => {
      const title = mockNavRoutes.getPageTitle("/about/interests");
      expect(title).toBe("My Interests");
    });

    it("should return 'Page Not Found' for non-existent route", () => {
      const title = mockNavRoutes.getPageTitle("/non-existent");
      expect(title).toBe("Page Not Found");
    });

    it("should return 'No title available.' when route exists but has no info", () => {
      const mockRoutesWithoutInfo: NavSection[] = [
        {
          type: "linkWithHref",
          label: "Test",
          href: "/test",
        } as any,
      ];

      const mockNavRoutesNoInfo = new NavRoutes(mockRoutesWithoutInfo);

      const title = mockNavRoutesNoInfo.getPageTitle("/test");
      expect(title).toBe("No title available.");
    });

    it("should return 'No title available.' when route has info but no title", () => {
      const mockRoutesWithoutTitle: NavSection[] = [
        {
          type: "linkWithHref",
          label: "Test",
          href: "/test",
          info: {
            content: "Test content",
            meta: {
              description: "Test description",
              keywords: ["test"],
            },
          },
        } as any,
      ];

      const mockNavRoutesWithoutTitle = new NavRoutes(mockRoutesWithoutTitle);

      const title = mockNavRoutesWithoutTitle.getPageTitle("/test");
      expect(title).toBe("No title available.");
    });
  });

  describe("edge cases and error handling", () => {
    it("should handle routes with linkWithIcon items (filtered out)", () => {
      const routesWithIcon: NavSection[] = [
        {
          type: "trigger",
          label: "Test",
          sectionBaseHref: "/test",
          items: [
            {
              type: "linkWithIcon",
              label: "Icon Link",
              href: "/icon-link",
            } as any,
            {
              type: "linkWithHref",
              label: "Regular Link",
              href: "/regular-link",
              info: {
                title: "Regular Link",
                content: "Test content",
                meta: {
                  description: "Test description",
                  keywords: ["test"],
                },
              },
            },
          ],
        },
      ];
      const navRoutesWithIcon = new NavRoutes(routesWithIcon);
      expect(navRoutesWithIcon.checkIfRouteExists("/regular-link")).toBe(true);
      expect(navRoutesWithIcon.checkIfRouteExists("/icon-link")).toBe(false);
    });

    it("should handle trigger sections with empty items array", () => {
      const routesWithEmptyItems: NavSection[] = [
        {
          type: "trigger",
          label: "Empty",
          sectionBaseHref: "/empty",
          items: [],
        },
      ];

      const navRoutesWithEmptyItems = new NavRoutes(routesWithEmptyItems);
      const allRoutes = navRoutesWithEmptyItems.getRoutes();
      expect(allRoutes).toEqual(routesWithEmptyItems);

      expect(
        navRoutesWithEmptyItems.checkIfRouteExists("/empty/anything")
      ).toBe(false);
    });
  });
});
