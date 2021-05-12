import { useReducer } from "react";
import AlertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = (props) => {
  const initialState = { alert: null };
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  return (
    <AlertContext.Provider value={{ ...state }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
