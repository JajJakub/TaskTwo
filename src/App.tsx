import Navigation from "./components/Navigation.tsx";
import { useState } from "react";
import Main from "./components/Main.tsx";

function App() {
  const categories = [
    "all",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const [selectedCategory, setCategory] = useState("");

  return (
    <>
      <Navigation items={categories} onSelectItem={setCategory} />
      <Main category={selectedCategory} />
    </>
  );
}

export default App;
