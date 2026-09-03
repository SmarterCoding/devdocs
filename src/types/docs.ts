export interface NavItem {
  title: string;
  slug: string;
  children?: NavItem[];
}

export interface SearchItem {
  title: string;
  description: string;
  path: string;
  category: string;
}
