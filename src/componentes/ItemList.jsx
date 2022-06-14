import Item from './Item';

const ItemList = ({productos}) => {
    return (
        productos.map(p =>
            <Item 
            id={p.id} 
            nombre={p.nombre} 
            img={p.img}
            stock ={p.stock}
            key={p.id}
            />
        )
    )
}

export default ItemList;