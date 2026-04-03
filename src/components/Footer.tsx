"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmail("");
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-deep-brown text-cream pt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* About */}
          <div>
            <div className="inline-block bg-white/8 border border-white/15 rounded px-4 py-2 text-sm text-terracotta-light tracking-wide mb-4">
              501(c)(3) Public Charity
            </div>
            <h4 className="text-white text-lg font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-terracotta">
              About
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              G&P Foundation for Wellness is a 501(c)(3) public charity removing
              financial barriers to mental health care for underserved families
              in Fort Bend and Harris Counties, Texas.
            </p>
            <p className="text-white/60 text-sm">EIN: 41-3463875</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-terracotta">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/board", label: "Board of Directors" },
                { href: "/programs", label: "Our Programs" },
                { href: "/get-help", label: "Get Help" },
                { href: "/get-involved", label: "Get Involved" },
                { href: "/events", label: "Events" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-terracotta-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-terracotta">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="mailto:info@goodandplentyfoundation.org"
                  className="hover:text-terracotta-light transition-colors"
                >
                  info@goodandplentyfoundation.org
                </a>
              </li>
              <li>Instagram: @gpfoundationforwellness</li>
              <li>Facebook: G&P Foundation for Wellness</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-terracotta">
              Stay Connected
            </h4>
            <p className="text-white/60 text-sm mb-3">
              Join our newsletter for event updates, community stories, and ways
              to get involved.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3 py-2.5 rounded-l bg-white/10 text-white text-sm border-none placeholder:text-white/40 focus:outline-none focus:bg-white/15"
                required
              />
              <button
                type="submit"
                className="bg-terracotta text-white px-5 py-2.5 rounded-r font-bold text-xs uppercase tracking-wide hover:bg-terracotta-dark transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-sage text-sm mt-2">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-5 text-center text-sm text-white/40">
          &copy; 2026 G&P Foundation for Wellness. All rights reserved. | A
          501(c)(3) tax-exempt public charity.
        </div>
      </div>
    </footer>
  );
}
