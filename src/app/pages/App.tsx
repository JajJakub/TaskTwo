import Navigation from "../components/Navigation.tsx";
import { useState } from "react";
import { ProductCategories } from "../constants/Constants.ts";
import Header from "../components/Header.tsx";
import { ProductCategoryType } from "../types/Types.ts";
import Main from "../components/Main.tsx";

function App() {
  const categories: ProductCategoryType[] = Object.values(ProductCategories);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategoryType>(
    ProductCategories.All,
  );

  return (
    <>
      <Header />
      <Navigation items={categories} onSelectItem={setSelectedCategory} />
      <Main category={selectedCategory} />
    </>
  );
}

export default App;