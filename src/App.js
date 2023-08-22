import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import  "./style.css";



const App = () => {
const[text, setText]=useState("");
const[listTodo, setListTodo]=useState([]);
  return (
    <div className="app">
    <TodoForm text={text} setText={setText} listTodo={listTodo} setListTodo={setListTodo}/>
    {listTodo.map(item => <Todo text={item} listTodo={listTodo} setListTodo={setListTodo} />)}
   </div>
  );
};
export default App;