
export interface Product {
  id: number;
  name: string;
  unit: string;
  price: number;
  category: string;
  isAvailable: boolean;
  image: string;
}

export interface Stats {
  customers: number;
  projects: number;
  experience: number;
  deliveryTons: number;
}

export interface Review {
  id: number;
  user: string;
  comment: string;
  rating: number;
  date: string;
}

export type CategoryKey = 'cement' | 'steel' | 'heblex' | 'brick' | 'chemicals' | 'insulation';
