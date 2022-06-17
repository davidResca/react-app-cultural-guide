import ItemCount from './ItemCount';


const ItemDetail = ({item}) => {

    return (
        <div  className="detail-container">
            <h1 className='detail-title'>{item.nombre}</h1>
            <h2 className='detail-title'>{item.autor}</h2>
            <img className='detail-img' src={item.img} alt={item.nombre} />
            <strong className='detail-img'>Precio: {item.precio} ETH</strong>
            <ItemCount stock={item.stock} initial={1} onAdd={()=>{}}/>
        </div>
    )
}

export default ItemDetail;