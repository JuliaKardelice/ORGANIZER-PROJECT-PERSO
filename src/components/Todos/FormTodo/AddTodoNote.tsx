/*import { useState } from "react";
import { selectTodosTags} from "../../../reducer/todos/todosSelector";
import { useDispatch, useSelector} from "react-redux";
// import { AddTodo} from "../../../components/TodosList/AddTodo/AddTodo";

// import { TodoStatus } from "../../../reducer/todos/todosType";



export interface Todo {
    title: string,
    description: string,
    completed: Boolean
    id: number
    createdAt:string,
    tags : string
}



export const AddTodoNote : React.FC <Todo> = (tags) => {
    const dispatch= useDispatch();
const [input, setInput] =useState('');
const [tagInput, setTagInput] = useState('')






const handleNewTags = () => {

    
if(input.trim()){
    const TodosTags = useSelector(state.todos.tags)
   setInput(TodosTags);

  

   
}
}

const saveTodoNote = () => {

    dispatch(selectTodosTags(tags)).unwrap();

setInput('')


}



return(
<>
<div>
<label>Ajouter une tâche à faire</label>
<input 

type="text"
value = {input}
onChange={() => {handleNewTags()}}/>
<input

/>
<button 
onClick={()=>{saveTodoNote()} }
> 
Ajouter une annotation</button>



</div>

</>
)

}

*/