import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';


const ItemDetail = ({...producto}) => {
    
    const {nombre, autor, precio, descripcion, img, stock} = producto;

    //const [ buttonVerCarrito, setButtonVerCarrito ] = useState(false);
    const { agregarProducto } = useContext(contexto)

    const onAdd = (cantidadProductos) => {
        /* console.log(cantidad) */
        if(cantidadProductos >= 1){
            agregarProducto(producto, cantidadProductos)
            //setButtonVerCarrito(true);
        } else{ 
            return null;
        }
    }


    return (
        <div className="detail-container">
            <div className='detail-left-column'>
                <img className='detail-img' src={img} alt={nombre} />
            </div>
            <div className='detail-right-column'>
                <h1 className='detail-title'>{nombre}</h1>
                <h2 className='detail-title'>{autor}</h2>
                <p className='detail-desc'>{descripcion}</p>
                <strong className='detail-price'>Precio: ${precio}</strong>
                <Link to="/carrito" className='detail-price'>Ver carrito</Link>
                {/* { 
                    buttonVerCarrito ? 
                        <Link to="/carrito" className='detail-price'>Ver carrito</Link>
                        : 
                        <ItemCount 
                            stock={stock} 
                            initial={1} 
                            onAdd={onAdd} 
                    /> 
                } */}
                <ItemCount 
                    stock={stock} 
                    initial={1} 
                    onAdd={onAdd} 
            /> 
            </div>
        </div>
    )
}

export default ItemDetail;