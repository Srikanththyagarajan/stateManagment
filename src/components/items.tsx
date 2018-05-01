import * as React from "react";
import Item from "./item";
import { item } from "./application";

interface IdataProps {
  title: string;
  items: item[];
  onToggle: (item: item) => void;
  onRemove: (item: item) => void;
}

export const Items: React.SFC<IdataProps> = props => {
  const { title, items, onToggle, onRemove } = props;
  return (
    <section className="Items">
      <h2>
        {title} ({items.length})
      </h2>
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
};
