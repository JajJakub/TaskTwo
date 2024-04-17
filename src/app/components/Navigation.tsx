import { ChangeEvent, useState } from "react";
import { ProductCategoryType } from "../types/Types.ts";

type NavigationProps = {
  items: ProductCategoryType[];
  onSelectItem: (item: ProductCategoryType) => void;
  onSearch: (item: string) => void;
};

function Navigation({ items, onSelectItem, onSearch }: NavigationProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const search: string = event.target.value;
    setInputValue(search);
    onSearch(search);
  };

  return (
    <nav className="tw-w-1/5 float-start tw-h-auto">
      <div className="form-outline pb-3">
        <input
          type="search"
          className="form-control"
          placeholder="Search products"
          onChange={handleInputChange}
        />
      </div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${selectedIndex === index && "active"}`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
