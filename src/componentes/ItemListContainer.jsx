import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { fetchProductos, getProductoByCategory } from "./base/fetch";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [ items, setItems ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {

        setLoading(true);

        if(!categoryId){
            fetchProductos()
            .then(response => {
                setItems(response);
                setLoading(false);
            })
        } else{
            getProductoByCategory(categoryId)
            .then(response => {
                setItems(response);
                setLoading(false);
            })
        }
    }, [categoryId])

    return (
        <div className="catalog-container">
            {
                isLoading ? <p className="loader">buscando productos...</p> : <ItemList productos = { items }/>
            }
        </div>
    )
}

export default ItemListContainer;