import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, makeFavorite } from "../redux/todoSlice";

export const AddTodo = ({}) => {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todo.todoItems);

  return todoItems.map((item, index) => {
    return (
      <div className="todo_list" key={index}>
        <div className={item.favorite === true ? "todo selected" : "todo"}>
          <div className="favorite">
            <button onClick={() => dispatch(makeFavorite({ index: index }))}>
              &#9733;
            </button>
          </div>
          <div className="todo_text">{item.text}</div>
          <div className="actions">
            <button onClick={() => dispatch(deleteItem({ index: index }))}>
              &#120;
            </button>
          </div>
        </div>
      </div>
    );
  });
};
