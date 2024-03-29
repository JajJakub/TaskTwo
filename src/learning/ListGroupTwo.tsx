import { useState } from "react";

function ListGroup() {
  const towns = ["Warsaw", "New York", "Paris", "Lisbona", "Bochnia", "London"];
  //it changes over time so we have to use it like that
  //each component have their own state if you use it more times in App.tsx
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {towns.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {towns.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
