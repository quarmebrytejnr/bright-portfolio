import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/utils";
import { useTheme } from "@/components/ui/theme-provider";
import { Moon, Sun } from "lucide-react";

const NavItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-primary dark:text-white font-bold text-xl">
              BKD<span className="text-secondary">.</span>
            </span>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            {NavItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="px-3 py-2 text-sm font-medium text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-secondary focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <div className="hidden md:flex">
              <Button
                onClick={() => handleNavClick("#contact")}
                className="bg-secondary hover:bg-primary text-white"
              >
                Hire Me
              </Button>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-primary dark:text-gray-200 hover:text-secondary dark:hover:text-secondary focus:outline-none"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <i className={`fas fa-${mobileMenuOpen ? 'times' : 'bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white dark:bg-gray-900 shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {item.label}
            </a>
          ))}
          <div className="px-3 py-2">
            <Button 
              onClick={() => handleNavClick("#contact")}
              className="w-full bg-secondary hover:bg-primary text-white"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
