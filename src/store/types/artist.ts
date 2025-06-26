export interface Artist {
  id: string;
  name: string | null;
  category: string;
  subCategory:string[];
  image?: string | "https://placehold.co/400x300/e0e0e0/000000";
  location?: string;
  priceRange?: string;
  rating?: number;
  bio:string;
  languagesSpoken:string[];
}


