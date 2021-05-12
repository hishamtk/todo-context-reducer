import { SET_ALERT } from "../Types";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return { alert: payload.alert };

    default:
      return state;
  }
};

export default reducer;
