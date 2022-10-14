import { React } from "react";
import "./App.css";
import { useState } from "react";
export const List = () => {
  return <div>bruh</div>;
};
export const Comment = (props) => {
  const { commentText } = props;
  return <div className="comment">{commentText}</div>;
};

export const Example = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const deleteHandler = (itemIndex) => {
    const newList = list.filter((item, index) => {
      return index !== itemIndex;
    });
    setList(newList);
  };

  return (
    <div className="App">
      <div className="bruh2"><input className="taskInput"
        type={"text"}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button className="addButton"
        onClick={() => {
          if (inputValue === "") {
            alert("input is gay");
          } else setList([...list, inputValue]);
        }}
      >
        Add 
      </button></div>
      <div className="bruh">
        {list.map((toDo, index) => {
          return (
            <div key={index} className="bruh3">
              {toDo} <button onClick={() => {
                deleteHandler(index)
              }}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
