import React from "react";

const Dropdown = (items) => {
  return (
    <div className="dropdown">
      {items.items.map((item) => (
        <p key={items.items.indexOf(item)} onClick={() => items.handleOnClick(item)}>{item}</p>
      ))}
    </div>
  );
};

export default Dropdown;
