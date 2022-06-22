import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductoById } from "./base/fetch";
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    
    const {id} = useParams();

    useEffect(()=>{
        getProductoById(parseInt(id))
        .then(response => {
            setProducto(response)
        });
    },[id]);

    return (
        <div>
            {
                producto?.length <= 0 ? <p className="loader-item">Cargando Item...</p> : <ItemDetail {...producto} />
            }
        </div>
    )
}

export default ItemDetailContainer;