import React from "react";

export const AddTodo = ({todoItems, makeFavorite, deleteItem}) => {
    return (
        todoItems.map((item, index) => {
            return (
                <div className="todo_list">
                    <div className={item.favorite === true ? "todo selected": "todo"}>
                        <div className="favorite">
                            <button onClick={() => makeFavorite(index)}>
                                &#9733;
                            </button>
                        </div>
                        <div className="todo_text">
                            {item.text}
                        </div>
                        <div className="actions">
                            <button onClick={() => deleteItem(index)}>
                                &#120;
                            </button>
                        </div>
                    </div>
                </div>
            )
        })
    )
}