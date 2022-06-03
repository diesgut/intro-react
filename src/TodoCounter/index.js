import React from 'react';
import './TodoCounter.css';
/*
const estilos = {
    color: 'red',
    backgroundColod: 'yellow',
}
*/
function TodoCounter(props) {
    const { total, completed } = props;
    
    return (
        <h2 className='TodoCounter'> Has Completado {completed} de {total} TODOs </h2>
    );
}

export default TodoCounter;