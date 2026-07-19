import Link from "next/link";
import Image from "next/image";
import { AnalyticsPreferencesLink } from "@/components/AnalyticsPreferencesLink";

const globalPlatformLinks = [
  { href: "/world-atlas", label: "World Atlas" },
  {
    href: "/world-atlas/global-dog-ownership-index",
    label: "Global Ownership Index",
  },
  {
    href: "/world-atlas/global-dog-ownership-index/compare",
    label: "Compare Countries",
  },
  { href: "/global-travel", label: "Global Travel" },
  { href: "/global-travel/dog-passport-planner", label: "Passport Planner" },
  { href: "/countries", label: "Countries" },
];

const learnLinks = [
  { href: "/lab", label: "Dog Haven Group Lab" },
  { href: "/academy", label: "Dog Haven Group Academy" },
  { href: "/journal", label: "Dog Haven Group Journal" },
  { href: "/downloads", label: "Download Library" },
];

const networkLinks = [
  { href: "https://doghaven.co.za", label: "Dog Haven South Africa" },
  { href: "https://doghaven.us", label: "Dog Haven USA" },
  { href: "https://doghaven.it", label: "Dog Haven Italy" },
];

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/editorial-policy", label: "Editorial Policy" },
  { href: "/research-methodology", label: "Research Methodology" },
];

const socialLinks = [
  {
    href: "https://www.facebook.com/doghavengroup",
    label: "Visit Dog Haven Group on Facebook",
    icon: (
      <path d="M13.5 21v-8h2.75l.41-3.2H13.5V7.76c0-.93.26-1.56 1.61-1.56h1.72V3.34a23.1 23.1 0 0 0-2.5-.13c-2.48 0-4.17 1.51-4.17 4.29v2.3H7.35V13h2.81v8h3.34Z" />
    ),
  },
  {
    href: "https://www.instagram.com/doghavengroup/",
    label: "Visit Dog Haven Group on Instagram",
    icon: (
      <>
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.6" cy="6.45" r="1" className="social-icon-fill" />
      </>
    ),
  },
  {
    href: "https://www.tiktok.com/@doghavengroup",
    label: "Visit Dog Haven Group on TikTok",
    icon: (
      <path d="M14.45 3c.35 1.96 1.5 3.14 3.55 3.27v2.87a7.8 7.8 0 0 1-3.52-.83v6.28a6.22 6.22 0 1 1-5.36-6.16v2.94a3.37 3.37 0 1 0 2.43 3.22V3h2.9Z" />
    ),
  },
  {
    href: "https://za.pinterest.com/doghavengroup",
    label: "Visit Dog Haven Group on Pinterest",
    icon: (
      <path d="M12 2.5a9.5 9.5 0 0 0-3.46 18.35c-.08-1.6-.02-3.52.4-5.33l1.22-5.16s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.25-.87 3.5-.25 1.05.53 1.9 1.56 1.9 1.87 0 3.14-2.41 3.14-5.27 0-2.17-1.46-3.8-4.12-3.8-3 0-4.86 2.24-4.86 4.74 0 .86.25 1.47.65 1.94.18.21.21.3.14.54l-.2.83c-.07.27-.27.33-.5.24-1.4-.57-2.05-2.1-2.05-3.81 0-2.84 2.4-6.25 7.15-6.25 3.82 0 6.34 2.76 6.34 5.72 0 3.91-2.17 6.84-5.36 6.84-1.07 0-2.08-.58-2.43-1.23l-.66 2.52c-.4 1.44-1.17 2.88-1.88 3.88.9.27 1.86.42 2.87.42a9.5 9.5 0 0 0 0-19Z" />
    ),
  },
  {
    href: "https://wa.me/27632141332",
    label: "Chat with Dog Haven Group on WhatsApp",
    icon: (
      <path d="M12.04 2.5a9.3 9.3 0 0 0-8.06 13.95L2.5 21.5l5.17-1.36A9.49 9.49 0 0 0 12.04 21h.01a9.25 9.25 0 1 0-.01-18.5Zm0 16.93a7.75 7.75 0 0 1-3.95-1.08l-.28-.17-3.07.81.82-2.99-.18-.3a7.68 7.68 0 1 1 6.66 3.73Zm4.23-5.75c-.23-.12-1.37-.68-1.58-.75-.21-.08-.37-.12-.52.11-.15.23-.6.75-.73.9-.14.16-.27.18-.5.06-.23-.11-.98-.36-1.86-1.15a7 7 0 0 1-1.29-1.6c-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.4.11-.14.15-.24.23-.4.08-.15.04-.29-.02-.4-.06-.12-.52-1.26-.72-1.73-.19-.45-.38-.39-.52-.4h-.45c-.15 0-.4.06-.61.3-.21.23-.81.79-.81 1.94s.83 2.25.95 2.4c.12.16 1.64 2.5 3.97 3.5.55.25.99.4 1.33.5.56.18 1.06.15 1.46.1.45-.07 1.37-.57 1.56-1.12.2-.54.2-1 .14-1.1-.06-.1-.21-.16-.44-.28Z" />
    ),
  },
];

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-columns">
          <section
            className="footer-brand-column"
            aria-labelledby="footer-brand-heading"
          >
            <Link className="brand" href="/">
              <span className="brand-mark footer-mark" aria-hidden="true">
                <Image
                  src="/brand/dog-haven-group-logo-128.png"
                  alt=""
                  width={48}
                  height={48}
                />
              </span>
              <span className="brand-copy">
                <strong id="footer-brand-heading">Dog Haven Group</strong>
                <span>Dog ownership intelligence</span>
              </span>
            </Link>
            <p className="footer-statement">
              Dog Haven Group connects global dog ownership research,
              international travel planning, practical tools, education and the
              growing Dog Haven country network.
            </p>
            <div className="footer-brand-connect">
              <div className="footer-brand-actions">
                <Link className="footer-action" href="/contact">
                  Contact
                </Link>
                <Link className="footer-action" href="/doghaven-universe">
                  Explore the Universe
                </Link>
              </div>
              <nav className="footer-social-links" aria-label="Dog Haven Group social media">
                {socialLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      {item.icon}
                    </svg>
                  </a>
                ))}
              </nav>
            </div>
          </section>
          <nav
            className="footer-link-group"
            aria-labelledby="footer-platform-heading"
          >
            <h2 id="footer-platform-heading">Global Platform</h2>
            {globalPlatformLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav
            className="footer-link-group"
            aria-labelledby="footer-learn-heading"
          >
            <h2 id="footer-learn-heading">Learn and Use</h2>
            {learnLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <nav
            className="footer-link-group"
            aria-labelledby="footer-network-heading"
          >
            <h2 id="footer-network-heading">Dog Haven Network</h2>
            {networkLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2026 Dog Haven Group <span aria-hidden="true">&middot;</span>{" "}
            DogHavenGroup.com
          </p>
          <nav aria-label="Policies">
            {policyLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <AnalyticsPreferencesLink />
          </nav>
        </div>
      </div>
    </footer>
  );
}
