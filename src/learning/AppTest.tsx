import ListGroup from "./ListGroupThree.tsx";

function AppTest() {
  const towns = ["Warsaw", "New York", "Paris", "Lisbona", "Bochnia", "London"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={towns}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default AppTest;
