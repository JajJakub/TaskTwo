import Navigation from "../components/Navigation.tsx";
import { useState } from "react";
import { ProductCategory } from "../constants/Constants.ts";
import Header from "../components/Header.tsx";
import { Category } from "../types/Types.ts";
import Main from "../components/Main.tsx";

function App() {
  const categories: Category[] = Object.keys(ProductCategory) as Category[];
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <Header category={selectedCategory} />
      <Navigation items={categories} onSelectItem={setSelectedCategory} />
      <Main category={selectedCategory} />
    </>
  );
}

export default App;
