import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import fetchProductos from "./base/fetch";
import productos from "./base/productData";

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchProductos(3000, productos)
        .then(r => setItems(r))
    }, [items])

    console.log(items);
    
    return (
        <div>
            <div className="contador-container">
                <h2 className="greeting">{props.saludo}, esto es un contador hecho con React:</h2>
            </div>
            <div className="container">
                <ItemList productos={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer;