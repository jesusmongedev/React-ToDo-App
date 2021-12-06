import React from "react";
import { useLocalStorage } from "../../Custom_Hooks/useLocalStorage";

// React Hook useContext es un objeto con dos propiedades {Provider, Consumer}
const TodoContext = React.createContext("null");

function TodoProvider(props) {
  // Llamamos a nuestro Custom Hook con sus dos valores: El estado inicial y la funcion setState que permite actualizar el valor y re-renderizarlo
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  // const [editTodo, setEditTodo] = React.useState(null);
  // const [input, setInput] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;

  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue === "") {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  //* Agregar un nuevo Todo
  const addTodo = (text) => {
    const newTodos = [...todos];
    // .push Agregar un nuevo Todo al final de nustro Array
    newTodos.push({
      completed: false,
      text,
    });
    saveTodos(newTodos);
  };

  const handleEdit = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    const TODOTOEDIT = newTodos[todoIndex].text;
    function requiredValue() {
      newTodos[todoIndex].text = prompt("Edite su todo: ", TODOTOEDIT);
      if (newTodos[todoIndex].text === "") {
        requiredValue();
      }
    }
    requiredValue();
    saveTodos(newTodos);
  };

  //* Solución Permitiendo al usuario desmarque un Todo como no completado
  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    // Negando si newTodos[todoIndex].completed = true lo hace falso y si es false lo hace true
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  //* Eliminando Todos con el Delete Button definido en el componente <TodoItem/>
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  //* Clear Todos Function
  const clearTodos = () => {
    const newTodos = [];
    saveTodos(newTodos);
  };

  //* Handle Dark Mode
  const handleDarkMode = () => {
    const DarkButton = document.getElementById("switch");
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

  const SWITCH_PRESSED = document.getElementById("switch");

  // Obtenemos el modo actual por su clave y comprobamos su valor el cual debe ser con cadenas de texto ''
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark");
    // SWITCH_PRESSED.classList.add('pressed')
  } else {
    document.body.classList.remove("dark");
    // SWITCH_PRESSED.classList.remove('pressed')
  }

  return (
    // Los estados, temas, props, toda la información que queremos compartir van en el objeto value
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        toggleCompleteTodo,
        deleteTodo,
        handleEdit,
        openModal,
        setOpenModal,
        clearTodos,
        handleDarkMode,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
