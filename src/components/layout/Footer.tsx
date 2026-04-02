import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/yamora-logo.png";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src={logo} alt="Yamora" className="h-16 w-auto mb-6 brightness-200" />
            <p className="text-sm font-sans text-primary-foreground/70 leading-relaxed">
              Yamora Résidence 2 Mars — votre partenaire de confiance pour l'immobilier de prestige au Maroc.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-sans font-semibold tracking-wider uppercase text-gold mb-6">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Accueil", path: "/" },
                { label: "Nos Biens", path: "/biens" },
                { label: "À Propos", path: "/a-propos" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-sans text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-sans font-semibold tracking-wider uppercase text-gold mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-gold shrink-0" />
                <span className="text-sm font-sans text-primary-foreground/70">
                  Résidence 2 Mars, Boulevard Mohammed V, Casablanca, Maroc
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold shrink-0" />
                <span className="text-sm font-sans text-primary-foreground/70">
                  +212 5 00 00 00 00
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold shrink-0" />
                <span className="text-sm font-sans text-primary-foreground/70">
                  contact@yamora.ma
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-sans font-semibold tracking-wider uppercase text-gold mb-6">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-primary-foreground/70"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-sans text-primary-foreground/50">
            © 2026 Yamora Résidence 2 Mars. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-sans text-primary-foreground/50 hover:text-gold transition-colors">
              Mentions Légales
            </a>
            <a href="#" className="text-xs font-sans text-primary-foreground/50 hover:text-gold transition-colors">
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
