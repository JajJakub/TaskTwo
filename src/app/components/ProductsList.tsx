import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Product } from "../types/Product.ts";
import { ProductCategoryType } from "../types/Types.ts";
import { API_BASE_URL, ProductCategories } from "../constants/Constants.ts";

type MainCategory = {
  category: ProductCategoryType;
  searchString: string;
};

function ProductsList({ category, searchString }: MainCategory) {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = () => {
      if (searchString === "") {
        const url =
          `${API_BASE_URL}/products` +
          (category === ProductCategories.All ? `/` : `/category/${category}`);

        axios.get(url).then((result) => {
          const products: Product[] = result.data["products"];
          setData(products);
        });
      } else {
        axios
          .get(`${API_BASE_URL}/products/search?q=${searchString}`)
          .then((result) => {
            const products: Product[] = result.data["products"];
            setData(products);
          });
      }
    };
    fetchData();
  }, [searchString, category]);

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

export default ProductsList;
