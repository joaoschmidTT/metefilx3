import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './paginas/login';
import Catalogo from './paginas/catalagofilmes';           //por algum motivo o import parece meio bugado lembrar de pesquisar

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
