import { Link } from "react-router-dom";
import { Award, Users, Globe, Shield } from "lucide-react";
import { teamMembers } from "@/data/properties";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 bg-warm-beige">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">À Propos</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Notre Histoire, Notre Vision
          </h1>
          <div className="w-16 h-[2px] bg-gold" />
        </div>
      </section>

      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              Yamora — L'Art de l'Immobilier de Prestige
            </h2>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed mb-6">
              Fondée avec la passion de l'excellence, Yamora Résidence 2 Mars s'est imposée comme une référence incontournable dans l'immobilier de luxe au Maroc. Notre engagement envers la qualité, la transparence et le service personnalisé nous distingue dans un marché en constante évolution.
            </p>
            <p className="text-sm font-sans text-muted-foreground leading-relaxed">
              Chaque propriété que nous proposons est soigneusement sélectionnée pour répondre aux exigences les plus élevées. Notre équipe d'experts dédiés vous accompagne à chaque étape de votre projet immobilier, de la recherche initiale jusqu'à la signature finale.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">Nos Valeurs</p>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Ce qui nous Définit</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "Excellence", desc: "Nous ne proposons que des biens d'exception, rigoureusement sélectionnés." },
              { icon: Users, title: "Proximité", desc: "Un accompagnement personnalisé et une écoute attentive de vos besoins." },
              { icon: Globe, title: "Réseau", desc: "Un réseau étendu de partenaires et de clients internationaux." },
              { icon: Shield, title: "Confiance", desc: "Transparence et intégrité dans chacune de nos transactions." },
            ].map((v, i) => (
              <div key={i} className="text-center p-8">
                <v.icon className="h-10 w-10 mx-auto mb-4 text-gold" />
                <h3 className="font-serif font-semibold text-foreground text-lg mb-3">{v.title}</h3>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-warm-beige">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">Notre Équipe</p>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Des Experts à Votre Service</h2>
            <div className="w-16 h-[2px] bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="text-center bg-card rounded-lg p-8 border border-border">
                <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-gold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-xs font-sans text-gold font-semibold tracking-wider uppercase mb-2">{member.role}</p>
                <p className="text-sm font-sans text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-charcoal">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Propriétés Vendues" },
              { value: "15+", label: "Années d'Expérience" },
              { value: "98%", label: "Clients Satisfaits" },
              { value: "50+", label: "Experts Dédiés" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">{stat.value}</p>
                <p className="text-sm font-sans text-primary-foreground/70">{stat.label}</p>
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
