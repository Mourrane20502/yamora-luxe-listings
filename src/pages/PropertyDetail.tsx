import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Check, ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  if (!property) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Bien non trouvé</h1>
          <Link to="/biens" className="text-gold font-sans text-sm hover:underline">
            ← Retour aux biens
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const similar = properties.filter((p) => p.id !== property.id && p.category === property.category).slice(0, 3);
  if (similar.length < 3) {
    const more = properties.filter((p) => p.id !== property.id && !similar.includes(p)).slice(0, 3 - similar.length);
    similar.push(...more);
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % property.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + property.images.length) % property.images.length);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Votre demande a été envoyée avec succès !");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-24 pb-4 bg-warm-beige">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/biens" className="inline-flex items-center gap-2 text-sm font-sans text-muted-foreground hover:text-gold transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Retour aux biens
          </Link>
        </div>
      </div>

      {/* Gallery */}
      <section className="bg-warm-beige pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] max-h-[600px]">
            <img
              src={property.images[currentImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {property.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImage ? "bg-gold" : "bg-card/60"}`}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`rounded-lg overflow-hidden w-24 h-16 border-2 transition-colors ${i === currentImage ? "border-gold" : "border-transparent"}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <span className="inline-block px-3 py-1 bg-gold text-accent-foreground text-xs font-sans font-semibold tracking-wider uppercase rounded mb-4">
                  {property.type}
                </span>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                  {property.title}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 text-gold" />
                  <span className="text-sm font-sans">{property.location}</span>
                </div>
                <p className="text-2xl font-serif font-bold text-gold">{property.price}</p>
              </div>

              <div className="flex items-center gap-8 p-6 bg-secondary rounded-lg mb-8">
                {property.bedrooms > 0 && (
                  <div className="flex items-center gap-3">
                    <Bed className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-lg font-sans font-semibold text-foreground">{property.bedrooms}</p>
                      <p className="text-xs font-sans text-muted-foreground">Chambres</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Bath className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-lg font-sans font-semibold text-foreground">{property.bathrooms}</p>
                    <p className="text-xs font-sans text-muted-foreground">Salles de bain</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Maximize className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-lg font-sans font-semibold text-foreground">{property.area} m²</p>
                    <p className="text-xs font-sans text-muted-foreground">Surface</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Description</h2>
                <p className="text-sm font-sans text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Équipements & Prestations</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {property.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm font-sans text-muted-foreground">
                      <Check className="h-4 w-4 text-gold shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mb-8">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-4">Localisation</h2>
                <div className="aspect-[16/9] bg-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-gold mx-auto mb-2" />
                    <p className="text-sm font-sans text-muted-foreground">{property.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-lg p-8">
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">Intéressé par ce bien ?</h3>
                <p className="text-sm font-sans text-muted-foreground mb-6">
                  Remplissez le formulaire ci-dessous et un conseiller vous recontactera rapidement.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
                  />
                  <input
                    type="tel"
                    placeholder="Votre téléphone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
                  />
                  <textarea
                    placeholder="Votre message..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 bg-gold text-accent-foreground font-sans font-semibold text-sm tracking-wider uppercase rounded hover:opacity-90 transition-opacity"
                  >
                    Envoyer ma Demande
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs font-sans text-muted-foreground mb-3">Ou contactez-nous directement :</p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+212500000000" className="flex items-center gap-2 text-sm font-sans text-foreground hover:text-gold transition-colors">
                      <Phone className="h-4 w-4 text-gold" /> +212 5 00 00 00 00
                    </a>
                    <a href="mailto:contact@yamora.ma" className="flex items-center gap-2 text-sm font-sans text-foreground hover:text-gold transition-colors">
                      <Mail className="h-4 w-4 text-gold" /> contact@yamora.ma
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-8">Biens Similaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {similar.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
