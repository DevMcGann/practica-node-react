import React from 'react';
import './App.css';
import NuevoProducto from './componentes/NuevoProducto';
import Productos from './componentes/Productos';

function App() {
  return (
    <div className="App">
        <NuevoProducto/>
        <Productos/>
    </div>
  );
}

export default App;
