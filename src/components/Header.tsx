import "./../App.css";

type HeaderProps = {
  category: string;
};

function Header({ category }: HeaderProps) {
  return (
    <header className="tw-w-full ">
      <h1>TEST {category ? category.toUpperCase() : "all".toUpperCase()}</h1>
    </header>
  );
}

export default Header;
