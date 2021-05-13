import { useReducer } from "react";

import { SET_TODO } from "../Types";

import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";

const TodoState = (props) => {
  const initialState = { todos: [] };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  const addTodo = (newTodo) => {
    let ts = Date.now();

    let newTodos = [
      { title: newTodo, id: ts, completed: false, edit: false },
    ].concat(state.todos);
    dispatch({ type: SET_TODO, payload: { todos: newTodos } });

    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  const deleteTodo = (id) => {
    let newTodos = state.todos.filter((todo) => {
      return todo.id !== id;
    });
    dispatch({ type: SET_TODO, payload: { todos: newTodos } });

    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  const getTodoApi = async () => {
    const cacheTodo = localStorage.getItem("todo");

    if (cacheTodo !== null) {
      dispatch({ type: SET_TODO, payload: { todos: JSON.parse(cacheTodo) } });
    } else {
      try {
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        let res = await response.json();

        let data = res.slice(0, 15); // get first 15 items
        data = data.map((item) => {
          item.edit = false;
          return item;
        });
        dispatch({ type: SET_TODO, payload: { todos: data } });

        localStorage.setItem("todo", JSON.stringify(data));
      } catch (error) {
        console.error("Api call error", error);
      }
    }
  };

  const makeEditable = (id) => {
    let newTodos = state.todos.map((todo) => {
      if (todo.id === id) {
        todo.edit = true;
      }
      return todo;
    });
    dispatch({ type: SET_TODO, payload: { todos: newTodos } });

    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  const saveChange = (text, id) => {
    let newTodos = state.todos.map((todo) => {
      if (todo.id === id && todo.edit === true) {
        todo.title = text;
        todo.edit = false;
      }
      return todo;
    });

    dispatch({ type: SET_TODO, payload: { todos: newTodos } });

    localStorage.setItem("todo", JSON.stringify(newTodos));
  };
  return (
    <TodoContext.Provider
      value={{
        ...state,
        deleteTodo,
        addTodo,
        getTodoApi,
        makeEditable,
        saveChange,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
