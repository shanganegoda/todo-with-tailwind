import React, { useState } from 'react'

function Form({handleAddTodo}) {

    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
      }

    const onAddItem = () => {
        handleAddTodo(input)
        setInput("")
    }  

    return (
        <div id='' className='m-5 mb-10 flex'>
            <input value={input} onChange={handleChange} className='p-2 flex-1 w-80 text-gray-400 font-semibold bg-violet-950 border border-violet-600 outline-none' placeholder='Add a new task' />
            <button onClick={onAddItem} className='text-white font-semibold w-16 bg-violet-600 p-3'>Add</button>
        </div>
    )
}

export default Form
