import { useState } from "react";

export default function Form() {
  const [newItem, setNewItem] = useState({ quantity: 1, description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem.description) return;
    if (newItem.quantity < 1) return;

    setNewItem({ ...newItem, packed: false, id: Date.now() });

    setNewItem({ quantity: 1, description: "" });
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
          <option value={number}>{number}</option>
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
