import { useContext, useState } from "react";
import AlertContext from "../Context/AlertContext/AlertContext";
import TodoContext from "../Context/TodoContext/TodoContext";

function Todo({ todo }) {
  const context = useContext(TodoContext);
  const alertContext = useContext(AlertContext);
  const [newTodo, setNewTodo] = useState("");

  const handleEdit = () => {
    setNewTodo(todo.title);
    context.makeEditable(todo.id);
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo === "") {
      return alertContext.handleAlert("Todo should not be empty");
    }
    context.saveChange(newTodo, todo.id);
    setNewTodo("");
  };

  return (
    <div className="flex flex-row items-center justify-around mb-5 border p-3">
      {todo.edit === false ? (
        <>
          <div className="w-4/5 ml-8">
            <p className="text-xl">{todo.title}</p>
          </div>
          <button
            className="flex-shrink-0 mx-4 bg-blue-500 hover:bg-indigo-700 text-lg text-white py-3 px-5 rounded"
            type="button"
            onClick={handleEdit}
          >
            Edit
          </button>
        </>
      ) : (
        <form className="flex w-11/12" onSubmit={handleSubmit}>
          <div className="w-11/12 ml-8">
            <input
              className="appearance-none mr-5 bg-gray-300 border-none w-full text-gray-700 mr-3 py-4 px-4 leading-tight focus:outline-none text-xl font-bold"
              type="text"
              value={newTodo}
              onChange={handleChange}
              name="todo"
            />
          </div>
          <button
            className="flex-shrink-0 mx-4 bg-green-500 hover:bg-indigo-700 text-lg text-white py-3 px-5 rounded"
            type="submit"
          >
            Save
          </button>
        </form>
      )}

      <button
        className="flex-shrink-0 mx-4 bg-red-500 hover:bg-red-700  text-lg text-white py-3 px-5 rounded"
        type="button"
        onClick={() => context.deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
