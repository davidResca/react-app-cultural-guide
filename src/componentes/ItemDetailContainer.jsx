import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import { db } from "../firebase/firebase";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const [isLoading, setLoading] = useState(true);    
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true);
        
        const collectionProductos = collection(db,"productos");
        const refDoc = doc(collectionProductos, id)
        const consulta = getDoc(refDoc);

        consulta
            .then(resultado => {
                const item = {
                    id: resultado.id,
                    ...resultado.data(),
                }
                setProducto(item);                
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    },[id]);

    return (
        <div>
            {
                isLoading ? <p className="loader-item">Cargando Item...</p> : <ItemDetail item={producto} />
            }
        </div>
    )
}

export default ItemDetailContainer;