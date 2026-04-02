import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
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
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Yamora Résidence" className="h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-sans font-medium tracking-wider uppercase hover-gold-underline pb-1 transition-colors ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+212500000000"
              className="flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              +212 5 00 00 00 00
            </a>
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
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-sans font-medium tracking-wider uppercase py-2 ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+212500000000"
              className="flex items-center gap-2 text-sm font-sans text-muted-foreground pt-4 border-t border-border"
            >
              <Phone className="h-4 w-4" />
              +212 5 00 00 00 00
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
