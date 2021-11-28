import React from 'react';
import { useLocalStorage } from '../../Custom_Hooks/useLocalStorage';

// React Hook useContext es un objeto con dos propiedades {Provider, Consumer}
const TodoContext = React.createContext('null');

function TodoProvider(props) {
    // Llamamos a nuestro Custom Hook con sus dos valores: El estado inicial y la funcion setState que permite actualizar el valor y re-renderizarlo
    const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    } = useLocalStorage('TODOS_V1', []);
    
    const [searchValue, setSearchValue] = React.useState('');
    
    const completedTodos = todos.filter((todo) => todo.completed).length;
    
    const totalTodos = todos.length;
    
    let searchedTodos = [];
    
    if (searchValue === '') {
    searchedTodos = todos;
    } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
    }
    
    //* Solución Permitiendo al usuario desmarque un Todo como no completado
    const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    // console.log('El índice del Todo completado es: ' + todoIndex);
    const newTodos = [...todos];
    // Negando si newTodos[todoIndex].completed = true lo hace falso y si es false lo hace true
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    console.log(newTodos);
    saveTodos(newTodos);
    };
    
    //* Eliminando Todos con el Delete Button definido en el componente <TodoItem/>
    const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    console.log(newTodos[todoIndex]);
    newTodos.splice(todoIndex, 1);
    // console.log(newTodos);
    saveTodos(newTodos);
    };
    
    //* Editando Todos con el Edit Button definido en el componente <TodoItem/>
    const editTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    // console.log(newTodos[todoIndex]);
    newTodos[todoIndex].text = prompt(
      'Edite su todo: ' + newTodos[todoIndex].text
    );
    // console.log(newTodos);
    saveTodos(newTodos);
    };
    return (
        // Los estados, temas, props, toda la información que queremos compartir van en el objeto value
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            editTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };