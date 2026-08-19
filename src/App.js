import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/Login';
import Pagina404 from './paginas/Pagina404';
import './App.css';
import Usuarios from './paginas/Usuarios';
import Projetos from './paginas/Projetos';
import Tarefas from './paginas/Tarefas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/dashboard" element={<></>} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
