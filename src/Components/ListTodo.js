import { useContext } from "react";
import TodoContext from "../Context/TodoContext/TodoContext";
import Todo from "./Todo";

function ListTodo() {
  const context = useContext(TodoContext);
  return (
    <div className="mx-auto container mt-20 min-h-semi">
      <div className="flex flex-col">
        {context.todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListTodo;
