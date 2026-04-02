import { Link } from "react-router-dom";
import { Key, Building2, Handshake, TrendingUp, Home, FileText, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const services = [
  {
    icon: Key,
    title: "Vente & Achat",
    desc: "Notre équipe vous accompagne dans l'ensemble du processus de vente ou d'achat de votre bien immobilier. De l'estimation à la signature, nous assurons un suivi rigoureux et personnalisé.",
    features: ["Estimation gratuite", "Mise en valeur du bien", "Négociation experte", "Accompagnement juridique"],
  },
  {
    icon: Building2,
    title: "Gestion Locative",
    desc: "Confiez-nous la gestion de vos biens en toute sérénité. Nous prenons en charge la recherche de locataires, la gestion administrative et l'entretien de vos propriétés.",
    features: ["Sélection des locataires", "Gestion des baux", "Suivi des paiements", "Maintenance préventive"],
  },
  {
    icon: Handshake,
    title: "Conseil Patrimonial",
    desc: "Nos conseillers patrimoniaux élaborent des stratégies d'investissement sur mesure pour optimiser votre patrimoine immobilier et maximiser vos rendements.",
    features: ["Analyse de marché", "Stratégie fiscale", "Diversification", "Suivi personnalisé"],
  },
  {
    icon: TrendingUp,
    title: "Estimation de Biens",
    desc: "Bénéficiez d'une évaluation précise et objective de vos biens immobiliers par nos experts certifiés, basée sur une analyse approfondie du marché local.",
    features: ["Expertise certifiée", "Analyse comparative", "Rapport détaillé", "Conseil de valorisation"],
  },
  {
    icon: Home,
    title: "Programmes Neufs",
    desc: "Découvrez nos programmes immobiliers neufs sélectionnés pour leur qualité de construction, leur emplacement stratégique et leur potentiel de valorisation.",
    features: ["Sélection rigoureuse", "Garanties constructeur", "Plans personnalisables", "Financement adapté"],
  },
  {
    icon: FileText,
    title: "Accompagnement Juridique",
    desc: "Notre équipe juridique vous assiste dans toutes les démarches administratives et légales liées à vos transactions immobilières.",
    features: ["Vérification des titres", "Rédaction des actes", "Conformité réglementaire", "Protection juridique"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 bg-warm-beige">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">Nos Services</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Des Services d'Excellence
          </h1>
          <div className="w-16 h-[2px] bg-gold" />
        </div>
      </section>

      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8 hover:border-gold hover:shadow-lg transition-all group">
                <service.icon className="h-10 w-10 text-gold mb-4" />
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                      <ChevronRight className="h-3 w-3 text-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-charcoal text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-primary-foreground mb-6">
            Un Projet en Tête ?
          </h2>
          <p className="text-lg font-sans text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Nos conseillers sont à votre disposition pour étudier votre projet et vous proposer les meilleures solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity"
          >
            Prendre Rendez-vous
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
