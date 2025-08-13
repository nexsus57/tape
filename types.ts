
export interface ColorOption {
    name: string;
    colors: string[]; // hex codes or 'transparent'
}

export interface Product {
  id: string;
  name:string;
  shortDescription: string;
  description?: string;
  features: string[];
  benefits?: string[];
  uses: string[];
  category: string;
  industries?: string[];
  // New optional fields for detailed view
  minOrderQty?: string;
  brand?: string;
  color?: string;
  images?: string[];
  highlights?: string[];
  availableColors?: ColorOption[];
  customizable?: boolean;
  seo?: {
    title: string;
    description: string;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  subtitle: string;
  description?: string;
  image?: string;
  seo?: {
    title: string;
    description: string;
  };
}

export interface Industry {
  id:string;
  name: string;
  subtitle: string;
  icon: string;
  gradientClasses: string;
  highlight?: boolean;
}

export interface IndustryDetail {
  id: string;
  name: string;
  description: string;
  products: string[];
  image?: string;
  seo?: {
    title: string;
    description: string;
  };
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface NavLinkData {
  name: string;
  path: string;
  isButton?: boolean;
}

export interface Settings {
    gtm: {
        head: string;
        body: string;
    };
    contact: {
        address: string;
        phone1: string;
        phone2: string;
        email: string;
    };
    socialLinks?: {
        facebook?: string;
        linkedin?: string;
        instagram?: string;
    };
    popularProductIds: string[];
    testimonials: Testimonial[];
}
