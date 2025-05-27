import React from "react";
import "./TodosList.scss";
import { toggleTodo, removeTodo} from "../../../reducer/todos/todosSlices"; 
import { useDispatch } from "react-redux";


type Props = {
    id: number;
    title: string;
    completed: boolean;
  };

export const TodoItem : React.FC<Props > = ({id,title,completed} ) => {

const dispatch = useDispatch()

return (
<>
<section id="todoSection">


<li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
{title}
<input
type="checkbox"
checked={completed}
onChange = {() => dispatch(toggleTodo(id))}
/>
{title}
<button 
onClick={ () => dispatch (removeTodo(id))}> 
Supprimer
</button>
</li>

</section>

</>
)
}
