interface Props {
  category: string;
}

function Main({ category }: Props) {
  return (
    <main>
      <div>
        <p>TEST {category ? category.toUpperCase() : "all".toUpperCase()}</p>
      </div>
    </main>
  );
}

export default Main;
