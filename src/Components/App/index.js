import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUi } from './AppUi';

const App = () => {  
  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
};

export { App };
