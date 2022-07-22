import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { contexto } from '../context/CartContext';


const ItemDetail = ({item}) => {

    const { agregarProducto } = useContext(contexto)
    const [cant, setcant] = useState(0)

    const onAdd = (cantidadProducto) => {
        //console.log(cantidadProducto)
        setcant(cantidadProducto)
        agregarProducto(item, cantidadProducto);
    }


    return (
        <div className="detail-container">
            <div className='detail-left-column'>
                <img className='detail-img' src={item.img} alt={item.nombre} />
            </div>
            <div className='detail-right-column'>
                <h1 className='detail-title'>{item.nombre}</h1>
                <h2 className='detail-title'>{item.autor}</h2>
                <p className='detail-desc'>{item.descripcion}</p>
                <strong className='detail-price'>Precio: ${item.precio}</strong>
                {
                    cant === 0 ? 
                        <ItemCount 
                            stock={item.stock} 
                            initial={1} 
                            onAdd={onAdd} 
                    />
                    : 
                    <Link to="/carrito" className='detail-price'>Ver carrito</Link>
                }
            </div>
        </div>
    )
}

export default ItemDetail;