import { SET_PAGES, SET_CURR_PAGES, SET_PAGE_TODO } from "../Types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_PAGES:
      return { ...state, pages: payload.pages };
    case SET_CURR_PAGES:
      return { ...state, currPage: payload.pages };
    case SET_PAGE_TODO:
     
      return { ...state, pageTodo: payload.pageTodo };

    default:
      return state;
  }
};

export default reducer;
