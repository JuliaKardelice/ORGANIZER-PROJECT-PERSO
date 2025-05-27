// import { useState } from "react";
import "./TodosList.scss";
import { TodoItem } from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
import type { RootState } from "@reduxjs/toolkit/query";
import type { Todo } from "../../../reducer/todos/todosSlices";


  

export const TodoList : React.FC  = () => {
const todos = useSelector((State:RootState) => State.todos.todo)
return(

<>
<section id="todoSection">
<h2> Gérer taches</h2>
{todos.map((todo : Todo) => (
<TodoItem 
        key={todo.id}
        id={todo.id}
        title={todo.title}
        completed={todo.completed} />


))}

</section>


</>
    )



}
