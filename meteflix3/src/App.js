import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './paginas/login';
import Catalogo from './paginas/catalagofilmes'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/catalogofilme' element={<Catalogo />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
