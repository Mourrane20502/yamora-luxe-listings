import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  priceValue: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  images: string[];
  description: string;
  amenities: string[];
  featured: boolean;
  category: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Villa Méditerranéenne d'Exception",
    location: "Casablanca, Anfa",
    price: "12 500 000 MAD",
    priceValue: 12500000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    image: property1,
    images: [property1, property2, property3],
    description: "Découvrez cette villa méditerranéenne d'exception située dans le prestigieux quartier d'Anfa. Avec ses 450m² de surface habitable, cette propriété offre un cadre de vie luxueux avec piscine à débordement, jardin paysager et terrasses panoramiques. Finitions haut de gamme, domotique intégrée et matériaux nobles caractérisent chaque espace de cette demeure d'exception.",
    amenities: ["Piscine", "Jardin", "Garage double", "Domotique", "Terrasse", "Vue mer", "Sécurité 24/7", "Climatisation centrale"],
    featured: true,
    category: "villa",
  },
  {
    id: "2",
    title: "Appartement Haussmannien Rénové",
    location: "Rabat, Hay Riad",
    price: "4 200 000 MAD",
    priceValue: 4200000,
    type: "Appartement",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: property2,
    images: [property2, property1, property4],
    description: "Magnifique appartement entièrement rénové dans le quartier prisé de Hay Riad. Hauts plafonds, parquet massif et cheminée en marbre confèrent à ce bien un charme incomparable. Cuisine équipée haut de gamme, trois chambres spacieuses et un balcon donnant sur un parc arboré.",
    amenities: ["Parquet", "Cheminée", "Balcon", "Cave", "Gardien", "Ascenseur", "Parking", "Climatisation"],
    featured: true,
    category: "appartement",
  },
  {
    id: "3",
    title: "Penthouse Vue Panoramique",
    location: "Marrakech, Guéliz",
    price: "8 900 000 MAD",
    priceValue: 8900000,
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 3,
    area: 320,
    image: property3,
    images: [property3, property5, property6],
    description: "Penthouse d'exception offrant une vue panoramique à 360° sur Marrakech et l'Atlas. Aménagements intérieurs signés par un architecte de renom, terrasse privative de 100m² avec jacuzzi. Un bien rare qui redéfinit le luxe urbain.",
    amenities: ["Terrasse panoramique", "Jacuzzi", "Home cinéma", "Dressing", "Conciergerie", "Sécurité", "Parking privé", "Buanderie"],
    featured: true,
    category: "penthouse",
  },
  {
    id: "4",
    title: "Riad Traditionnel Restauré",
    location: "Fès, Médina",
    price: "6 800 000 MAD",
    priceValue: 6800000,
    type: "Riad",
    bedrooms: 6,
    bathrooms: 5,
    area: 380,
    image: property4,
    images: [property4, property2, property1],
    description: "Riad authentique entièrement restauré dans les règles de l'art au cœur de la médina de Fès. Patio central avec fontaine, zellige traditionnel et bois sculpté. Six suites élégantes, terrasse avec vue sur les toits de la médina et hammam privatif.",
    amenities: ["Patio", "Hammam", "Terrasse", "Fontaine", "Zellige", "Bois sculpté", "Wifi", "Climatisation"],
    featured: false,
    category: "riad",
  },
  {
    id: "5",
    title: "Bureau Premium Centre d'Affaires",
    location: "Casablanca, Marina",
    price: "3 500 000 MAD",
    priceValue: 3500000,
    type: "Bureau",
    bedrooms: 0,
    bathrooms: 2,
    area: 200,
    image: property5,
    images: [property5, property3, property6],
    description: "Espace de bureau premium dans le nouveau centre d'affaires de Casablanca Marina. Vue imprenable sur l'océan, aménagement moderne et flexible, connectivité haut débit et services de conciergerie inclus.",
    amenities: ["Vue océan", "Parking", "Sécurité", "Fibre optique", "Salle de réunion", "Kitchenette", "Climatisation", "Accès 24/7"],
    featured: false,
    category: "commercial",
  },
  {
    id: "6",
    title: "Maison de Charme avec Jardin",
    location: "Tanger, Montagne",
    price: "5 200 000 MAD",
    priceValue: 5200000,
    type: "Maison",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    image: property6,
    images: [property6, property4, property1],
    description: "Charmante maison de caractère nichée sur les hauteurs de Tanger. Jardin luxuriant de 500m², terrasses multiples avec vue sur le détroit de Gibraltar. Architecture alliant tradition et modernité avec des finitions soignées.",
    amenities: ["Jardin 500m²", "Vue détroit", "Cheminée", "Garage", "Buanderie", "Terrasse", "Barbecue", "Arrosage automatique"],
    featured: false,
    category: "maison",
  },
];

export const categories = [
  { id: "villa", label: "Villas", count: 24 },
  { id: "appartement", label: "Appartements", count: 58 },
  { id: "penthouse", label: "Penthouses", count: 12 },
  { id: "riad", label: "Riads", count: 8 },
  { id: "commercial", label: "Commercial", count: 15 },
  { id: "maison", label: "Maisons", count: 31 },
];

export const testimonials = [
  {
    id: "1",
    name: "Sophia El Amrani",
    role: "Investisseur Immobilier",
    text: "Yamora a transformé ma vision de l'immobilier de luxe. Leur expertise et leur attention aux détails sont incomparables. Un service véritablement premium.",
    rating: 5,
  },
  {
    id: "2",
    name: "Karim Benslimane",
    role: "Chef d'Entreprise",
    text: "L'accompagnement personnalisé de l'équipe Yamora m'a permis de trouver la propriété de mes rêves en un temps record. Professionnalisme exemplaire.",
    rating: 5,
  },
  {
    id: "3",
    name: "Amina Tazi",
    role: "Architecte d'Intérieur",
    text: "En tant que professionnelle du design, je suis impressionnée par la qualité des biens proposés par Yamora. Chaque propriété est une œuvre d'art.",
    rating: 5,
  },
];

export const teamMembers = [
  {
    name: "Hassan Yamora",
    role: "Fondateur & Directeur Général",
    description: "20 ans d'expérience dans l'immobilier de prestige",
  },
  {
    name: "Leila Bennani",
    role: "Directrice Commerciale",
    description: "Experte en négociation et relations clients",
  },
  {
    name: "Youssef Alaoui",
    role: "Responsable Acquisitions",
    description: "Spécialiste du marché immobilier marocain",
  },
  {
    name: "Nadia Chraibi",
    role: "Conseillère Patrimoniale",
    description: "Gestion de patrimoine et investissement",
  },
];
