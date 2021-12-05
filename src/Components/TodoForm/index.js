import React from "react";
import "./TodoForm.scss";

const TodoForm = ( props ) => {
  const onSubmit = (ev)=>{
    ev.preventDefault();
  }

  return (
    <form 
      className="todo-form"
      onSubmit={onSubmit}
    >
      <ul className="todo-form__list">{props.children}</ul>
    </form>
  );
};

export { TodoForm };
