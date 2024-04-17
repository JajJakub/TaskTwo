import Navigation from "../components/Navigation.tsx";
import { useState } from "react";
import { ProductCategories } from "../constants/Constants.ts";
import Header from "../components/Header.tsx";
import { ProductCategoryType } from "../types/Types.ts";
import ProductsList from "../components/ProductsList.tsx";

function ProductsPage() {
  const categories: ProductCategoryType[] = Object.values(ProductCategories);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryType>(
    ProductCategories.All,
  );
  const [searchString, setSearchString] = useState<string>("");

  return (
    <>
      <Header />
      <Navigation
        items={categories}
        onSelectItem={setSelectedCategory}
        onSearch={setSearchString}
      />
      <ProductsList category={selectedCategory} searchString={searchString} />
    </>
  );
}

export default ProductsPage;
