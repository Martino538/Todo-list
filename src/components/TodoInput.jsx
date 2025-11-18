import { useState } from "react";

export default function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={handleChange}
        type="text"
        placeholder="Add task..."
      />
      <button
        onClick={() => {
          if (!inputValue) {
            return;
          }
          handleAddTodo(inputValue);
          setInputValue('');
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
