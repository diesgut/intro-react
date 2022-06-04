import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
 // const [searcValue, setSearcValue] = React.useState('');

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
   console.log(searchValue);
  };

  return (
    <input className="TodoSearch" 
            value={searchValue}
            onChange={onSearchValueChange}/>
  );
}

export { TodoSearch };