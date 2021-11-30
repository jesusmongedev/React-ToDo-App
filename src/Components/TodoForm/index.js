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
      <ul>{props.children}</ul>
    </form>
  );
};

export { TodoForm };
