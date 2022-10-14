import { Comment, Example } from "./List";
import React from "react";
import "./App.css";

function App() {
  return (
    <body>
      <div className="header">
        <h2>ToDo List</h2>
      </div>
      <div className="bigContainer">
        <div className="toDoListTop">
          <h1 className="todo">ToDo List</h1>
            <Example />
        </div>
        <div className="List">
          <Comment />
        </div>
      </div>
    </body>
  );
}
export default App;
