import Item from "./Item";

export default function ShoppingList({ items }) {
  return (
    <ul className="list">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
}
