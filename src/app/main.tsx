import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/NotFound.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFound /> },
  { path: "/products", element: <App /> },
  { path: "/products/:productId", element: <ProductDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
