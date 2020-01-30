import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Navbar from './componentes/Navbar.jsx';
import NuevoProducto from './componentes/NuevoProducto';
import Productos from './componentes/Productos';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <NuevoProducto/>
        <Productos/>
    </div>
  );
}

export default App;
