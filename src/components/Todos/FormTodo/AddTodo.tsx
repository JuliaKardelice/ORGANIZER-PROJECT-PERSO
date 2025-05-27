import { useState } from "react";
import { addTodo } from "../../../reducer/todos/todosSlices";
import { useDispatch} from "react-redux";




export interface Todo {
    title: '',
    description: '',
    completed: false,
    id: 0,
    createdAt: "";
    tags? : string
}



export const FormTodo = () => {

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
onChange={(e) => setInput(e.target.value)}
placeholder="Ajouter une tâche"/>
<input/>

<button 
onClick={()=>{handleAddTodo()} }
> 
Ajouter
</button>





</div>


)

}

