import React from "react";
import './TodoSearch.scss';

const TodoSearch = ({ searchValue, setSearchValue }) => {
    console.log('Se renderizo el TodoSearch');
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
