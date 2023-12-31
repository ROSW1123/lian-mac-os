export interface WolfMdData {
  id: string;
  title: string;
  file: string;
  icon: string;
  excerpt: string;
  link?: string;
}

export interface WolfData {
  id: string;
  title: string;
  icon: string;
  md: WolfMdData[];
}
