import { Link } from "react-router-dom";
import { Key, Building2, Handshake, TrendingUp, Home, FileText, ChevronRight, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";

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

      <PageHeader
        title="Des Services d'Excellence"
        subtitle="Un accompagnement complet et personnalisé pour tous vos projets immobiliers."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-8 hover:border-gold transition-all group">
                <service.icon className="h-8 w-8 text-gold mb-4" />
                <h3 className="text-lg font-serif font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-5">{service.desc}</p>
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

      {/* CTA */}
      <section className="py-16 bg-warm-beige border-t border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                Un Projet en Tête ?
              </h2>
              <p className="text-sm font-sans text-muted-foreground max-w-lg">
                Nos conseillers sont à votre disposition pour étudier votre projet et vous proposer les meilleures solutions.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity shrink-0"
            >
              Prendre Rendez-vous
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
