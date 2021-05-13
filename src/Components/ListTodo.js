import { useContext } from "react";
import PaginationContext from "../Context/PaginationContext/PaginationContext";

import Todo from "./Todo";

function ListTodo() {
  const context = useContext(PaginationContext);
  return (
    <div className="mx-auto container mt-20 min-h-semi">
      <div className="flex flex-col">
        {context.pageTodo.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export default ListTodo;
