import React, { useState } from 'react'
import { Delete, ModeEdit } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@mui/material';

function ToDoItem({ name }) {

    const [checked, setChecked] = useState(false)

    const handleClick = () => {
        setChecked(!checked);
    }

    return (
        <div className='flex bg-violet-600 p-4 mx-5 rounded-lg justify-between items-center'>
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
        </div>
    )
}

export default ToDoItem
