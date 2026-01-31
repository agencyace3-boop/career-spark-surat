import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const isCoursesActive = location.pathname === "/courses" || location.pathname === "/live-classes" || location.pathname.startsWith("/courses/");

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-card border-b border-border"
          : "bg-background shadow-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Surat Digital Marketing School" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive("/") ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              }`}
            >
              Home
            </Link>

            {/* Courses Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1 ${
                    isCoursesActive ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  Courses
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/courses" className="cursor-pointer w-full">
                    All Courses
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/live-classes" className="cursor-pointer w-full">
                    🔴 Live Classes
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href) ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/live-classes">
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow">
                Join Live Classes
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive("/") ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/courses"
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === "/courses" ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Courses
              </Link>
              <Link
                to="/live-classes"
                className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  location.pathname === "/live-classes" ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-muted"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🔴 Live Classes
              </Link>
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href) ? "text-primary bg-primary/5" : "text-foreground/80 hover:text-primary hover:bg-muted"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Link to="/live-classes" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                    Join Live Classes
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
