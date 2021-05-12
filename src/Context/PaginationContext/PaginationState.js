import { useReducer } from "react";

import PaginationContext from "./PaginationContext";

import PaginationReducer from "./PaginationReducer";

const PaginationState = (props) => {
  const initialState = { pageTodo: [], currPage: 1, pages: 0 };
  const [state, dispatch] = useReducer(PaginationReducer, initialState);

  return (
    <PaginationContext.Provider value={{ ...state }}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationState;
