import { Award, Users, Globe, Shield } from "lucide-react";
import { teamMembers } from "@/data/properties";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <PageHeader
        title="Notre Histoire, Notre Vision"
        subtitle="Découvrez Yamora, votre partenaire de confiance pour l'immobilier de prestige au Maroc depuis plus de 15 ans."
        breadcrumbs={[{ label: "À Propos" }]}
      />

      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
                Yamora — L'Art de l'Immobilier de Prestige
              </h2>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-4">
                Fondée avec la passion de l'excellence, Yamora Résidence 2 Mars s'est imposée comme une référence incontournable dans l'immobilier de luxe au Maroc. Notre engagement envers la qualité, la transparence et le service personnalisé nous distingue dans un marché en constante évolution.
              </p>
              <p className="text-sm font-sans text-muted-foreground leading-relaxed">
                Chaque propriété que nous proposons est soigneusement sélectionnée pour répondre aux exigences les plus élevées. Notre équipe d'experts dédiés vous accompagne à chaque étape de votre projet immobilier, de la recherche initiale jusqu'à la signature finale.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Propriétés Vendues" },
                { value: "15+", label: "Années d'Expérience" },
                { value: "98%", label: "Clients Satisfaits" },
                { value: "50+", label: "Experts Dédiés" },
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
                  <p className="text-2xl font-serif font-bold text-gold mb-1">{stat.value}</p>
                  <p className="text-xs font-sans text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Nos Valeurs</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Ce qui nous Définit</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Excellence", desc: "Nous ne proposons que des biens d'exception, rigoureusement sélectionnés." },
              { icon: Users, title: "Proximité", desc: "Un accompagnement personnalisé et une écoute attentive de vos besoins." },
              { icon: Globe, title: "Réseau", desc: "Un réseau étendu de partenaires et de clients internationaux." },
              { icon: Shield, title: "Confiance", desc: "Transparence et intégrité dans chacune de nos transactions." },
            ].map((v, i) => (
              <div key={i} className="p-6 bg-warm-white rounded-lg border border-border">
                <v.icon className="h-8 w-8 mb-4 text-gold" />
                <h3 className="font-serif font-semibold text-foreground text-base mb-2">{v.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10">
            <p className="text-gold font-sans text-xs tracking-[0.2em] uppercase mb-2">Notre Équipe</p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">Des Experts à Votre Service</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border">
                <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-serif font-bold text-gold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-serif font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-xs font-sans text-gold font-semibold tracking-wider uppercase mb-2">{member.role}</p>
                  <p className="text-sm font-sans text-muted-foreground">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
