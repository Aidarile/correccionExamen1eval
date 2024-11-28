import { useState } from 'react'
import './App.css'
import  CardProducto  from './components/CardProducto';

function App() {

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [productos, setProductos] = useState([]);


  const handleNombreChange = (newNombre) => {
    setNombre(newNombre);
  }

  const handleCantidadChange = (newCantidad) => {
    setCantidad(newCantidad);
  }

  const agregarCantidadClick = (id) => {
    setProductos(productos.map((prod) => {
      if (prod.id === id) {
        return {...prod, cantidad: prod.cantidad + 1}
      }
      return prod;
    }))
  }

  const eliminarCantidadClick = (id) => {
    setProductos(productos.map((prod) => {
      if (prod.id === id && prod.cantidad > 0) {
        return {...prod, cantidad: prod.cantidad - 1}
      }
      return prod;
    }))
  }

  const eliminarProductoClick = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  }

  const agregarProducto = () => {
    const prod = {id: crypto.randomUUID(), nombre: nombre, cantidad: cantidad}
    setProductos([...productos, prod])
  }



  return (
    <>
      <h1>GESTION STOCK</h1>
      <div className='contenedor_inputs'>
      <p>Nombre producto:</p>
      <input type="text" onChange={(e) => handleNombreChange(e.target.value)}></input>
      <p>Cantidad:</p>
      <input type="number" onChange={(e) => handleCantidadChange(e.target.value)}></input>
      <button onClick={agregarProducto}>AGREGAR</button>
      </div>

      <br></br>

      <ul>
        {productos.map((prod) => {
          return (
            <CardProducto key = {prod.id} 
            prod={prod} 
            agregarCantidad = {() => agregarCantidadClick(prod.id)}
            eliminarCantidad = {() => eliminarCantidadClick(prod.id)}
            eliminarProducto = {() => eliminarProductoClick(prod.id)}>
            </CardProducto>
          );
        })}
      </ul>
    </>
  );

}
export default App;
