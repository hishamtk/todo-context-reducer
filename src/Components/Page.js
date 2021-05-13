import React, { useContext } from "react";
import PaginationContext from "../Context/PaginationContext/PaginationContext";

const Page = ({ number }) => {
  const context = useContext(PaginationContext);
  return (
    <button
      onClick={() => {
        context.changeCurrPage(number);
      }}
      className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
    >
      {number}
    </button>
  );
};
export default Page;
