import image from './assets/flyer1.png';

const Cardpromo = () => {





    return (
        <div className="card">
            <div className="card-title">
                <p>Lorem ipsum dolor sit amet</p>
            </div>
            <img className="card-img" src={image} alt="flyer" />
            <div className="card-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam distinctio assumenda dolor hic possimus magni tempora optio architecto velit rerum eius?</p>
            </div>
        </div>
    )
}

export default Cardpromo;