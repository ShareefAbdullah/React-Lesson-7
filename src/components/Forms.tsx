import React from "react";

type FormProps = {
  inputText: string;
  setText: (value: string) => void;
  addItem: () => void;
};

export const Forms: React.FC<FormProps> = ({ inputText, setText, addItem }) => {
  return (
    <div className="forms">
      <input
        type="text"
        placeholder="Add a new item..."
        value={inputText}
        onChange={(input: React.ChangeEvent<HTMLInputElement>) =>
          setText(input.target.value)
        }
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};
