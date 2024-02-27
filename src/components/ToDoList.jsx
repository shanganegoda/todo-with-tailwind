import React, { useEffect } from 'react'
import ToDoItem from './ToDoItem'
import Checkbox from '@mui/material/Checkbox';

function ToDoList({todoList}) {

    // useEffect(() => {
    //      todoList = localStorage.getItem(todoList);
    // },[todoList])
    const handleClick = () => {
        setChecked(!checked);
    }


    return (
        <div id='to-do-list' className='flex flex-col gap-3 mb-5'>
            {todoList?.map((todo, i) =>
                ( <div className='flex bg-violet-600 p-4 mx-5 rounded-lg justify-between items-center'>
                <div className='flex items-center'>
                    <Checkbox onClick={handleClick} checked={checked} />
                    <p className='text-white font-semibold ml-3'>{name}</p>
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
    )
}

export default ToDoList
