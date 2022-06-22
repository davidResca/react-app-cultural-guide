import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { fetchProductos, getProductoByCategory } from "./base/fetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [ items, setItems ] = useState([]);
    
    const { categoryId } = useParams();

    useEffect(() => {
        if(!categoryId){
            fetchProductos()
            .then(response => {
                setItems(response);
            })
        } else {
            getProductoByCategory(categoryId)
            .then(response => {
                setItems(response);
            })
        }
    }, [categoryId])

    
    return (
        <div className="catalog-container">
            {
                items?.length <= 0 ? <p className="loader">buscando productos...</p> : <ItemList productos = { items }/>
            }
        </div>
    )
}

export default ItemListContainer;