import { ProductCategories } from "../constants/Constants.ts";

//export type CategoryType = keyof typeof NewsCategory;

export type ProductCategoryType =
  (typeof ProductCategories)[keyof typeof ProductCategories];
