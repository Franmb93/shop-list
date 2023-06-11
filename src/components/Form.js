import { useState } from "react";

export default function Form({ onAddItems }) {
  const [newItem, setNewItem] = useState({
    quantity: 1,
    description: "",
    packed: false,
    id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem.description) return;
    if (newItem.quantity < 1) return;

    const submitedItem = { ...newItem, packed: false, id: Date.now() };

    setNewItem(submitedItem);
    onAddItems(submitedItem);

    setNewItem({ quantity: 1, description: "", packed: false, id: "" });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>💰 What do you need to buy? 💰</h3>
      <select
        value={newItem.quantity}
        onChange={(e) => {
          setNewItem({ ...newItem, quantity: +e.target.value });
        }}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={newItem.description}
        onChange={(e) =>
          setNewItem({ ...newItem, description: e.target.value })
        }
      ></input>
      <button className="btn">ADD</button>
    </form>
  );
}
