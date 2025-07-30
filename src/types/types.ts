export interface Article {
  id: string;
  title: string;
  description: string;
  source: { id: string; name: string; url: string };
  category: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
}

export type Category =
  | "all"
  | "world"
  | "nation"
  | "business"
  | "technology"
  | "entertainment"
  | "sports"
  | "science"
  | "health";
