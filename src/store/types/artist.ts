export interface Artist {
  id: string;
  name: string | null;
  category: string;
  subCategory:string[];
  image?: string;
  location?: string;
  priceRange?: string;
  rating?: number;
  
}


