import React from 'react'
import './Todo.css'
const TodoInput = ({onClick}) => {
    const [title, setTitle] = React.useState("");

    
  return (
    <div>
        <input class="todoInput" placeholder='Add Something' value={title} onChange={e=>setTitle(e.target.value)}
        />
        <button  class="todobutton" onClick={() => onClick(title)}>Add</button>
    </div>
  )
}

export { TodoInput };