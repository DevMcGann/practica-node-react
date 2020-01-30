import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link,Route, Switch} from 'react-router-dom';
import Navbar from './componentes/Navbar.jsx';
import NuevoProducto from './componentes/NuevoProducto';
import Productos from './componentes/Productos';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/>
         <Switch>
              <Route exact path="/" component={Productos} />
              <Route exact path="/productos/nuevo" component={NuevoProducto} />
         </Switch>
     
      </Router>
       
    </div>
  );
}

export default App;
