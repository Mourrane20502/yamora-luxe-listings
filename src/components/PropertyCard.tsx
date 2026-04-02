import { Link } from "react-router-dom";
import { Bed, Bath, Maximize } from "lucide-react";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Link
      to={`/biens/${property.id}`}
      className="group block bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gold text-accent-foreground text-xs font-sans font-semibold tracking-wider uppercase rounded">
            {property.type}
          </span>
        </div>
        <div className="absolute bottom-4 right-4">
          <span className="px-4 py-2 bg-charcoal/80 backdrop-blur-sm text-primary-foreground text-sm font-sans font-semibold rounded">
            {property.price}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-gold transition-colors mb-2">
          {property.title}
        </h3>
        <p className="text-sm font-sans text-muted-foreground mb-4">
          {property.location}
        </p>
        <div className="flex items-center gap-6 pt-4 border-t border-border">
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Bed className="h-4 w-4" />
              <span className="text-sm font-sans">{property.bedrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Bath className="h-4 w-4" />
            <span className="text-sm font-sans">{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Maximize className="h-4 w-4" />
            <span className="text-sm font-sans">{property.area} m²</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
