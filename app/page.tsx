import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";

const navLinks = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur border-b border-border">
        <span className="font-bold text-foreground tracking-tight">
          Gary Gaspar
        </span>
        <nav className="flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <Hero />
        <div className="h-px bg-border mx-8" />
        <About />
        <div className="h-px bg-border mx-8" />
        <Contact />
      </main>

      <footer className="py-8 text-center text-xs text-muted border-t border-border">
        © {new Date().getFullYear()} Gary Gaspar. Tous droits réservés.
      </footer>
    </>
  );
}
