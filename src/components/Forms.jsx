import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/todoSlice";

export const Forms = ({ inputText, setText }) => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.todoItems);

  const handleSubmit = () => {
    const cleanInput = inputText.trim();

    if (cleanInput === "") {
      return alert("Please enter a task!");
    }

    const isDuplicate = todoItems.some(
      (item) => item.text.toLowerCase() === cleanInput.toLowerCase()
    );

    if (isDuplicate) {
      return alert("This item is already on the list!");
    }
    dispatch(addItem(cleanInput));
    setText("");
  };

  return (
    <div className="forms">
      <input
        type="text"
        placeholder="Add a new item..."
        value={inputText}
        onChange={(input) => setText(input.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
