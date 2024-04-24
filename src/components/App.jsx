import React, { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [trackList, setTrackList] = useState(["A item"]);

  function handleChange(event) {
    const inputValue = event.target.value;
    setList(inputValue);
  }
  function addTodos() {
    setTrackList((prevItem) => {
      return [...prevItem, list]; // if you don't keep track of your state with this function it will overwrite the previous one
    });
    setList("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={list} />
        <button onClick={addTodos}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {trackList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
