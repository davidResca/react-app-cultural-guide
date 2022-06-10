import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        productos.map(p =>
            <Item 
            id={p.id}
            name={p.name}
            img={p.img}
            />)
    )
}

export default ItemList;