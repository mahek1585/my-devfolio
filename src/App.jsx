import React from 'react';
import { ClickProvider } from './Assignment3/ClickContext';
import Home from './Assignment3/Home';


function App() {
  return (
    <ClickProvider>
      <Home />
    </ClickProvider>
  );

}

export default App;