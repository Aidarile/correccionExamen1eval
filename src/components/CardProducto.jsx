import "./CardProducto.css";

const CardProducto = ({prod, agregarCantidad, eliminarCantidad, eliminarProducto}) => {
    return (
        <li>
            <p>{prod.nombre}</p>
            <div className="contenedor_cantidad">
             <button onClick={() => eliminarCantidad(prod.id)}>-</button>

            <p>{prod.cantidad}</p>
            <button onClick={() => agregarCantidad(prod.id)}>+</button>
            </div>
            <button onClick={() => eliminarProducto(prod.id)}>Eliminar</button>
          </li>
    )
}

export default CardProducto;