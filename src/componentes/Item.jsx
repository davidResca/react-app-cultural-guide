import ItemCount from './ItemCount'

const Item = ({id, nombre, img, stock}) => {
    return (
        <div className='prod-card-container'>
            <div className="prod-card" key={id}>
                <h2 className="prod-name">{nombre}</h2>
                <img className="prod-img" src={img} alt={nombre} />
            </div>
            <ItemCount stock={stock} initial={1} onAdd={()=>{}}/>
        </div>
    )
}

export default Item;