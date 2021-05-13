import React, { useContext, useEffect } from "react";

import AddTodo from "./Components/AddTodo";
import Alert from "./Components/Alert";
import Footer from "./Components/Footer";
import ListTodo from "./Components/ListTodo";
import Navbar from "./Components/Navbar";
import Pagination from "./Components/Pagination";
import AlertState from "./Context/AlertContext/AlertState";
import PaginationContext from "./Context/PaginationContext/PaginationContext";

import TodoContext from "./Context/TodoContext/TodoContext";

const App = () => {
  const todoContext = useContext(TodoContext);
  const pageContext = useContext(PaginationContext);

  const perPage = 10;

  useEffect(() => {
    todoContext.getTodoApi();
  }, [todoContext]);

  useEffect(() => {
    const showTodo = () => {
      if (
        pageContext.currPage < 1 ||
        pageContext.currPage > pageContext.pages
      ) {
        return;
      }
      let todo = todoContext.todos.slice(
        (pageContext.currPage - 1) * perPage,
        pageContext.currPage * perPage
      );
      pageContext.changePageTodo(todo);
    };
    showTodo(pageContext.currPage);
  }, [pageContext, pageContext.currPage, pageContext.pages, todoContext.todos]);

  useEffect(() => {
    const calcPages = (arr, perPage) => {
      let total = pageContext.pages;
      let newPages = Math.ceil(arr.length / perPage);
      pageContext.changePages(newPages);

      if (total > newPages && newPages > 0) {
        pageContext.changeCurrPage(newPages);
      }
    };
    calcPages(todoContext.todos, perPage);
  }, [pageContext, pageContext.pages, todoContext.todos]);



  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 md:w-3/5 w-4/5 ">
        <AlertState>
          <Alert />
          <AddTodo />
         
            <ListTodo />

            <Pagination perPage={perPage} />
          
        </AlertState>
      </div>

      <Footer />
    </div>
  );
};

export default App;
