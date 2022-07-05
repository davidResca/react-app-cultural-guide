import { useState } from 'react';
import { createContext } from 'react';

export const contexto = createContext();

const Provider = contexto.Provider;

export const CartContext = ({children}) => {

    const [ carrito, setCarrito ] = useState([]);
    const [ cantidadTotal, setCantidadTotal ] = useState(0);
    //const [ precioTotal, setPrecioTotal ] = useState(0);
    const cartCopia = [...carrito];

    const agregarProducto = (producto, cantidad) => {

        const nuevoProducto = {
            ...producto, 
            cantidad : cantidad,
        } 
        //console.log(nuevoProducto) LLEGA OK
        //console.log('cartCopia vacia',cartCopia) //Aca imprime array vacío... OK
        
        //HASTA ACÁ TODO OK
        
        if(isInCart(nuevoProducto.id) === true){
            nuevoProducto.cantidad = nuevoProducto.cantidad + cantidad;
            console.log('hay producto, ahora el resultado es', nuevoProducto.cantidad)
            console.log('cantidad nuevo producto en if', nuevoProducto.cantidad);
        } else {        
            cartCopia.push(nuevoProducto)
            console.log('cartCopia con producto',cartCopia)
        }
        //console.log(producto, cantidad) */
        setCarrito(cartCopia);
    }

    const isInCart = (id) => {
        return cartCopia.find(producto => producto.id === id) ? true : false; 
    }
    const eliminarProducto = (id) => {
        setCarrito (carrito.filter((producto) => (producto.id !== id)));
    }
    const actualizarCantidad = (producto, cantidad) => {
        //setCarrito setCantidadTotal
    }
    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const valorDelContexto = {
        carrito : carrito,
        cantidadTotal : cantidadTotal,
        //precioTotal : precioTotal,
        agregarProducto: agregarProducto,
        eliminarProducto: eliminarProducto,
        actualizarCantidad: actualizarCantidad,
        vaciarCarrito: vaciarCarrito,
    };

    //console.log(carrito)
    return (
        <Provider value={valorDelContexto} >
            {children}
        </Provider>
    )
};


