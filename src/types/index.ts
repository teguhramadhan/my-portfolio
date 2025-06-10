// src/types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string; // Tanda '?' berarti opsional
  slug?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

// Jika Anda ingin mendefinisikan tipe untuk props di sini, bisa juga
export interface LayoutProps {
  children: React.ReactNode;
}
