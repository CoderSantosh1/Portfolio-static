"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, PROFILE_IMAGE } from "@/lib/data";
import { socialLinks } from "./BrandIcons";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header className="mobile-bar">
        <div className="mobile-brand">
          <div className="mobile-brand-img">
            <Image src={PROFILE_IMAGE} alt="" fill sizes="36px" />
          </div>
          <span className="signature-font">S. Kumar</span>
        </div>
        <button className="mobile-toggle" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu />
        </button>
      </header>

      <div className={`sidebar-backdrop${open ? " is-open" : ""}`} onClick={() => setOpen(false)} />

      <aside className={`sidebar${open ? " is-open" : ""}`}>
        <button className="sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu">
          <X />
        </button>

        <div className="sidebar-top">
          <div className="sidebar-avatar">
            <div className="sidebar-avatar-img">
              <Image src={PROFILE_IMAGE} alt="S. Kumar" fill sizes="112px" priority />
            </div>
            <span className="sidebar-online" />
          </div>
          <p className="sidebar-name signature-font">S. Kumar</p>
          <p className="sidebar-role">Senior UI/UX &amp; Web Developer</p>
        </div>

        <nav className="sidebar-nav">
          {navLinks.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link key={href} href={href} className={`sidebar-link${active ? " is-active" : ""}`} aria-current={active ? "page" : undefined}>
                <Icon />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-socials">
            {socialLinks.map(({ href, label, Icon }) => (
              <a key={label} href={href} aria-label={label}><Icon /></a>
            ))}
          </div>
          <span className="sidebar-rule" />
          <p className="sidebar-copy">Copyright © 2026 Santosh Kumar.<br />All rights reserved.</p>
        </div>
      </aside>
    </>
  );
}
