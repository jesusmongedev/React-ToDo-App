import React from 'react'
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/index";
import { TodoForm } from "../TodoForm/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoItem } from "../TodoItem/index";
import { CreateButton } from "../CreateButton/index";

const AppUi = () => {
  // Manera mas optima de llamar mis estados del value creado en mi TodoContext
  const {
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo, 
    editTodo,
  }
   = React.useContext(TodoContext);

  return (
    <>
        <TodoCounter />

            <TodoForm>
            <TodoSearch />
            {/* Agregar Estados: cargando, carga completa, error */}
            {error && <p>Hubo un error, recarga la página</p>}
            {loading && <p>Estamos cargando. no desesperes</p>}
            {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
    
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => toggleCompleteTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                onEdit={() => editTodo(todo.text)}
              />
            ))}
            </TodoForm>

        <CreateButton />
    </>
  );
};

export { AppUi };
