import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import { getDocs, collection, query, where} from "firebase/firestore";

// getDocs: Traer muchos documentos en una coleccion.
//getDoc: traer un solo documento en base a su ID.
//doc: referencia a un documento de coleccion.
//query
//where
//collection

const ItemListContainer = () => {

    const [ items, setItems ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        
        const collectionProductos = collection(db,"productos");
    
        const ref = categoryId 
        ? query(collectionProductos, where('categoryId', '==', categoryId))
        : collectionProductos;
        
        const consulta = getDocs(ref);

        consulta
            .then((resultado) => {
                const productos_map = resultado.docs.map(doc =>{
                    const aux = doc.data();
                    aux.id = doc.id;
                    return aux;                
                })
                setItems(productos_map);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
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