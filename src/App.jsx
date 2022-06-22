import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Main from './componentes/Main';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
