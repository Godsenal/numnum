import React from 'react';
import { Math } from './tabs';
import StoreProvider from './StoreProvider';
import './App.css';

function App() {
  return (
    <StoreProvider>
      <Math />
    </StoreProvider>
  );
}

export default App;
