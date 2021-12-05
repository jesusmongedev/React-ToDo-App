import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.scss";

const TodoSearch = () => {
  const { searchValue, setSearchValue, openModal } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  //* No podía colocar esta lógica en el componente Modal porque no se ejecuta cuando openModal es falso
  if (openModal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <input
      className="todo-search"
      placeholder="Search a todo here ..."
      value={searchValue}
      onChange={onSearchValueChange}
    ></input>
  );
};

export { TodoSearch };
