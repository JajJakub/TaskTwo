"use client";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <p>404 Not Found</p>
      <Link to={"/"}>Main Page</Link>
    </div>
  );
}

export default NotFound;
