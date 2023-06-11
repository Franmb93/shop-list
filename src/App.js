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

  useEffect(() => {
    getElements();
  }, []);

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItem}></Form>
      <ShoppingList items={items}></ShoppingList>
      <Statistics></Statistics>
    </div>
  );
}

export default App;
