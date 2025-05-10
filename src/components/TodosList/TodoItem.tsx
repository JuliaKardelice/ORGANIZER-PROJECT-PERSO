import React from "react";
import "./TodosList.scss";
import { toggleTodo, removeTodo  } from "../../reducer/todos/todosSlices"; 
import { useDispatch } from "react-redux";
import  {type Todo}  from "../../reducer/todos/todosType"



const TodoItems : React.FC<Todo > = ({id} ) => {

const dispatch = useDispatch()

return(

<>
<section id="todoSection">
<h2> Gérer taches</h2>
<li>
<span
onClick= {() => dispatch(toggleTodo(id))}

/>




</li> 
<button
onClick = {()=> dispatch(removeTodo(id))}
></button>
</section>


</>
    )



}
export default TodoItems