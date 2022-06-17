import { useEffect, useState } from "react";
import fetchProductos from "./base/fetch";
import ItemDetail from './ItemDetail';
import producto from "./base/producto";


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    
    useEffect(()=>{
        fetchProductos(2000, producto)
            .then(r => setItem(r));
        },[item]);

    return (
        <div>
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer;