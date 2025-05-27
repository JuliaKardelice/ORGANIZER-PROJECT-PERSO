import React from "react";
import { FormTodo } from "../FormTodo/AddTodo";
import { TodoList } from "../TodosList/TodoList";
import { TodoInitial } from "../TodoInitial/TodoInitial";


export const TodoSection : React.FC = ()=> {

return(



    <div>
      <h1>Ma todo liste Redux 🧠</h1>
      <TodoInitial/>
      <FormTodo />
      <TodoList />
    </div>
  );





}