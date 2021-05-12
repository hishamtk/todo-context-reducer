import { SET_TODO } from "../Types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_TODO:
      return { ...state, todos: payload.todos };

    default:
      return state;
  }
};

export default reducer;
