import React, { useState } from 'react'
import { FaTrash } from "react-icons/fa";


const Todo = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleTaskChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = (e) => {
    if (e.keyCode === 13 && newTask.trim() != '') {
      setTasks(t => [...t, newTask])
      setNewTask('')
    }
  }

  const deleteTask = (index) => {
    const updateTasks = tasks.filter((_, i) => i !== index)
    setTasks(updateTasks)
  }

  return (
    <div className="container">
      <div className="todo-list">
        <h1>Adicione suas tarefas</h1>
        <div className="todo-task">
          <input onKeyDown={addTask} value={newTask} onChange={handleTaskChange} placeholder='Pressione enter para adicionar'/>
        </div>

        <div className="todos">
          <ol>
            {tasks.map((task, index) => 
              <li key={index}>
                <span>{task}</span>
                <button  onClick={() => deleteTask(index)}><FaTrash/></button>
              </li>
          )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Todo
