import { useEffect, useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import ShoppingList from "./components/ShoppingList";
import Statistics from "./components/Statistics";

function App() {
  const [items, setItems] = useState([]);

  const getElements = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    setItems(data);
  };

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(deleteItemId) {
    setItems((items) => items.filter((item) => item.id !== deleteItemId));
  }

  function handleToggleItem(toggleItemId) {
    setItems((items) =>
      items.map((item) =>
        item.id === toggleItemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" &&
      process.env.NEXT_PUBLIC_VERCEL_ENV !== "production"
    ) {
      getElements();
    }
  }, []);

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItem}></Form>
      <ShoppingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      ></ShoppingList>
      <Statistics items={items}></Statistics>
    </div>
  );
}

export default App;
