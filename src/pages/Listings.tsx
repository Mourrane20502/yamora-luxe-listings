import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";
import { properties, categories } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";

const Listings = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minArea, setMinArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const filtered = useMemo(() => {
    let result = [...properties];
    if (search) {
      const s = search.toLowerCase();
      result = result.filter(
        (p) => p.title.toLowerCase().includes(s) || p.location.toLowerCase().includes(s)
      );
    }
    if (category) result = result.filter((p) => p.category === category);
    if (minPrice) result = result.filter((p) => p.priceValue >= Number(minPrice));
    if (maxPrice) result = result.filter((p) => p.priceValue <= Number(maxPrice));
    if (minArea) result = result.filter((p) => p.area >= Number(minArea));
    if (bedrooms) result = result.filter((p) => p.bedrooms >= Number(bedrooms));
    if (sortBy === "price-asc") result.sort((a, b) => a.priceValue - b.priceValue);
    if (sortBy === "price-desc") result.sort((a, b) => b.priceValue - a.priceValue);
    if (sortBy === "area-desc") result.sort((a, b) => b.area - a.area);
    return result;
  }, [search, category, sortBy, minPrice, maxPrice, minArea, bedrooms]);

  return (
    <div className="min-h-screen">
      <Header />

      <PageHeader
        title="Nos Biens Immobiliers"
        subtitle="Parcourez notre sélection de propriétés de prestige à travers le Maroc."
        breadcrumbs={[{ label: "Nos Biens" }]}
      />

      {/* Filters */}
      <section className="py-5 bg-card border-b border-border sticky top-[5rem] lg:top-[7.5rem] z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher par titre ou localisation..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none placeholder:text-muted-foreground"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2.5 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none"
            >
              <option value="">Toutes catégories</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>{c.label}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none"
            >
              <option value="default">Trier par</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
              <option value="area-desc">Surface décroissante</option>
            </select>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2.5 rounded border border-border text-foreground font-sans text-sm hover:border-gold transition-colors"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtres
              <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          </div>

          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-border">
              <div>
                <label className="text-xs font-sans text-muted-foreground mb-1 block">Prix min (MAD)</label>
                <input type="number" placeholder="0" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none" />
              </div>
              <div>
                <label className="text-xs font-sans text-muted-foreground mb-1 block">Prix max (MAD)</label>
                <input type="number" placeholder="∞" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none" />
              </div>
              <div>
                <label className="text-xs font-sans text-muted-foreground mb-1 block">Surface min (m²)</label>
                <input type="number" placeholder="0" value={minArea} onChange={(e) => setMinArea(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none" />
              </div>
              <div>
                <label className="text-xs font-sans text-muted-foreground mb-1 block">Chambres min</label>
                <input type="number" placeholder="0" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-secondary text-foreground font-sans text-sm border-0 outline-none" />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 bg-warm-white">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm font-sans text-muted-foreground mb-8">
            {filtered.length} bien{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}
          </p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg font-serif text-foreground mb-2">Aucun bien trouvé</p>
              <p className="text-sm font-sans text-muted-foreground">Essayez de modifier vos critères de recherche.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Listings;
