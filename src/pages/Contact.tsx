import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-16 bg-warm-beige">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-gold font-sans text-sm tracking-[0.2em] uppercase mb-3">Contact</p>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Parlons de Votre Projet
          </h1>
          <div className="w-16 h-[2px] bg-gold" />
        </div>
      </section>

      <section className="py-20 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-serif font-semibold text-foreground mb-6">Nos Coordonnées</h2>
              <div className="flex flex-col gap-6">
                {[
                  { icon: MapPin, label: "Adresse", value: "Résidence 2 Mars, Boulevard Mohammed V\nCasablanca, Maroc" },
                  { icon: Phone, label: "Téléphone", value: "+212 5 00 00 00 00" },
                  { icon: Mail, label: "Email", value: "contact@yamora.ma" },
                  { icon: Clock, label: "Horaires", value: "Lun - Ven : 9h - 18h\nSam : 9h - 13h" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-sans font-semibold text-gold tracking-wider uppercase mb-1">{item.label}</p>
                      <p className="text-sm font-sans text-muted-foreground whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-6">Envoyez-nous un Message</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Nom complet *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
                  />
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
                  />
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none"
                  >
                    <option value="">Objet de votre demande</option>
                    <option value="achat">Achat</option>
                    <option value="vente">Vente</option>
                    <option value="location">Location</option>
                    <option value="estimation">Estimation</option>
                    <option value="autre">Autre</option>
                  </select>
                  <textarea
                    placeholder="Votre message *"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="md:col-span-2 px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground resize-none"
                  />
                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-10 py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity"
                    >
                      <Send className="h-4 w-4" />
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-secondary flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
          <p className="font-serif text-lg text-foreground mb-1">Yamora Résidence 2 Mars</p>
          <p className="text-sm font-sans text-muted-foreground">Boulevard Mohammed V, Casablanca, Maroc</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
