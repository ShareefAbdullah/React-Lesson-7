import React from "react";
import { addItem } from "../redux/todoSlice";
import { useTypedDispatch, useTypedSelector } from "../redux/hooks";
import styles from "../styles/forms.module.scss";

type FormProps = {
  inputText: string;
  setText: (value: string) => void;
};

export const Forms: React.FC<FormProps> = ({ inputText, setText }) => {
  const dispatch = useTypedDispatch();
  const todoItems = useTypedSelector((state) => state.todo.todoItems);

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
    <div className={styles.forms}>
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
