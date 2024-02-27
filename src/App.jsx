import { useState } from 'react'
import './App.css'
import { Delete, ModeEdit } from '@mui/icons-material'
import ToDoItem from './components/ToDoItem'
import ToDoList from './components/ToDoList'
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';

function App() {

  const [input, setInput] = useState("")
  const [todoList , setTodoList] = useState([]);
  const [checked, setChecked] = useState(true)

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleAddTodo = () => {
    setTodoList((currentTodos) => {
      return [...currentTodos , input]
    })
  }

  return (
    <>
      <div className="bg-violet-600 h-screen flex justify-center items-center">
        <div className="bg-violet-950 rounded-md">
          <div>
            <h1 className='text-xl text-white font-semibold mt-5'>Get Things Done!</h1>
          </div>

          <div id='' className='m-5 mb-10 flex'>
            <input value={input} onChange={handleChange} className='p-2 flex-1 w-80 text-gray-400 font-semibold bg-violet-950 border border-violet-600 outline-none' placeholder='Add a new task' />
            <button onClick={handleAddTodo} className='text-white font-semibold w-16 bg-violet-600 p-3'>Add</button>
          </div>

          <div id='to-do-list' className='flex flex-col gap-3 mb-5'>
            {todoList?.map((todo, i) =>
                ( <div className='flex bg-violet-600 p-4 mx-5 rounded-lg justify-between items-center'>
                <div className='flex items-center'>
                    <Checkbox checked={checked} />
                    <p className='text-white font-semibold ml-3'>{todo}</p>
                </div>
                <div>
                    <IconButton>
                        <ModeEdit className='text-white' />
                    </IconButton>
                    <IconButton>
                        <Delete className='text-white' />
                    </IconButton>
                </div>
            </div>)
            )}
        </div>
        </div>
      </div>
    </>
  )
}

export default App
