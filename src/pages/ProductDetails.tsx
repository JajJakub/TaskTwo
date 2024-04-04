import { Product } from "../types/Product.ts";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductPlaceholder } from "../constants/Constants.ts";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams<string>();
  const [data, setData] = useState<Product>(ProductPlaceholder);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${import.meta.env.VITE_BASE_URL}/products/${params.productId}`)
        .then((result) => {
          const product: Product = result.data;
          setData(product);
        });
    };
    fetchData();
  }, [params]);

  return (
    <main className="tw-w-4/5 tw-float-right tw-px-3">
      <div>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <img src={data.thumbnail} className="img-thumbnail" alt="image" />
      </div>
    </main>
  );
}

export default ProductDetails;
