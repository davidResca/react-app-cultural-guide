import React from 'react';


const CartListItem = ({productos, eliminarProducto}) => {
    console.log(productos)
    return (
        productos.map((p, key) =>
            <div key={p.id} className='cart-item-container'>
                <img className="cart-prod-img" src={p.img} alt={p.nombre} />
                <h2 className="cart-prod-name">{p.nombre}</h2>
                <h2 className="cart-prod-cant">items: {p.cantidad}</h2>
                <h2 className="cart-prod-price">${p.precio}</h2>
                <button onClick={()=>eliminarProducto(p.id)} className="btn-remove-cart-item">remove</button>
            </div>
        )
    )
}

export default CartListItem;