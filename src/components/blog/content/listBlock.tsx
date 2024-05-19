import React from "react";

export default function ListBlock({ items }: { items: { text: string }[] }) {
  return (
    <ul className="list-disc list-inside ml-4">
      {items.map((item, idx) => (
        <li key={idx} dangerouslySetInnerHTML={{ __html: item.text }}></li>
      ))}
    </ul>
  );
}
