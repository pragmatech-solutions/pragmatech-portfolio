import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/metadata";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="text-lg font-bold tracking-tight text-foreground">
            Pragma<span className="text-accent">tech</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{siteConfig.description}</p>
        </div>

        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 sm:flex sm:gap-8" aria-label="Footer">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring text-sm text-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Pragmatech. All rights reserved.</p>
        <a href={`mailto:${siteConfig.contactEmail}`} className="focus-ring hover:text-foreground">
          {siteConfig.contactEmail}
        </a>
      </Container>
    </footer>
  );
}
