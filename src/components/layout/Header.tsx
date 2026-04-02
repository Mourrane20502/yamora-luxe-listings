import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/yamora-logo.png";

const navLinks = [
  { label: "Accueil", path: "/" },
  { label: "Nos Biens", path: "/biens" },
  { label: "À Propos", path: "/a-propos" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-charcoal text-primary-foreground hidden lg:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs font-sans">
            <div className="flex items-center gap-6">
              <a href="tel:+212500000000" className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="h-3 w-3" />
                +212 5 00 00 00 00
              </a>
              <a href="mailto:contact@yamora.ma" className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="h-3 w-3" />
                contact@yamora.ma
              </a>
              <span className="flex items-center gap-1.5 text-primary-foreground/50">
                <MapPin className="h-3 w-3" />
                Casablanca, Maroc
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-primary-foreground/50">
                <Clock className="h-3 w-3" />
                Lun - Ven : 9h - 18h
              </span>
              <div className="w-px h-4 bg-primary-foreground/20" />
              <div className="flex items-center gap-3">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Instagram, href: "#" },
                  { Icon: Linkedin, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} className="text-primary-foreground/50 hover:text-gold transition-colors">
                    <Icon className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-card/98 backdrop-blur-md border-b border-border transition-shadow ${scrolled ? "shadow-md" : ""}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Yamora Résidence" className="h-14 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-sans font-medium tracking-wider uppercase rounded transition-colors ${
                    location.pathname === link.path
                      ? "text-gold bg-secondary"
                      : "text-foreground hover:text-gold hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-gold text-accent-foreground font-sans font-semibold text-xs tracking-wider uppercase rounded hover:opacity-90 transition-opacity"
              >
                Prendre RDV
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-sans font-medium tracking-wider uppercase py-3 px-4 rounded ${
                    location.pathname === link.path
                      ? "text-gold bg-secondary"
                      : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <a href="tel:+212500000000" className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                  <Phone className="h-4 w-4 text-gold" />
                  +212 5 00 00 00 00
                </a>
                <a href="mailto:contact@yamora.ma" className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                  <Mail className="h-4 w-4 text-gold" />
                  contact@yamora.ma
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
