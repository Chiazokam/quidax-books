declare interface BookType {
  id: string
  title: string;
  author: string;
  release_date: string;
  number_of_purchases: number;
  likes: number;
  rating: number;
  price: number;
  currency: string;
  available_copies: number
  full_description: string;
  image_url: string;
  tags: string[];
  genres: string[];
}

declare interface CartItem {
  id: string;
  image_url: string;
  price: number;
  title: string;
  author: string;
  available_copies: number
}