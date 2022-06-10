import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return (
        <div className="contador-container">
        <h2 className="greeting">{props.saludo}, esto es un contador hecho con React:</h2>
        <ItemCount stock={5} initial={1} onAdd={()=>{}}/>
        </div>
    )
}

export default ItemListContainer;