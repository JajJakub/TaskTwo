import { Product } from "../types/Product.ts";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL, ProductPlaceholder } from "../constants/Constants.ts";
import { useParams } from "react-router-dom";
import Header from "../components/Header.tsx";

function ProductDetails() {
  const params = useParams<string>();
  const [data, setData] = useState<Product>(ProductPlaceholder);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${API_BASE_URL}/products/${params.productId}`)
        .then((result) => {
          const product: Product = result.data;
          setData(product);
        });
    };
    fetchData();
  }, [params]);

  return (
    <>
      <Header />
      <main className=" text-center tw-h-auto d-flex flex-column">
        <h2 className="fs-1 lead tw-w-full">{data.title}</h2>
        <div className="row row-cols-2 tw-mb-3 tw-w-4/5 align-self-center">
          {data.images.map((url, index) => (
            <img
              className="tw-max-h-80 mx-auto"
              src={url}
              alt={index + ""}
              key={index}
            />
          ))}
        </div>
        <div>
          <p>{data.description}</p>
          <p>{data.brand}</p>
          <p>{data.rating}</p>
        </div>
      </main>
    </>
  );
}

export default ProductDetails;
