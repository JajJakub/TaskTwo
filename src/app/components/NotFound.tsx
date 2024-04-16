"use client";

import { Link } from "react-router-dom";
import Header from "./Header.tsx";

function NotFound() {
  return (
    <>
      <Header />
      <main className="d-flex text-center flex-column">
        <h1 className="fs-1 lead">404 Not Found</h1>
        <Link className="lead" to={"/"}>
          Main Page
        </Link>
      </main>
    </>
  );
}

export default NotFound;
