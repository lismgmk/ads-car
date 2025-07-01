export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ContactForm {
  name: string;
  phone: string;
  message: string;
}

export interface Article {
  title: string;
  excerpt: string;
  date: string;
}
