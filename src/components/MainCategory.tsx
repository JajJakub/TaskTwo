import { NewsSource } from "../types/News.ts";

type MainCategory = {
  data: NewsSource[];
  category: string;
  onSelectItem: (item: NewsSource) => void;
};

function MainCategory({ data, category, onSelectItem }: MainCategory) {
  return (
    <main className="tw-w-4/5 tw-float-right tw-px-3">
      <div className="row row-cols-3">
        {data.map((item, index) => (
          <div
            className="col"
            key={index}
            onClick={() => {
              onSelectItem(item);
            }}
          >
            <h2>{item.name}</h2>
            <p>{item.url}</p>
            <img src={item.imageUrl} className="img-thumbnail" alt={category} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainCategory;
