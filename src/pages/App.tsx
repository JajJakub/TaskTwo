import Navigation from "../components/Navigation.tsx";
import { useState } from "react";
import MainCategory from "../components/MainCategory.tsx";
import { Category, CategoryLabels } from "../constants/Constants.ts";
import Header from "../components/Header.tsx";
import { CategoryType } from "../types/Types.ts";
import { NewsSource } from "../types/News.ts";
import MainNews from "../components/MainNews.tsx";

function App() {
  const categories: CategoryType[] = [
    CategoryLabels[Category.All],
    CategoryLabels[Category.Business],
    CategoryLabels[Category.Entertainment],
    CategoryLabels[Category.General],
    CategoryLabels[Category.Health],
    CategoryLabels[Category.Science],
    CategoryLabels[Category.Sports],
    CategoryLabels[Category.Technology],
  ];
  const data: NewsSource[] = [
    {
      id: "abc-news",
      name: "ABC News",
      description:
        "Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.",
      url: "https://abcnews.go.com",
      imageUrl:
        "https://komonews.com/resources/media/96ce5915-698b-4644-b72d-7f6ec13244aa-large16x9_20240401_Zermatt_PolcantVS_01768x576.jpeg",
    },
    {
      id: "abc-news-au",
      name: "ABC News (AU)",
      description:
        "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      url: "https://www.abc.net.au/news",
      imageUrl:
        "https://komonews.com/resources/media/96ce5915-698b-4644-b72d-7f6ec13244aa-large16x9_20240401_Zermatt_PolcantVS_01768x576.jpeg",
    },
    {
      id: "abc-news-au",
      name: "ABC News (AU)",
      description:
        "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      url: "https://www.abc.net.au/news",
      imageUrl:
        "https://komonews.com/resources/media/96ce5915-698b-4644-b72d-7f6ec13244aa-large16x9_20240401_Zermatt_PolcantVS_01768x576.jpeg",
    },
    {
      id: "abc-news-au",
      name: "ABC News (AU)",
      description:
        "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
      url: "https://www.abc.net.au/news",
      imageUrl:
        "https://komonews.com/resources/media/96ce5915-698b-4644-b72d-7f6ec13244aa-large16x9_20240401_Zermatt_PolcantVS_01768x576.jpeg",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedNews, setSelectedNews] = useState<NewsSource>();

  return (
    <>
      <Header category={selectedCategory} />
      <Navigation items={categories} onSelectItem={setSelectedCategory} />
      {selectedNews ? (
        <MainNews category={selectedCategory} news={selectedNews} />
      ) : (
        <MainCategory
          data={data}
          category={selectedCategory}
          onSelectItem={setSelectedNews}
        />
      )}
    </>
  );
}

export default App;
