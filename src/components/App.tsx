import React, { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { AddTodo } from "./AddTodo";

export const App: React.FC = () => {
  const [inputText, setText] = useState<string>("");

  return (
    <div className="App">
      <Header />
      <Forms inputText={inputText} setText={setText} />
      <AddTodo />
    </div>
  );
};
