import React from 'react'
import './ClearTodos.scss'

import { TodoContext } from "../TodoContext";

const ClearTodos = () => {
    const {
        clearTodos,
    } = React.useContext(TodoContext);
    return (
        <button
            className="todo-search clear-button--clear"
            onClick={clearTodos}
        >
            Clear Todos
        </button>
    )
}

export {ClearTodos};
