import React from 'react'
import { Delete, ModeEdit } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';

function ToDoItem({ title, id , completed, toggleTodo , deleteTodo }) {

    return (
        <div className='flex bg-violet-600 p-4 mx-5 rounded-lg justify-between items-center'>
            <div className='flex items-center'>
                <Checkbox onClick={() => toggleTodo(id , completed)} checked={completed}/>
                <p className='text-white font-semibold ml-3'>{title}</p>
            </div>
            <div>
                <IconButton>
                    <ModeEdit className='text-white' />
                </IconButton>
                <IconButton onClick={() => deleteTodo(id)}>
                    <Delete className='text-white' />
                </IconButton>
            </div>
        </div>
    )
}

export default ToDoItem
