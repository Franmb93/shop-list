import { useEffect, useState } from "react";
import Item from "./Item";

export default function ShoppingList() {
  const [elements, setElements] = useState([]);

  const getElements = async () => {
    const response = await fetch("data.json");
    const data = await response.json();
    setElements(data);
    console.log(data);
  };

  useEffect(() => {
    getElements();
  }, []);

  return (
    <ul className="list">
      {elements.map((element) => {
        return <Item key={element.id} item={element} />;
      })}
    </ul>
  );
}
