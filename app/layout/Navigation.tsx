"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./layout.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/work-history", label: "Work History" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/pride", label: "Pride Groups" },
  { href: "/photography", label: "Photography" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (href: string) => {
    const expectedPathSegment = href === "/" ? "/" : href;

    if (expectedPathSegment === "/") {
      return pathname === "/" || pathname.endsWith("/");
    }

    return pathname.endsWith(expectedPathSegment);
  };

  return (
    <>
      <nav className={styles.desktopNav}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${styles.glowItem} ${
              isActive(link.href) ? styles.active : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className={styles.mobileNavContainer}>
        <button onClick={toggleMobileMenu} className={styles.burgerButton}>
          <div /> <div /> <div />
        </button>
        {isMobileMenuOpen && (
          <nav className={styles.mobileNav}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.glowItem} ${styles.mobileNavLink} ${
                  isActive(link.href) ? styles.active : ""
                }`}
                onClick={toggleMobileMenu}
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
