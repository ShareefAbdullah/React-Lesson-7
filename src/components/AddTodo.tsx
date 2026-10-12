import React from "react";

type TodoProps = {
  todoItems: Array<{
    favorite: boolean;
    text: string;
  }>;
  makeFavorite: (index: number) => void;
  deleteItem: (index: number) => void;
};

export const AddTodo: React.FC<TodoProps> = ({
  todoItems,
  makeFavorite,
  deleteItem,
}) => {
  return todoItems.map((item, index) => (
    <div className="todo_list">
      <div className={item.favorite ? "todo selected" : "todo"}>
        <div className="favorite">
          <button onClick={() => makeFavorite(index)}>&#9733;</button>
        </div>
        <div className="todo_text">{item.text}</div>
        <div className="actions">
          <button onClick={() => deleteItem(index)}>&#120;</button>
        </div>
      </div>
    </div>
  ));
};
