import "../App.css";

function Header() {
  return (
    <header className="tw-w-full py-3 mb-4 border-bottom">
      <div className="d-flex flex-wrap ">
        <p className="d-flex mb-3 mb-lg-0 text-decoration-none tw-pl-3">
          <img className="bi me-2" src="/src/app/assets/react.svg" alt="logo" />
          <span className="fs-4">Product API</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
