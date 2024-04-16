import { Product } from "../types/Product.ts";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL, ProductPlaceholder } from "../constants/Constants.ts";
import { useParams } from "react-router-dom";
import Header from "../components/Header.tsx";
import Carousel from "../components/Carousel.tsx";

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
      <main className="text-center d-flex w-100">
        <section className="w-50 d-flex flex-column">
          <h2 className="fs-1 lead">{data.title}</h2>
          <Carousel images={data.images} />
        </section>
        <aside className="d-flex w-50">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" colSpan={2}>
                  Product Details
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              <tr>
                <th scope="row">Price</th>
                <td>{data.price}</td>
              </tr>
              <tr>
                <th scope="row">Discount</th>
                <td>{data.discountPercentage}</td>
              </tr>
              <tr>
                <th scope="row">Stock</th>
                <td>{data.stock}</td>
              </tr>
              <tr>
                <th scope="row">Rating</th>
                <td>{data.rating}</td>
              </tr>
              <tr>
                <th scope="row">Brand</th>
                <td>{data.brand}</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </main>
      <div className="d-flex w-100 text-center my-4">
        <h2 className="fs-2 lead my-4 mx-auto">{data.description}</h2>
      </div>
    </>
  );
}

export default ProductDetails;
