import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link,Route, Switch} from 'react-router-dom';
import Navbar from './componentes/Navbar.jsx';
import NuevoProducto from './componentes/Productos/NuevoProducto';
import Productos from './componentes/Productos/Productos';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
         <nav className="nav">
            <h1>Tienda de Celulares</h1>
        </nav>

         <Switch>
              <Route exact path="/" component={Productos} />
              <Route exact path="/productos/nuevo" component={NuevoProducto} />
         </Switch>
     
      </Router>
       
    </div>
  );
}

export default App;
