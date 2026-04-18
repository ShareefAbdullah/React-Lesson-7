import React from "react";

export const Forms = ({inputText, setText, addItem}) => {
    return (
        <div className="forms">
            <input
                type="text" 
                placeholder="Add a new item..."
                value={inputText}
                onChange={(input) => setText(input.target.value)}
            />
            <button onClick={addItem}>Add</button>
      </div>
    )
}