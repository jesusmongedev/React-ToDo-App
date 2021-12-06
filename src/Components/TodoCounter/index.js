import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.scss";

const TodoCounter = () => {
  const { completedTodos, totalTodos, handleDarkMode } = React.useContext(TodoContext);

  return (
    <>
      <buttton className="switch" id="switch" onClick={handleDarkMode}>
        <span>
          <i className="bx bxs-sun"></i>
        </span>
        <span>
          <i className="bx bxs-moon"></i>
        </span>
      </buttton>
      <h1 className="todo-counter">
        {" "}
        Haz completado{" "}
        <p className="todo-counter-stats">
          {" "}
          <span className="completed">{completedTodos} </span> de{" "}
          <span>{totalTodos} </span> Todos{" "}
        </p>
      </h1>
    </>
  );
};

export { TodoCounter };
