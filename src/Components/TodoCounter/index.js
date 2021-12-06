import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.scss";

const TodoCounter = () => {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  const DarkButton = document.querySelector("#switch");

  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    DarkButton.classList.toggle("pressed");

    // Guardamos el modo en local storage
    // El metodo contains permite comprobar si en la lista de clases del body se encuentra la clase "dark"
    if (document.body.classList.contains("dark")) {
      // Agregamos un elemento al localStorage con dos valores (1.Como queremos que se llame, 2. El valor que queremos guardar solo pueden ser cadenas de texto 'entre comillas' )
      localStorage.setItem("dark-mode", "true");
    } else {
      // Caso contrario no esta en modo dark y lo guardamos con un valor de false
      localStorage.setItem("dark-mode", "false");
    }
  };

  // Obtenemos el modo actual por su clave y comprobamos su valor el cual debe ser con cadenas de texto ''
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    // DarkButton.classList.add("pressed");
  } else {
    document.body.classList.remove("dark");
    // DarkButton.classList.remove("pressed");
  }

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
