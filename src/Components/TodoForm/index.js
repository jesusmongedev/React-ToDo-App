import "./TodoForm.scss";

const TodoForm = ( props ) => {
  console.log('Se renderizó el TodoForm');
  return (
    <form className="todo-form">
      <ul>{props.children}</ul>
    </form>
  );
};

export { TodoForm };
