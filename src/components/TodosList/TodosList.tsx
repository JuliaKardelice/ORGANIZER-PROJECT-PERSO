import { useState } from "react";
import "./TodosList.scss";
import AddTodo from "./AddTodo/AddTodo";




const TodosList = () => {

return(

<>
<section id="todoSection">
<h2> Gérer taches</h2>
<AddTodo/>

</section>


</>
    )



}
export default TodosList