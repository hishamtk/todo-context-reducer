import { useContext } from "react";
import AlertContext from "../Context/AlertContext/AlertContext";

const Alert = () => {
  const context = useContext(AlertContext);
  return (
    context.alert && (
      <div className="my-4 rounded p-3 opacity-90 bg-red-500 text-white">
        <i className="fas fa-info-circle" />
        {context.alert}
      </div>
    )
  );
};

export default Alert;
