import { Link } from "react-router-dom";

const Item = ({id, nombre, img, stock}) => {
    return (
        <div className='prod-card-container'>
            <h2 className="prod-name">{nombre}</h2>
            <img className="prod-img" src={img} alt={nombre} />
            <Link to={`/detail/${id}`} className="btn-detail-item">Ver Detalle</Link>
        </div>
    )
}

export default Item;