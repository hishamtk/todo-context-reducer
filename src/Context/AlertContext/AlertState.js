import { useReducer } from "react";
import { SET_ALERT } from "../Types";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = (props) => {
  const initialState = { alert: null };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const handleAlert = (msg) => {
    dispatch({ type: SET_ALERT, payload: { alert: msg } });
    setTimeout(() => {
      dispatch({ type: SET_ALERT, payload: { alert: null } });
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ ...state, handleAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
