
import './App.css';
import Inicio from './components/Inicio';
import { Routes, Route, Link} from 'react-router-dom';
import Productos from './components/Productos';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';

function App() {
  return (
    <>
      
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to='/' className='nav-link active text-white'>Inicio</Link>
                  
                </li>
                <li className="nav-item">
                  <Link to='/productos' className='nav-link text-white ' >Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to='/acerca-de' className='nav-link text-white'>Acerca De</Link>
                </li>
                <li className="nav-item">
                  <Link to='/contacto' className='nav-link text-white'>Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>



        <Routes>
          <Route path='/productos' element={<Productos />}>
          </Route>
          <Route path='/acerca-de' element={<AcercaDe />} >
          </Route>
          <Route path='/contacto' element={<Contacto />}>
          </Route>

          <Route path='/' element={<Inicio />} > 
          </Route>
        </Routes>
    </>
  );
}

export default App;
