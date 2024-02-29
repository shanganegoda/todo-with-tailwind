import { useEffect, useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList'
import Form from './components/Form'

function App() {

  const [todoList, setTodoList] = useState(() => {
    try {
      const localValue = localStorage.getItem("todoList")
      if (localValue == null) return [];
      return JSON.parse(localValue)
    } catch (error) {
      console.log("Error getting list from Local Storage - ", error)
    }

  });

  useEffect(() => {
    try {
      localStorage.setItem("todoList", JSON.stringify(todoList))
    } catch (error) {
      console.log("Error serializing lsit to Local Storage - " , error)
    } 
  }, [todoList])

  const handleAddTodo = (input) => {
    if (!input) {
      return;
    }
    setTodoList((currentTodos) => {
      var completed = false;

      return [...currentTodos, {
        id: crypto.randomUUID(),
        title: input,
        completed: completed,
      }]
    })
  }

  const toggleTodo = (id , completed) => {
    setTodoList(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !completed }
        }
        return todo;
      })
    })

    console.log(todoList)
  }

  const deleteTodo = (id) => {
    setTodoList(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <div className="bg-violet-600 h-screen flex justify-center items-center">
        <div className="bg-violet-950 rounded-md">
          <div>
            <h1 className='text-xl text-white font-semibold mt-5'>Get Things Done!</h1>
          </div>

          <Form handleAddTodo={handleAddTodo} />
          <ToDoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />

        </div>
      </div>
    </>
  )
}

export default App
