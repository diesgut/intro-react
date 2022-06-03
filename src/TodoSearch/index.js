import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {

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