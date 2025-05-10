import { useState } from "react";
import { addTodo } from "../../../reducer/todos/todosSlices";
import { useDispatch} from "react-redux";




export interface Todo {
    title: '',
    description: '',
    completed: false,
    id: 0,
    createdAt: ""
}



export const AddTodo = () => {

const [input, setInput] =useState('');

const dispatch = useDispatch();

const handleAddTodo = () => {


if(input.trim()){
dispatch(addTodo(input))
setInput('')

}
}



return(
<div>
<input 

type="text"
value = {input}
onChange={(e) => setInput(e.target.value)}/>
<input

/>
<button 
onClick={()=>{handleAddTodo()} }
> 
Ajouter</button>



</div>


)

}

export default AddTodo