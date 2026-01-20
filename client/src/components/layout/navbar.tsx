import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Expertise", href: "#services" },
    { label: "Visie", href: "#about" },
    { label: "Contact", href: "#contact" },
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-lg border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-bold font-heading text-white tracking-tight cursor-pointer">
            FRACTIONAL<span className="text-secondary">.</span>BI
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <Button 
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white rounded-none px-6 tracking-wide font-medium backdrop-blur-sm"
            onClick={() => handleNavClick("#contact")}
          >
            LET'S TALK
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
            <SheetContent className="bg-background border-l border-white/10">
              <div className="flex flex-col gap-8 mt-20">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-2xl font-heading text-white hover:text-secondary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  className="w-full bg-secondary text-background hover:bg-secondary/90 rounded-none py-6 text-lg font-heading"
                  onClick={() => handleNavClick("#contact")}
                >
                  LET'S TALK
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
