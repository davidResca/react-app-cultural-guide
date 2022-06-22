import productos from './productData';
import newsData from './newsData';

export const fetchProductos = () => {
    return new Promise ((ful) => {
        setTimeout(()=> {
            ful(productos);
        }, 2000);
    })
}

export const getProductoById = (id) => {
    return new Promise ((ful) => {
        setTimeout(()=>{
            ful(productos.find(prod => prod.id === id));
        }, 2000);
    })
}

export const getProductoByCategory = (categoryId) => {
    return new Promise ((ful) => {
        setTimeout(()=>{
            ful(productos.filter(prod => prod.categoryId === categoryId));
        }, 2000);
    })
}

export const getNewsData = () => {
    return new Promise ((ful) => {
        setTimeout(()=> {
            ful(newsData);
        }, 1000);
    })
}