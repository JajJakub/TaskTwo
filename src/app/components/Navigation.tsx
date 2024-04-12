"use client";

import { useState } from "react";
import { ProductCategoryType } from "../types/Types.ts";

type NavigationProps = {
  items: ProductCategoryType[];
  onSelectItem: (item: ProductCategoryType) => void;
};

function Navigation({ items, onSelectItem }: NavigationProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <nav className="tw-w-1/5 float-start tw-h-auto">
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
