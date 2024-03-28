
import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/ToDoAction';

function App() {
  let [todo,setTodo]=useState();
  const dispatch=useDispatch();
 const Todo= useSelector((state)=>state.Todo)
 const {todos}=Todo;
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  }
const removeHandler=(t)=>{
 dispatch(RemoveTodoAction(t))
}
  return (
    <div className="App">
         
     <header className="App-header">
      <h1>ToDo List App</h1>
      <form onSubmit={handleSubmit}>
       <input type="text" placeholder="Enter your todo" style={{
        width:350,
        padding:10,
        borderRadius:20,
        border:"none",
        fontSize:20,
        marginTop:50,
        color:"black"
        
       }}
       onChange={(e)=>setTodo(e.target.value)}/>
       <button type='submit' style={{
        padding:12,
        borderRadius:25,
        fontSize:15,
        marginLeft:20,
        backgroundColor:"white",
        color:"black"
       }}>Go</button>
      </form>
      <ul className='allTodos'>
        {
          todos &&todos.map((t)=>(
            <li key={t.id} className='singleTodo'>
            <span className='todoText'>{t.todo}</span>
            <button style={{
              borderRadius:25,
              padding:10,
              border:"1px soild white",
              backgroundColor:"orangered"
            }}
            onClick={()=>removeHandler(t)}>Delete</button>
          </li>
          ))
        }
       
      </ul>
    
    
     </header> 
    </div>
  );
}

export default App;
