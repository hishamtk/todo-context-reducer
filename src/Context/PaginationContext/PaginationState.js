import { useReducer } from "react";

import { SET_PAGES, SET_CURR_PAGES ,SET_PAGE_TODO} from "../Types";

import PaginationContext from "./PaginationContext";

import PaginationReducer from "./PaginationReducer";

const PaginationState = (props) => {
  const initialState = { pageTodo: [], currPage: 1, pages: 0 };
  const [state, dispatch] = useReducer(PaginationReducer, initialState);

  const changePages = (pages) => {
    dispatch({ type: SET_PAGES, payload: { pages: pages } });
  };

  const changeCurrPage = (pages) => {
    dispatch({ type: SET_CURR_PAGES, payload: { pages: pages } });
  };

  const changePageTodo = (todo) =>{
      dispatch({type:SET_PAGE_TODO,payload:{pageTodo:todo}})
  }

  return (
    <PaginationContext.Provider
      value={{ ...state, changePages, changeCurrPage,changePageTodo }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationState;
