const Cardpromo = ({img, titulo, descripcion}) => {
    return (
        <div className="card">
            <div className="card-title">
                <p>{titulo}</p>
            </div>
            <img className="card-img" src={img} alt={titulo} />
            <div className="card-description">
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Cardpromo;