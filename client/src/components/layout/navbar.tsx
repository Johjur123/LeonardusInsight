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
    { label: "Visie", href: "#vision" },
    { label: "Aanpak", href: "#method" },
    { label: "Expertise", href: "#expertise" },
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
        "fixed w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-border py-4 shadow-sm" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-serif font-semibold text-primary tracking-tight cursor-pointer">
            Fractional<span className="text-foreground">.BI</span>
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
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors font-sans"
            >
              {item.label}
            </a>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-sm px-6 font-medium text-sm transition-all"
            onClick={() => handleNavClick("#contact")}
          >
            Contact
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l border-border w-[300px]">
              <div className="flex flex-col gap-8 mt-12">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-2xl font-serif text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="h-px bg-border my-2" />
                <Button 
                  className="w-full bg-primary text-white rounded-sm py-6 text-lg font-serif"
                  onClick={() => handleNavClick("#contact")}
                >
                  Start Gesprek
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
