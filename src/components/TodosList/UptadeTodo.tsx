import { useState } from "react";
import { updateTodo } from "../../reducer/todos/todosSlices";

import { useSelector } from "react-redux";
// import { useDispatch} from "react-redux";
import { selectTodosTitle, selectTodosDescription, selectTodosTags } from '../../reducers/auth/authSelector';

export interface Todo {
    title: '',
    description: '',
    completed: false,
    id: 0,
    createdAt: "",
    tags : ""
}

interface TodosProps {
    id: number,
    title: string
    description?: string
    completed: boolean,
    createdAt: string,
   updatedAt?: string,
    //dueDate?: string // ISO format (ex: '2025-05-08T12:00:00Z')
  
   /// priority?: 'low' | 'medium' | 'high'
  tags?: string[]

  }
  /*** 
  export const TodosAttributes : TodosState = {
  id: 0,
  title: '',
  description: '',
  createdAt: '',
  updatedAt: '',
  completed: false
}
*/

export const updateTodo : React.FC< TodosProps> = (description,tags,title)=> {

const [TodoAttributes,setTodoAttributes] = useState('')


const title = useSelector(selectTodosTitle)
const tags = useSelector(selectTodosTags);
const description = useSelector(selectTodosDescription );


const handleSave = () =>




return(
<button
onClick = {()=> dispatch(updateTodo())}
> Edit</button>

)

}