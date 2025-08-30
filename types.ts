
export enum Category {
  Clothware = 'Clothware',
  Footware = 'Footware',
}

export enum SubCategory {
  Men = 'Men',
  Women = 'Women',
  Kids = 'Kids',
}

export type Product = {
  id: number;
  name: string;
  category: Category;
  subCategory: SubCategory;
  price: number;
  discountPrice?: number;
  isNewArrival: boolean;
  imageUrl: string;
  sizes: string[];
};

export type Page = 'Home' | 'Clothware' | 'Footware' | 'Discounts' | 'About' | 'Contact';
