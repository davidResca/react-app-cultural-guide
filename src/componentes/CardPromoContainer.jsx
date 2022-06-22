import CardPromo from './Cardpromo';
import { useEffect, useState } from "react";
import { getNewsData } from './base/fetch';

const CardPromoContainer = () => {
    
    const [ flyer, setFlyer ] = useState({});

    useEffect(()=>{
        getNewsData()
        .then(response => {
            setFlyer(response)
        });
    },[]);


    return (
        <div className="card-promo-container">
            {
                flyer?.length < 0 ? <p>Cargando...</p> : <CardPromo {...flyer} />
            }
        </div>
    )
}


export default CardPromoContainer;

