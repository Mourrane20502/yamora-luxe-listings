import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, ShieldCheck, MapPin, Sparkles, FileText, CalendarCheck2, ClipboardCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { properties, categories } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Key, Handshake, TrendingUp, Star, Quote } from "lucide-react";
import { testimonials, teamMembers } from "@/data/properties";

const Index = () => {
  const featured = properties.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,hsl(var(--warm-white))_0%,hsl(var(--background))_38%,hsl(var(--background))_100%)]">
      <Header />

      <section className="relative pt-[7.5rem] lg:pt-[8.5rem] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-[-8rem] h-72 w-72 rounded-full bg-gold/12 blur-3xl" />
          <div className="absolute top-32 left-[-6rem] h-80 w-80 rounded-full bg-foreground/5 blur-3xl" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-border/70 bg-card/95 p-7 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.08)] animate-fade-in">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-[0.7rem] tracking-[0.28em] uppercase text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                Immobilier de Prestige au Maroc
              </p>
              <h1 className="mt-5 max-w-xl text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[0.95]" style={{ animationDelay: "0.15s" }}>
                Des biens rares,
                <br />
                <span className="text-gold">présentés avec clarté.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg font-sans text-muted-foreground max-w-xl" style={{ animationDelay: "0.3s" }}>
                Yamora sélectionne des propriétés d'exception à Casablanca, Rabat, Marrakech et au-delà, avec un accompagnement discret, précis et exigeant.
              </p>
              <div className="mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.45s" }}>
                <Link
                  to="/biens"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity"
                >
                  Explorer les biens
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:border-gold hover:text-gold transition-colors"
                >
                  Planifier un échange
                </Link>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3" style={{ animationDelay: "0.6s" }}>
                {[
                  { label: "Biens sélectionnés", value: "100+" },
                  { label: "Villes couvertes", value: "4" },
                  { label: "Accompagnement", value: "360°" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-secondary/50 px-4 py-4">
                    <p className="text-2xl font-serif font-bold text-foreground">{stat.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:justify-self-end w-full max-w-[34rem] animate-fade-in" style={{ animationDelay: "0.55s" }}>
              <div className="rounded-[2rem] border border-border/70 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="relative h-[26rem]">
                  <img src={heroBg} alt="Immobilier de luxe" className="h-full w-full object-cover" width={1920} height={1080} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                    <p className="text-gold font-sans text-xs tracking-[0.28em] uppercase">Sélection privée</p>
                    <h2 className="mt-3 text-2xl font-serif font-semibold leading-tight">
                      Une vitrine pensée pour inspirer confiance dès le premier regard.
                    </h2>
                  </div>
                </div>
                <div className="grid gap-3 p-5 sm:grid-cols-3">
                  {[
                    { icon: ShieldCheck, title: "Dossiers vérifiés", desc: "Infos claires" },
                    { icon: MapPin, title: "Ancrage local", desc: "Marchés ciblés" },
                    { icon: Sparkles, title: "Expérience premium", desc: "Parcours fluide" },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border bg-warm-white p-4">
                      <item.icon className="h-5 w-5 text-gold" />
                      <h3 className="mt-3 font-sans font-semibold text-foreground text-sm">{item.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4 lg:px-8 py-5">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Biens premium", text: "Une sélection éditée pour les acheteurs les plus exigeants." },
              { title: "Conseil sur mesure", text: "Un interlocuteur unique pour chaque étape du projet." },
              { title: "Réactivité", text: "Des réponses rapides et un suivi clair, sans friction." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <h2 className="text-sm font-sans font-semibold uppercase tracking-[0.2em] text-gold">{item.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-[linear-gradient(180deg,hsl(var(--warm-white))_0%,hsl(var(--background))_100%)]">
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
      <section className="py-16 bg-white border-y border-border">
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
                className="group text-center p-6 rounded-2xl border border-border hover:border-gold hover:shadow-lg transition-all bg-card"
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
      <section className="py-16 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--warm-white))_100%)]">
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
              <div key={i} className="p-6 bg-card rounded-2xl border border-border hover:border-gold hover:shadow-lg transition-all group">
                <service.icon className="h-8 w-8 mb-4 text-gold" />
                <h3 className="font-serif font-semibold text-foreground text-base mb-2">{service.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Notre méthode</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Un Parcours Simple et Efficace
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Key, step: "01", title: "Comprendre le besoin", desc: "Nous cadrons votre projet, vos critères et votre budget pour éviter les visites inutiles." },
              { icon: Handshake, step: "02", title: "Sélectionner les biens", desc: "Nous proposons une shortlist sérieuse avec des biens vérifiés et réellement pertinents." },
              { icon: TrendingUp, step: "03", title: "Accompagner jusqu'à la clôture", desc: "Négociation, suivi administratif et coordination jusqu'à la signature finale." },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <item.icon className="h-8 w-8 text-gold" />
                  <span className="font-serif text-4xl font-bold text-gold/20">{item.step}</span>
                </div>
                <h3 className="mt-5 text-xl font-serif font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[linear-gradient(180deg,hsl(var(--warm-white))_0%,hsl(var(--background))_100%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">L'équipe</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Une Expertise Humaine et Locale
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-5 h-12 w-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-gold">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-serif font-semibold text-foreground text-lg">{member.name}</h3>
                <p className="mt-1 text-sm font-sans text-gold uppercase tracking-[0.16em]">{member.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Questions fréquentes
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              Voici les réponses aux questions les plus courantes avant de commencer une recherche ou de prendre contact.
            </p>
          </div>
          <div className="max-w-3xl rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  value: "item-1",
                  question: "Quels types de biens propose Yamora ?",
                  answer:
                    "Nous proposons des villas, appartements, penthouses, riads, maisons et biens commerciaux sélectionnés pour leur qualité, leur emplacement et leur potentiel patrimonial.",
                },
                {
                  value: "item-2",
                  question: "Travaillez-vous uniquement sur Casablanca ?",
                  answer:
                    "Non. Notre sélection couvre Casablanca, Rabat, Marrakech, Fès, Tanger et d'autres marchés stratégiques au Maroc selon les opportunités disponibles.",
                },
                {
                  value: "item-3",
                  question: "Comment se déroule l'accompagnement ?",
                  answer:
                    "Nous commençons par comprendre votre besoin, puis nous shortlistons des biens adaptés, organisons les échanges utiles et vous accompagnons jusqu'à la signature finale.",
                },
                {
                  value: "item-4",
                  question: "Puis-je vous contacter pour une estimation ou un conseil investissement ?",
                  answer:
                    "Oui. Nous accompagnons aussi les vendeurs et investisseurs avec des services d'estimation, de conseil patrimonial et de mise en relation ciblée.",
                },
              ].map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="text-left text-base md:text-lg font-serif font-semibold text-foreground no-underline hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[linear-gradient(180deg,hsl(var(--warm-white))_0%,hsl(var(--background))_100%)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Guide pratique</p>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                Ce Qu'il Faut Préparer Avant de Nous Contacter
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: ClipboardCheck, title: "Vos critères essentiels", desc: "Localisation, type de bien, surface, budget et timing souhaité pour accélérer la sélection." },
              { icon: FileText, title: "Les documents utiles", desc: "Pièce d'identité, justificatifs de financement ou toute information qui peut faciliter l'étude de votre projet." },
              { icon: CalendarCheck2, title: "Le bon moment pour échanger", desc: "Un appel ou une visite planifiée en amont permet d'éviter les allers-retours inutiles et de gagner du temps." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <item.icon className="h-8 w-8 text-gold" />
                <h3 className="mt-5 text-xl font-serif font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
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
