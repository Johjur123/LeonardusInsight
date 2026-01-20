import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inzichten", href: "#insights" },
    { label: "Wat we doen", href: "#expertise" },
    { label: "Impact", href: "#impact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-500 border-b",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-white/5 py-4" 
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <span className="flex flex-col cursor-pointer group" data-testid="link-logo">
            <span className="text-xl font-mono tracking-widest text-white hover:text-primary transition-colors duration-300">
              FRACTIONAL<span className="text-primary group-hover:text-white transition-colors">_</span>BI
            </span>
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/40 group-hover:text-white/60 transition-colors" data-testid="text-nav-tagline">
              Data regie voor MT's
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-xs font-bold tracking-widest text-white/60 hover:text-white transition-colors uppercase font-mono relative group"
            >
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              {item.label}
            </a>
          ))}
          <Button 
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none px-8 font-mono text-xs tracking-widest uppercase transition-all hover:border-primary/50"
            onClick={() => handleNavClick("#contact")}
            data-testid="button-nav-cta"
          >
            Plan kennismaking
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10 w-[300px]">
              <div className="flex flex-col gap-8 mt-20">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-3xl font-serif text-white hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="h-px bg-white/10 my-4" />
                <Button 
                  className="w-full bg-primary text-background hover:bg-primary/90 rounded-none py-6 text-sm font-mono tracking-widest uppercase"
                  onClick={() => handleNavClick("#contact")}
                  data-testid="button-nav-cta-mobile"
                >
                  Plan kennismaking
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
