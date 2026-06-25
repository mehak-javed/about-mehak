import Wordmark from "./ui/Wordmark";
import { navLinks, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <a href="#top" aria-label="Mehak Javed — home" className="inline-flex items-center">
            <Wordmark className="text-lg" />
          </a>
          <p className="mt-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
