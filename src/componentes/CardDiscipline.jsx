import image from './assets/dis1.png';

const CardDiscipline = () => {
    return (
        <div className="card-discipline">
            <h2 className='card-dis-title'>Galería de Arte</h2>
            <img className="card-dis-img" src={image} alt="" />
        </div>
    )
}

export default CardDiscipline;