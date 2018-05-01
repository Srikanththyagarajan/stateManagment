import * as React from "react";
import { item } from "./application";

interface ItemRrops {
  item: item;
  onToggle: (item: item) => void;
  onRemove: (item: item) => void;
}

const Item: React.SFC<ItemRrops> = props => {
  const { item } = props;
  const onChangeHandle: () => void = () => {
    return props.onToggle(item);
  };
  const remove: () => void = () => {
    return props.onRemove(item);
  };
  return (
    <article className="Item">
      <label htmlFor={item.id}>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={onChangeHandle}
          id={item.id}
        />
        {item.value}
      </label>
      <button className="Item-remove" onClick={remove}>
        Remove
      </button>
    </article>
  );
};

export default Item;
