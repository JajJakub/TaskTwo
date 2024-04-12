import { MouseEvent } from "react";
function ListGroup() {
  const towns = ["Warsaw", "New York", "Paris", "Lisbona", "Bochnia", "London"];
  //const towns = [];

  const handleClick = (event: MouseEvent) => console.log(event);
  //Event handler

  return (
    <>
      <h1>List</h1>
      {/*often used, if true then render <p>, if false then nothing*/}
      {towns.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {towns.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

//<> and </> == <fragment> </Fragment>  z import {Fragment} from "react"

export default ListGroup;
