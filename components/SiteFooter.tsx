import Link from "next/link";
import Image from "next/image";
import { navItems, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark footer-mark" aria-hidden="true">
              <Image src="/brand/dog-haven-group-logo.png" alt="" width={74} height={74} />
            </span>
            <span className="brand-copy">
              <strong>DogHaven Group</strong>
              <span>Dog ownership intelligence</span>
            </span>
          </Link>
          <p>DogHaven Group is the global parent platform for the DogHaven network, built around country gateways, travel planning, Academy guides, premium tools, Journal insights, and branded resources.</p>
        </div>
        <div>
          <h3>Platform</h3>
          {navItems.slice(0, 4).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </div>
        <div>
          <h3>Network</h3>
          <Link href="/south-africa">South Africa</Link>
          <Link href="/united-states">United States</Link>
          <Link href="/italy">Italy</Link>
          <Link href="/countries">Country Network</Link>
        </div>
        <div>
          <h3>Trust</h3>
          <Link href="/about">About</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/research-methodology">Research Methodology</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </footer>
  );
}
