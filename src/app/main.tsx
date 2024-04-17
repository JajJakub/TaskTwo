import React from "react";
import ReactDOM from "react-dom/client";
import ProductsPage from "./pages/ProductsPage.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";

const router = createBrowserRouter([
  { path: "/", element: <ProductsPage />, errorElement: <NotFound /> },
  { path: "/products", element: <ProductsPage /> },
  { path: "/products/:productId", element: <ProductDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
