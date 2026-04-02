import { Link } from "react-router-dom";
import { Search, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";
import { properties, categories } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Building2, Key, Handshake, TrendingUp, Star, Quote } from "lucide-react";
import { testimonials } from "@/data/properties";

const Index = () => {
  const [searchType, setSearchType] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const featured = properties.filter((p) => p.featured);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero — reduced height, more corporate */}
      <section className="relative pt-[7.5rem] lg:pt-[8.5rem]">
        <div className="relative h-[60vh] min-h-[400px] max-h-[600px] flex items-center">
          <div className="absolute inset-0">
            <img src={heroBg} alt="Immobilier de luxe" className="w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/50 to-foreground/30" />
          </div>
          <div className="relative z-10 container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-gold font-sans text-xs tracking-[0.3em] uppercase mb-4 animate-fade-in">
                Immobilier de Prestige au Maroc
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-4 animate-fade-in leading-tight" style={{ animationDelay: "0.2s" }}>
                L'Excellence
                <br />
                <span className="text-gold">Immobilière</span>
              </h1>
              <p className="text-base font-sans text-primary-foreground/80 max-w-lg mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                Découvrez les propriétés les plus exclusives du Maroc avec Yamora, votre partenaire de confiance.
              </p>
              <div className="flex flex-wrap gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <Link
                  to="/biens"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity"
                >
                  Voir nos biens
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:border-gold hover:text-gold transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Bar */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="flex-1 w-full md:w-auto px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none"
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
              className="flex-1 w-full md:w-auto px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
            />
            <Link
              to="/biens"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity w-full md:w-auto"
            >
              <Search className="h-4 w-4" />
              Rechercher
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Sélection Premium</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Nos Biens d'Exception
              </h2>
            </div>
            <Link
              to="/biens"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-sans font-medium text-gold hover:underline"
            >
              Voir tout
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          <div className="text-center mt-10 md:hidden">
            <Link
              to="/biens"
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-gold hover:underline"
            >
              Voir tous les biens
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Catégories</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Explorez par Type de Bien
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/biens?category=${cat.id}`}
                className="group text-center p-6 rounded-lg border border-border hover:border-gold hover:shadow-md transition-all bg-card"
              >
                <Building2 className="h-7 w-7 mx-auto mb-3 text-muted-foreground group-hover:text-gold transition-colors" />
                <h3 className="font-sans font-semibold text-foreground text-sm mb-1">{cat.label}</h3>
                <p className="text-xs font-sans text-muted-foreground">{cat.count} biens</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Nos Services</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Un Accompagnement Sur Mesure
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-sans font-medium text-gold hover:underline"
            >
              Tous nos services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Key, title: "Vente & Achat", desc: "Accompagnement personnalisé pour vos transactions immobilières de prestige." },
              { icon: Building2, title: "Gestion Locative", desc: "Gestion complète de vos biens avec un service premium et transparent." },
              { icon: Handshake, title: "Conseil Patrimonial", desc: "Stratégies d'investissement adaptées à vos objectifs financiers." },
              { icon: TrendingUp, title: "Estimation", desc: "Évaluation précise de vos biens par nos experts certifiés." },
            ].map((service, i) => (
              <div key={i} className="p-6 bg-card rounded-lg border border-border hover:border-gold transition-all group">
                <service.icon className="h-8 w-8 mb-4 text-gold" />
                <h3 className="font-serif font-semibold text-foreground text-base mb-2">{service.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Témoignages</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-foreground">
              La Confiance de Nos Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="p-6 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5">
                <Quote className="h-6 w-6 text-gold mb-3" />
                <p className="text-sm font-sans text-primary-foreground/80 leading-relaxed mb-5">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-sans font-semibold text-primary-foreground text-sm">{t.name}</p>
                <p className="text-xs font-sans text-primary-foreground/60">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — subtle, corporate */}
      <section className="py-16 bg-warm-beige">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                Votre Projet Immobilier Commence Ici
              </h2>
              <p className="text-sm font-sans text-muted-foreground max-w-lg">
                Contactez nos conseillers pour une consultation personnalisée et découvrez les opportunités qui vous correspondent.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity shrink-0"
            >
              Nous Contacter
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
