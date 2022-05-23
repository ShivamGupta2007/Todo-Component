import React from 'react';
import './Todo.css';
const TodoList = ({title, id, status, handleToggle}) => {
  return (
    <div class="list">
        <input class="checkbox" type="checkbox"/>
        <h3>{title}</h3>
        <button class="button" onClick={()=>handleToggle(id)}>{status ? "True" : "False"}</button>
    </div>
  );
}

export { TodoList };