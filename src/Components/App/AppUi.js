import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter/index";
import { TodoForm } from "../TodoForm/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoItem } from "../TodoItem/index";
import { CreateButton } from "../CreateButton/index";

const AppUi = () => {
  console.log('Se renderizo el componente AppUi');
  return (
    <>
        <TodoCounter />

        <TodoContext.Consumer>
          {/* Para no usar value.error value.loading llamamos en los parametros de la funcion 
          las propiedades que queremos usar*/ }
          {({
            error, 
            loading, 
            searchedTodos, 
            toggleCompleteTodo, 
            deleteTodo, 
            editTodo,
        }) => (
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
          )}
        </TodoContext.Consumer>
        
        <CreateButton />
    </>
  );
};

export { AppUi };
