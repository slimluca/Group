"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const headerVariant = pathname.startsWith("/world-atlas")
    ? { links: ["Home", "Destinations", "World Atlas", "Guides", "Community"], cta: "Plan your next chapter", active: "World Atlas" }
    : pathname.startsWith("/global-travel")
      ? { links: ["Home", "Our services", "Global Travel", "Relocation", "About", "Contact"], cta: "Plan a journey", active: "Global Travel" }
      : pathname.startsWith("/academy")
        ? { links: ["Guides", "Planning Tools", "Expert Advice", "Community", "About"], cta: "Join the Academy", active: "Guides" }
        : pathname.startsWith("/lab")
          ? { links: ["Plan", "Learn", "Tools", "About"], cta: "", active: "Plan" }
          : { links: ["World Atlas", "Global Travel", "Dog Haven Group Lab", "Academy", "Countries"], cta: "", active: "" };

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
          {headerVariant.links.map((label) => {
            const match = navItems.find((item) => item.label.toLowerCase() === label.toLowerCase());
            const href = match?.href ?? ({
              Home: "/",
              Destinations: "/world-atlas",
              "World Atlas": "/world-atlas",
              Guides: "/academy",
              "Planning Tools": "/lab",
              "Expert Advice": "/academy",
              Community: "/journal",
              "Our services": "/global-travel",
              "Global Travel": "/global-travel",
              Relocation: "/global-travel/relocation",
              About: "/about",
              Contact: "/contact",
              Plan: "/lab",
              Learn: "/academy",
              Tools: "/lab",
              "Dog Haven Group Lab": "/lab",
              Academy: "/academy",
              Countries: "/countries",
            }[label] ?? "/about");
            return <Link className={headerVariant.active === label ? "active" : ""} key={label} href={href}>{label}</Link>;
          })}
          {headerVariant.cta ? <Link className="header-cta" href={pathname.startsWith("/global-travel") ? "/global-travel/dog-passport-planner" : pathname.startsWith("/academy") ? "/academy" : "/doghaven-universe"}>{headerVariant.cta}<span aria-hidden="true">→</span></Link> : null}
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
