import React, { useState } from 'react'
import { useUserAuth } from '../context/UserAuthContent';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TodoList from './TodoList';
const Home = () => {
  const[task,setTask]=useState('')
  const [todos,setTodos]=useState([]);

    const {logOut}=useUserAuth();

   const navigate=useNavigate()

    const handleLogOut= async()=>{
        try{
             await logOut();
             navigate("/")
        }catch(err){
               console.log(err.message)
        }
    }

    const changeHandler=e=>{
     setTask(e.target.value)
    }
    const submitHandler=e=>{
          e.preventDefault();
          const newTodos=[...todos,task];
          setTodos(newTodos);
          setTask("");
    }
    const deleteHandler=(inxvalue)=>{
       const newTodos=todos.filter((todo,index)=>index!==inxvalue)
       setTodos(newTodos);
    }
          
  return (
    <>
    <div>
      <center>
      <h1>TodoList</h1>
      <form className='p-4 box' onSubmit={submitHandler}>
      <input 
      type='text' 
      name='task' 
      value={task} 
      onChange={changeHandler} 
      placeholder='enter the task'/> 
      &nbsp;&nbsp;
      <input type="submit" value="Add" name="Add"/>
    </form>
    <TodoList todolist={todos} deleteHandler={deleteHandler}/>
      </center> 
      <div className='d-grid gap-2'>
    <Button varient="primary" onClick={handleLogOut}>Log out</Button>
    </div>
    </div>
    </>   
  )
}

export default Home;