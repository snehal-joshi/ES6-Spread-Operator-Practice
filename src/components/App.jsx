import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  function onItemChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={onItemChange} value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => {
            return <li>{todoItem} </li>;
          })}
        </ul>
        ;
      </div>
    </div>
  );
}

export default App;
