import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "./base/fetch";
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const {id} = useParams();

    useEffect(()=>{
        isLoading = true;

        getProductoById(parseInt(id))
        .then(response => {
            setProducto(response)
            isLoading = false;
        });
    },[id]);

    return (
        <div>
            {
                isLoading ? <p className="loader-item">Cargando Item...</p> : <ItemDetail {...producto} />
            }
        </div>
    )
}

export default ItemDetailContainer;