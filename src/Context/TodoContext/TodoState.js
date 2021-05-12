import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";

const TodoState = (props) => {
  const initialState = { todos: [] };
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <TodoContext.Provider value={{ ...state }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoState;
