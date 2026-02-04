
import React from 'react';
import { Product, CategoryKey } from './types';

export const CATEGORIES: Record<CategoryKey, { label: string; icon: string; color: string }> = {
  cement: { label: 'سیمان و پودر', icon: 'bx-package', color: 'bg-slate-200 text-slate-700' },
  steel: { label: 'آهن آلات', icon: 'bx-unite', color: 'bg-zinc-800 text-white' },
  heblex: { label: 'بلوک هبلکس', icon: 'bx-cube-alt', color: 'bg-blue-100 text-blue-700' },
  brick: { label: 'آجر و سفال', icon: 'bx-grid-alt', color: 'bg-orange-100 text-orange-700' },
  chemicals: { label: 'چسب و افزودنی', icon: 'bx-flask', color: 'bg-emerald-100 text-emerald-700' },
  insulation: { label: 'عایق و ایزوگام', icon: 'bx-droplet', color: 'bg-purple-100 text-purple-700' },
};

export const INITIAL_PRODUCTS: Product[] = [
  { id: 1, name: "سیمان تیپ ۲ یزد", unit: "کیسه ۵۰ کیلویی", price: 85000, category: "cement", isAvailable: true, image: "https://picsum.photos/seed/cement/400/300" },
  { id: 2, name: "بلوک هبلکس رضوی", unit: "متر مکعب", price: 1450000, category: "heblex", isAvailable: true, image: "https://picsum.photos/seed/heblex/400/300" },
  { id: 3, name: "میلگرد ۱۴ نیشابور", unit: "شاخه ۱۲ متری", price: 285000, category: "steel", isAvailable: true, image: "https://picsum.photos/seed/steel/400/300" },
  { id: 4, name: "چسب پودری پرسلان", unit: "کیسه ۲۰ کیلویی", price: 195000, category: "chemicals", isAvailable: true, image: "https://picsum.photos/seed/chem/400/300" },
  { id: 5, name: "آجر سفال ۱۰ سانتی", unit: "قالب", price: 4200, category: "brick", isAvailable: true, image: "https://picsum.photos/seed/brick/400/300" },
  { id: 6, name: "ایزوگام شرق ۶۷۳", unit: "رول ۱۰ متری", price: 980000, category: "insulation", isAvailable: false, image: "https://picsum.photos/seed/iso/400/300" },
];
