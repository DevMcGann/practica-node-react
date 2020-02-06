import React,{useContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './componentes/Navbar.jsx';
import NuevoProducto from './componentes/Productos/NuevoProducto';
import Productos from './componentes/Productos/Productos';
import UsuarioNuevo from './componentes/Usuarios/UsuarioNuevo.jsx'
import Login from './componentes/Usuarios/Login';


import {CRMContext, CRMProvider} from './CRMContext';
import SliderAdmin from './componentes/Slider/SliderAdmin';
import Slider from './componentes/Slider/Slider.jsx';
import Footer from './componentes/Footer/Footer';
import NavbarPublica from './componentes/NavbarPublica';


function App() {

  const [auth, guardarAuth] = useContext(CRMContext)

  return (
    <div className="App">
      <Router>
        <CRMProvider value={[auth,guardarAuth]} >

              <Navbar/>
              <NavbarPublica/>
              

              <Slider/>

              <Switch>
                    <Route exact path="/" component={Productos} />
                    <Route exact path="/productos/nuevo" component={NuevoProducto} />
                    <Route exact path="/admin-nuevo" component={UsuarioNuevo} />
                    <Route exact path="/admin" component={Login} />
                    <Route exact path="/slider" component={SliderAdmin} />
                    
              </Switch>

              <Footer/>
              
        </CRMProvider>
      </Router>
       
    </div>
  );
}

export default App;
