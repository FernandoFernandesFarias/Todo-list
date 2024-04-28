import React, { useState } from 'react'

const Todo = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleTaskChange = (e) => {
    setNewTask(e.target.value)
  }

  const addTask = (e) => {
    if (e.keyCode === 13 && newTask.trim() != '') {
      setTasks(t => [...t, newTask])
    }
  }

  return (
    <div className="container">
      <div className="todo-list">
        <h1>Adicione suas tarefas</h1>
        <div className="todo-task">
          <input onKeyDown={addTask} onChange={handleTaskChange} placeholder='Pressione enter para adicionar'/>
        </div>

        <div className="todos">
          <ol>
            {tasks.map((task, index) => 
              <li key={index}>
                <span>{task}</span>
              </li>
          )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Todo
