import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/index";
import { TodoForm } from "../TodoForm/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoItem } from "../TodoItem/index";
import { CreateButton } from "../CreateButton/index";
import { Modal } from "../../Modal";
import { ModalForm } from "../ModalForm";
import { LoadingTodo } from "../LoadingTodo";
import { ClearTodos } from "../ClearTodos";
import { Footer } from "../Footer";
import { CreateTodo } from "../CreateTodo";
import { ErrorLoadingTodos } from "../ErrorLoadingTodos";

const AppUi = () => {
  // Manera mas optima de llamar mis estados del value creado en mi TodoContext
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    handleEdit,
    totalTodos,
    todos,
    } = React.useContext(TodoContext);

  return (
    <>
      <TodoForm>
        <TodoCounter />
        {!!todos.length && <TodoSearch /> }

        {/* Agregar Estados: cargando, carga completa, error */}
        {error && <ErrorLoadingTodos/>}
        {loading && new Array(3).fill().map((item,index)=>(
          <LoadingTodo key={index} />
        ))}
        {!loading && !todos.length && <CreateTodo/> }

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            onEdit={() => handleEdit(todo.text)}
          />
        ))}
        {!error? <CreateButton setOpenModal={setOpenModal} /> : ""  }
        
       {totalTodos? <ClearTodos/> : ""}
      </TodoForm>
      
      

      {openModal && (
        <Modal>
          <ModalForm />
        </Modal>
      )}

      <Footer/>  

    </>
  );
};

export { AppUi };
