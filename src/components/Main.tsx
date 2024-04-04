import { Product } from "../types/Product.ts";
import { ProductPlaceholder } from "../constants/Constants.ts";
import { Link } from "react-router-dom";

type MainCategory = {
  category: string;
};

function Main({ category }: MainCategory) {
  const example: Product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [],
  };

  //API call
  const data: Product[] = [ProductPlaceholder, example, ProductPlaceholder];

  return (
    <main className="tw-w-4/5 tw-float-right tw-px-3">
      <div className="row row-cols-3">
        {data.map((item, index) => (
          <Link
            to={`/products/${item.id}`}
            key={index}
            className="tw-no-underline tw-text-inherit"
          >
            <div className="col border tw-min-h-full">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <img
                src={item.thumbnail}
                className="img-thumbnail"
                alt={category}
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Main;
