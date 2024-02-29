import React from 'react'
import ToDoItem from './ToDoItem'


function ToDoList({todoList ,toggleTodo , deleteTodo}) {

    return (
        
        <div id='to-do-list' className='flex flex-col gap-3 mb-5'>
            {todoList.length === 0 && <span className='text-white font-semibold'>No To Dos</span>}
            {todoList?.map((todo, i) =>
            (<ToDoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />)
            )}
          </div>
    )
}

export default ToDoList
