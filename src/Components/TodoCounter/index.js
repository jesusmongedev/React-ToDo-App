import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.scss'

const TodoCounter = ()  => {
    const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return (
        <h1 className="todo-counter"> Haz completado <p> {completedTodos} de {totalTodos} Todos </p>  </h1>
    );
};

export {TodoCounter};