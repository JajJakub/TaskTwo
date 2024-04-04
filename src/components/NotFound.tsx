import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      404 Not Found
      <Link to={"/"}>Main Page</Link>
    </div>
  );
}

export default NotFound;
