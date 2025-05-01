"use client"; // Required for usePathname
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import styles from "./layout.module.css";

// Define the links for your navigation
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/work-history", label: "Work History" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/pride", label: "Pride Groups" },
  { href: "/photography", label: "Photography" },
  // Add other links as needed
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to determine if a link is active
  const isActive = (href: string) => {
    const targetPath = `/app${href === "/" ? "" : href}`;
    // Exact match for home or specific page
    if (targetPath === "/app") {
      // Handle root path explicitly
      return pathname === "/app";
    }
    // Check if current path exactly matches or starts with the target path + '/'
    return pathname === targetPath || pathname.startsWith(`${targetPath}/`);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={styles.desktopNav}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={`${link.href === "/" ? "" : link.href}`}
            // Apply glowItem and conditionally apply active class
            className={`${styles.glowItem} ${
              // Use glowItem as base
              isActive(link.href) ? styles.active : "" // Use 'active' for the glow effect
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div className={styles.mobileNavContainer}>
        <button onClick={toggleMobileMenu} className={styles.burgerButton}>
          {/* Consider using an SVG icon for better control */}
          <div />
          <div />
          <div />
        </button>
        {isMobileMenuOpen && (
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/app${link.href === "/" ? "" : link.href}`}
                // Apply glowItem and conditionally apply active class
                className={`${styles.glowItem} ${styles.mobileNavLink} ${
                  // Use glowItem and mobileNavLink base
                  isActive(link.href) ? styles.active : "" // Use 'active' for the glow effect
                }`}
                onClick={toggleMobileMenu} // Close menu on click
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}
