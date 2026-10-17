"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <Image src="/brand/dog-haven-group-logo-128.png" alt="" width={54} height={54} priority />
          </span>
          <span className="brand-copy">
            <strong>Dog Haven Group</strong>
            <span>Global dog ownership platform</span>
          </span>
        </Link>
        <nav className="desktop-nav template-nav" aria-label="Primary navigation">
          {navItems.filter((item) => item.label !== "Journal").map((item) => (
            <Link
              className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "active" : ""}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link className="header-cta" href="/global-travel/dog-passport-planner">
            Plan a journey <span aria-hidden="true">→</span>
          </Link>
        </nav>
        <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span aria-hidden="true">{open ? "X" : "Menu"}</span>
        </button>
      </div>
      <nav className={`mobile-panel ${open ? "open" : ""}`} aria-label="Mobile navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
        ))}
        <Link href="/about" onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
}
