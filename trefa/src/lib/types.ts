export interface HeroSlide {
  id: string;
  image_url: string;
  alt_text: string;
  sort_order: number;
  active: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo_url: string;
  sort_order: number;
}

export interface LicenseCategory {
  id: string;
  code: string;
  name: string;
  description: string;
  min_age: number;
  requirements: string;
}

export interface Course {
  id: string;
  category_id: string;
  start_date: string;
  status: "planned" | "open" | "full" | "in_progress" | "completed";
  note: string;
  license_category?: LicenseCategory;
}

export interface MotoVariant {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  sort_order: number;
}

export interface Vehicle {
  id: string;
  name: string;
  type: "motorcycle" | "car";
  image_url: string;
  specs: string;
  sort_order: number;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  published: boolean;
  published_at: string;
}

export interface Pricing {
  id: string;
  category: string;
  item: string;
  price: number;
  note: string;
  sort_order: number;
}

export interface Document {
  id: string;
  title: string;
  file_url: string;
  file_type: string;
  sort_order: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
}

export interface SiteSetting {
  key: string;
  value: Record<string, unknown>;
}
