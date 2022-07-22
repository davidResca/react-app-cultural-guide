import { useState } from 'react';
import { createContext } from 'react';

export const contexto = createContext();
const Provider = contexto.Provider;

export const CartContext = ({children}) => {
    const [ carrito, setCarrito ] = useState([]);
    const [ cantidadTotal, setCantidadTotal ] = useState(0);
    const [ precioTotal, setPrecioTotal ] = useState(0);
    const cartCopy = [...carrito];
    
    const  agregarProducto = (producto, cantidad) => {
        
        const nuevoProducto = {
            ...producto, 
            cantidad : cantidad,
        } 

        if (isInCart(producto.id)){
            cartCopy.forEach((producto) => {
                if (nuevoProducto.id === producto.id) {
                    producto.cantidad += cantidad;
                }
            })
        } else {
            cartCopy.push({...nuevoProducto});
        }
        
        setCarrito(cartCopy);
        //actualiza cantidadTotal
        const cantTotal = actualizarCantidadTotal;
        setCantidadTotal(cantTotal);
        //actualiza precioTotal
        const precioFinal = calcularPrecioTotal();
        setPrecioTotal(precioFinal);
        
        /* console.log(precioFinal)
        console.log(cartCopy)
        console.log(carrito) */
    }
    
    const isInCart = id => carrito.some(producto => producto.id === id);
    const eliminarProducto = id => setCarrito (carrito.filter((producto) => (producto.id !== id)))
    const actualizarCantidadTotal = () => cartCopy.reduce((acc, producto)=> acc += producto.cantidad, 0);
    const calcularPrecioTotal = () => cartCopy.reduce((acc, producto)=> acc += producto.precio * producto.cantidad, 0);
    const vaciarCarrito = () => {
        setCarrito([]);
        setCantidadTotal(0);
        setCantidadTotal(0);
        setPrecioTotal(0);
    }
    const valorDelContexto = {
        carrito : carrito,
        cantidadTotal : cantidadTotal,
        precioTotal : precioTotal,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        vaciarCarrito: vaciarCarrito,
    };

    return (
        <Provider value={valorDelContexto} >
            {children}
        </Provider>
    )
};


