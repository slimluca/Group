import Link from "next/link";
import Image from "next/image";

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
            <div className="footer-brand-actions">
              <Link className="footer-contact" href="/contact">
                Contact
              </Link>
              <Link href="/doghaven-universe">Explore the Universe</Link>
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
          </nav>
        </div>
      </div>
    </footer>
  );
}
