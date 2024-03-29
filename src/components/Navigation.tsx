import { useState } from "react";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function Navigation({ items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <nav>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
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
