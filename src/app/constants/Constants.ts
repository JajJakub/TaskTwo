import { Product } from "../types/Product.ts";

export const NewsCategory = {
  All: "all",
  Business: "business",
  Entertainment: "entertainment",
  General: "general",
  Health: "health",
  Science: "science",
  Sports: "sports",
  Technology: "technology",
} as const;

export const NewsCategoryLabels = {
  [NewsCategory.All]: "All",
  [NewsCategory.Business]: "Business",
  [NewsCategory.Entertainment]: "Entertainment",
  [NewsCategory.General]: "General",
  [NewsCategory.Health]: "Health",
  [NewsCategory.Science]: "Science",
  [NewsCategory.Sports]: "Sports",
  [NewsCategory.Technology]: "Technology",
} as const;

export const ProductCategories = {
  All: "all",
  Smartphones: "smartphones",
  Laptops: "laptops",
  Fragrances: "fragrances",
  Skincare: "skincare",
  Groceries: "groceries",
  HomeDecoration: "home-decoration",
  Furniture: "furniture",
  Tops: "tops",
  WomensDresses: "womens-dresses",
  WomensShoes: "womens-shoes",
  MensShirts: "mens-shirts",
  MensShoes: "mens-shoes",
  MensWatches: "mens-watches",
  WomensWatches: "womens-watches",
  WomensBags: "womens-bags",
  WomensJewellery: "womens-jewellery",
  Sunglasses: "sunglasses",
  Automotive: "automotive",
  Motorcycle: "motorcycle",
  Lighting: "lighting",
} as const;

export const ProductCategoryLabel = {
  [ProductCategories.All]: "All",
  [ProductCategories.Smartphones]: "Smartphones",
  [ProductCategories.Laptops]: "Laptops",
  [ProductCategories.Fragrances]: "Fragrances",
  [ProductCategories.Skincare]: "Skincare",
  [ProductCategories.Groceries]: "Groceries",
  [ProductCategories.HomeDecoration]: "Home Decoration",
  [ProductCategories.Furniture]: "Furniture",
  [ProductCategories.Tops]: "Tops",
  [ProductCategories.WomensDresses]: "Women's Dresses",
  [ProductCategories.WomensShoes]: "Women's Shoes",
  [ProductCategories.MensShirts]: "Men's Shirts",
  [ProductCategories.MensShoes]: "Men's Shoes",
  [ProductCategories.MensWatches]: "Men's Watches",
  [ProductCategories.WomensWatches]: "Women's Watches",
  [ProductCategories.WomensBags]: "Women's Bags",
  [ProductCategories.WomensJewellery]: "Women's Jewellery",
  [ProductCategories.Sunglasses]: "Sunglasses",
  [ProductCategories.Automotive]: "Automotive",
  [ProductCategories.Motorcycle]: "Motorcycle",
  [ProductCategories.Lighting]: "Lighting",
} as const;

export const ProductPlaceholder: Product = {
  brand: "",
  category: "",
  description: "",
  discountPercentage: 0,
  id: 0,
  images: [],
  price: 0,
  rating: 0,
  stock: 0,
  thumbnail: "",
  title: "",
} as const;

export const API_BASE_URL = import.meta.env.VITE_BASE_URL;
