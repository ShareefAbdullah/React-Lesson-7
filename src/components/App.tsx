import React, { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { AddTodo } from "./AddTodo";

export type StateTodoItems = {
  favorite: boolean;
  text: string;
};

export const App: React.FC = () => {
  const [todoItems, setItems] = useState<Array<StateTodoItems>>([
    { favorite: false, text: "Buy groceries" },
    { favorite: false, text: "Buy a phone" },
    { favorite: false, text: "Buy a car" },
    { favorite: false, text: "Buy a house" },
    { favorite: false, text: "Buy a plot" },
  ]);

  const [inputText, setText] = useState<string>("");

  const addItem = (): void => {
    const cleanInput = inputText.trim();
    const checkDuplicate = cleanInput.toLowerCase();

    if (cleanInput === "") {
      return alert("Please enter a task!");
    }

    const isDuplicate: boolean = todoItems.some(
      (item) => item.text.toLowerCase() === checkDuplicate
    );

    if (isDuplicate) {
      return alert("This item is already on the list!");
    }

    setItems([
      {
        text: cleanInput,
        favorite: false,
      },
      ...todoItems,
    ]);

    setText("");
  };

  const deleteItem = (deleteIndex: number): void => {
    const filterItems = todoItems.filter((_, index: number): boolean => {
      if (index === deleteIndex) {
        return false;
      }
      return true;
    });

    setItems(filterItems);
  };

  const makeFavorite = (indexOfFavorite: number): void => {
    const newTodo = todoItems.map((item, index: number): StateTodoItems => {
      if (index === indexOfFavorite) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });

    setItems(newTodo);
  };

  return (
    <div className="App">
      <Header />
      <Forms inputText={inputText} setText={setText} addItem={addItem} />
      <AddTodo
        todoItems={todoItems}
        makeFavorite={makeFavorite}
        deleteItem={deleteItem}
      />
    </div>
  );
};
