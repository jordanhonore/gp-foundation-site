"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/board", label: "Board" },
  { href: "/programs", label: "Our Programs" },
  { href: "/get-help", label: "Get Help" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-deep-brown text-cream text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap gap-2">
          <span className="font-medium">501(c)(3) Public Charity</span>
          <a
            href="mailto:info@goodandplentyfoundation.org"
            className="hover:text-terracotta-light transition-colors"
          >
            info@goodandplentyfoundation.org
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-terracotta rounded-full flex items-center justify-center text-white text-xl">
              ♥
            </div>
            <div>
              <h1 className="text-lg font-bold text-deep-brown leading-tight">
                G&P Foundation for Wellness
              </h1>
              <span className="text-xs text-warm-gray uppercase tracking-wider">
                501(c)(3) Public Charity
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sage-light rounded-full flex items-center justify-center text-terracotta">
                ✉
              </div>
              <div>
                <small className="text-warm-gray text-xs uppercase">Email</small>
                <p className="font-semibold text-sm text-deep-brown">
                  info@goodandplentyfoundation.org
                </p>
              </div>
            </div>
            <Link
              href="/get-involved"
              className="bg-terracotta text-white px-7 py-3 rounded font-bold text-sm uppercase tracking-wide hover:bg-terracotta-dark transition-colors"
            >
              Donate
            </Link>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-deep-brown sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap">
          <ul
            className={`${
              mobileOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row w-full md:w-auto`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-5 py-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                    pathname === link.href
                      ? "bg-terracotta text-white"
                      : "text-cream hover:bg-terracotta hover:text-white"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-cream text-2xl py-4 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>
    </>
  );
}
