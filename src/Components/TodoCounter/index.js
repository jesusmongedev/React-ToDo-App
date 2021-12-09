import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.scss";
import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const TodoCounter = () => {
  const { completedTodos, totalTodos, handleDarkMode } =
    React.useContext(TodoContext);

  // Obtenemos el modo actual por su clave y comprobamos su valor el cual debe ser con cadenas de texto ''
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <>
      <span
        className={`switch ${localStorage.getItem("dark-mode") ? "" : "pressed"}`}
        id="switch"
        onClick={handleDarkMode}
      >
        <span>
          <BsFillSunFill/>
        </span>
        <span>
          <BsMoonFill/>
        </span>
      </span>
      <h1 className="todo-counter">
        <span className="completed">{completedTodos} </span> COMPLETED OF <span>{totalTodos} </span> 
      </h1>
    </>
  );
};

export { TodoCounter };
