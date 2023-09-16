import React from "react";

const Home = (items) => {
  return (
    <div className="home">
      <h1>What Is Your Favourite Fruit ?</h1>
      <button onMouseEnter={items.hoverMouse}>
        <span>Fruits</span>{" "}
        <i
          className={
            items.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-up"
          }
        ></i>
      </button>
    </div>
  );
};

export default Home;
