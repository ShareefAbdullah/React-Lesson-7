import React from "react";
import { deleteItem, makeFavorite } from "../redux/todoSlice";
import { useTypedDispatch, useTypedSelector } from "../redux/hooks";
import styles from "../styles/todos.module.scss";

export const AddTodo: React.FC = ({}) => {
  const dispatch = useTypedDispatch();
  const todoItems = useTypedSelector((state) => state.todo.todoItems);

  return todoItems.map((item, index) => {
    return (
      <div key={index}>
        <div
          className={
            item.favorite === true
              ? `${styles.todo} ${styles.selected}`
              : styles.todo
          }
        >
          <div className={styles.favorite}>
            <button onClick={() => dispatch(makeFavorite({ index: index }))}>
              &#9733;
            </button>
          </div>
          <div className={styles.todoText}>{item.text}</div>
          <div className={styles.actions}>
            <button onClick={() => dispatch(deleteItem({ index: index }))}>
              &#120;
            </button>
          </div>
        </div>
      </div>
    );
  });
};
