import { useContext } from "react";
import PaginationContext from "../Context/PaginationContext/PaginationContext";
import TodoContext from "../Context/TodoContext/TodoContext";
import Page from "./Page";

const Pagination = ({ perPage }) => {
  const todoContext = useContext(TodoContext)
  const context = useContext(PaginationContext)
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          onClick={() => {
            if (context.currPage - 1 > 0) {
              context.changeCurrPage(context.currPage - 1);
            }
          }}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Previous
        </button>
        <button
          onClick={() => {
            if (context.currPage + 1 <= context.pages) {
              context.changeCurrPage(context.currPage + 1);
            }
          }}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{(context.currPage - 1) * perPage}</span> to{" "}
            <span className="font-medium">
              {context.currPage * perPage < todoContext.todos.length ? context.currPage * perPage : todoContext.todos.length}
            </span>{" "}
            of <span className="font-medium">{todoContext.todos.length}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={() => {
                if (context.currPage - 1 > 0) {
                  context.changeCurrPage(context.currPage - 1);
                }
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {[...Array(context.pages)].map((page, index) => {
              return (
                <Page
                  key={index + 1}
                  number={index + 1}
                  
                />
              );
            })}

            <button
              onClick={() => {
                if (context.currPage + 1 <= context.pages) {
                  context.changeCurrPage(context.currPage + 1);
                }
              }}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
