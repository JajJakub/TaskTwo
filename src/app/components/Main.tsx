"use client";

import { Product } from "../types/Product.ts";
import { API_BASE_URL, ProductCategories } from "../constants/Constants.ts";
import { Link } from "react-router-dom";
import { ProductCategoryType } from "../types/Types.ts";
import { useEffect, useState } from "react";
import axios from "axios";

type MainCategory = {
  category: ProductCategoryType;
};

function Main({ category }: MainCategory) {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const url =
        `${API_BASE_URL}/products` +
        (category === ProductCategories.All ? `/` : `/category/${category}`);

      axios.get(url).then((result) => {
        const products: Product[] = result.data["products"];
        setData(products);
      });
    };
    fetchData();
  }, [category]);

  return (
    <main className="tw-w-4/5 tw-float-right tw-px-3">
      <div className="row row-cols-3 tw-mb-3">
        {data.map((item, index) => (
          <Link
            to={`/products/${item.id}`}
            key={index}
            className="tw-no-underline tw-text-inherit tw-mb-3"
          >
            <div className="col border tw-min-h-full text-center flex-column justify-content-center">
              <h2 className="fs-1 lead">{item.title}</h2>
              <p className="tw-px-0.5">{item.description}</p>
              <img
                src={item.thumbnail}
                className="img-thumbnail tw-max-h-80 d-block mx-auto"
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
