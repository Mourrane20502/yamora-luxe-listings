import { Link } from "react-router-dom";
import { Search, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { properties, categories, testimonials } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Building2, Key, Handshake, TrendingUp, Star, Quote } from "lucide-react";

const Index = () => {
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const featured = properties.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Immobilier de luxe" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-gold font-sans text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            Immobilier de Prestige au Maroc
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            L'Excellence
            <br />
            <span className="text-gold">Immobilière</span>
          </h1>
          <p className="text-lg md:text-xl font-sans text-primary-foreground/80 max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Découvrez les propriétés les plus exclusives du Maroc avec Yamora, votre partenaire de confiance en immobilier de luxe.
          </p>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto bg-card/95 backdrop-blur-md rounded-lg p-4 flex flex-col md:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="flex-1 px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none"
            >
              <option value="">Type de bien</option>
              <option value="villa">Villa</option>
              <option value="appartement">Appartement</option>
              <option value="penthouse">Penthouse</option>
              <option value="riad">Riad</option>
            </select>
            <input
              type="text"
              placeholder="Ville ou quartier..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="flex-1 px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
            />
            <Link
              to="/biens"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity"
            >
              <Search className="h-4 w-4" />
              Rechercher
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">Sélection Premium</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Nos Biens d'Exception
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/biens"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold text-gold font-sans font-semibold text-sm tracking-wider uppercase rounded hover:bg-gold hover:text-accent-foreground transition-all"
            >
              Voir Tous les Biens
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">Catégories</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Explorez par Type
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/biens?category=${cat.id}`}
                className="group text-center p-6 rounded-lg border border-border hover:border-gold hover:shadow-lg transition-all"
              >
                <Building2 className="h-8 w-8 mx-auto mb-3 text-muted-foreground group-hover:text-gold transition-colors" />
                <h3 className="font-sans font-semibold text-foreground text-sm mb-1">{cat.label}</h3>
                <p className="text-xs font-sans text-muted-foreground">{cat.count} biens</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-warm-beige">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">Nos Services</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Un Accompagnement Sur Mesure
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Key, title: "Vente & Achat", desc: "Accompagnement personnalisé pour vos transactions immobilières de prestige." },
              { icon: Building2, title: "Gestion Locative", desc: "Gestion complète de vos biens avec un service premium et transparent." },
              { icon: Handshake, title: "Conseil Patrimonial", desc: "Stratégies d'investissement adaptées à vos objectifs financiers." },
              { icon: TrendingUp, title: "Estimation", desc: "Évaluation précise de vos biens par nos experts certifiés." },
            ].map((service, i) => (
              <div key={i} className="text-center p-8 bg-card rounded-lg border border-border hover:border-gold hover:shadow-lg transition-all group">
                <service.icon className="h-10 w-10 mx-auto mb-4 text-gold" />
                <h3 className="font-serif font-semibold text-foreground text-lg mb-3">{service.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">Témoignages</p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
              La Confiance de Nos Clients
            </h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.id} className="p-8 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
                <Quote className="h-8 w-8 text-gold mb-4" />
                <p className="text-sm font-sans text-primary-foreground/80 leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-sans font-semibold text-primary-foreground text-sm">{t.name}</p>
                <p className="text-xs font-sans text-primary-foreground/60">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Votre Projet Immobilier Commence Ici
          </h2>
          <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto mb-10">
            Contactez nos conseillers pour une consultation personnalisée et découvrez les opportunités qui vous correspondent.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity"
          >
            Nous Contacter
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
