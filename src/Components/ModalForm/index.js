import React from "react";
import { TodoContext } from "../TodoContext";
import "./ModalForm.scss";

const ModalForm = () => {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (ev) => {
    // Conectamos el value del textarea con nuestro Estado setNewTodoValue - este string se envia con la funcion addTodo
    setNewTodoValue(ev.target.value);
  };

  const onSubmit = (ev) => {
    // ev => SyntheticBaseEvent All the information of our inputs
    ev.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  const KeyHandleSubmit = (ev) => {
    if (ev.key === "Enter") {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
  };

  return (
    <>
      <div 
        className="overlay" 
        onClick={onCancel}  
      > </div>
      <form onSubmit={onSubmit} className="modalForm" >
        <label htmlFor="newTodo" className="modalForm__label">
          Add New To-do ...
        </label>
        <div className="modalForm__add">
          <textarea
            value={newTodoValue}
            onChange={onChange}
            id="newTodo"
            placeholder="What needs to be done ... ?"
            className="modalForm__add-input"
            onKeyDown={KeyHandleSubmit}
            autoFocus
          />
          <button
            className="modal-button"
            type="submit"
            onClick={onSubmit}
            disabled={newTodoValue ? false : true}
          >
            Add a Todo
          </button>
          <button
            className="modal-button modal-button--cancel"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export { ModalForm };
