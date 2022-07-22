import React from 'react';
import Header from './componentes/Header';
import Main from './componentes/Main';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContext>
        <Header />
        <Main />
      </CartContext>
    </BrowserRouter>
  );
}

export default App;
