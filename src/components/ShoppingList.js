import { useState } from "react";
import Item from "./Item";

export default function ShoppingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("");

  let sortedItems = [...items];

  if (sortBy === "input") {
    sortedItems = [...items];
  }

  if (sortBy === "packed") {
    sortedItems.sort((a, b) => {
      return a.packed - b.packed;
    });
  }

  if (sortBy === "description") {
    sortedItems.sort((a, b) => {
      return a.description.localeCompare(b.description);
    });
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          );
        })}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button className="btn" onClick={onClearItems}>
          Clear
        </button>
      </div>
    </div>
  );
}
