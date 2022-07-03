import ItemCount from './ItemCount';


const ItemDetail = ({nombre, autor, precio, descripcion, img, stock}) => {

    const onAdd = () =>{}

    return (
        <div className="detail-container">
            <div className='detail-left-column'>
                <img className='detail-img' src={img} alt={nombre} />
            </div>
            <div className='detail-right-column'>
                <h1 className='detail-title'>{nombre}</h1>
                <h2 className='detail-title'>{autor}</h2>
                <p className='detail-desc'>{descripcion}</p>
                <strong className='detail-price'>Precio: ${precio}</strong>
                <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail;