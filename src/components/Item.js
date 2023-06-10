import { useState } from "react";

export default function Item({ item }) {
  const [packed, setPacked] = useState(item.packed);

  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onClick={() => setPacked((curPacked) => !curPacked)}
      />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
