import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUi';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

const App = () => {  
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
};

export { App };
