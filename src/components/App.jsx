import React, { useState } from "react";
import { Header } from "./Header";
import { Forms } from "./Forms";
import { AddTodo } from "./AddTodo";

function App() {
  const [inputText, setText] = useState("");

  return (
    <div className="App">
      <Header />
      <Forms inputText={inputText} setText={setText} />
      <AddTodo />
    </div>
  );
}

export default App;
