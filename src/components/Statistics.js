export default function Statistics({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>
          🚀Start adding some items to your Shopping List and they will appear🚀
        </em>
      </footer>
    );

  const numberOfItems = items.length;

  const percentage = Math.floor(
    (items.filter((item) => item.packed).length / numberOfItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything in your Shopping Cart!"
          : `You have ${numberOfItems} items on your list and you already took ${percentage}% of them.`}
      </em>
    </footer>
  );
}
