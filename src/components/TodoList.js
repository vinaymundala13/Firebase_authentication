import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
  return (
    <div>
        {todolist.map((todo,index)=>(

        <div key={index}>
        <h4>{todo} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h4>
        </div>
        ))}
    </div>
  )
}

export default TodoList