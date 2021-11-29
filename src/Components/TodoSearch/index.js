import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.scss";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

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
