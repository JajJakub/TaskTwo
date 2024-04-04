import { NewsSource } from "../types/News.ts";

type MainNewsProps = {
  category: string;
  news: NewsSource;
};

function MainNews({ category, news }: MainNewsProps) {
  return (
    <main className="tw-w-4/5 tw-float-right tw-px-3">
      <div>
        <h1>{category}</h1>
        <h2>{news.name}</h2>
        <p>{news.description}</p>
      </div>
    </main>
  );
}

export default MainNews;
