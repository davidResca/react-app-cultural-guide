import image from './assets/flyer1.png';

const Cardpromo = () => {





    return (
        <div className="card">
            <h3 className='card-title'>Lorem ipsum dolor sit amet consectetur</h3>
            <img src={image} alt="flyer" />
            <p className="card-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam distinctio assumenda dolor hic possimus magni tempora optio architecto velit rerum eius, veritatis odio eligendi quia ipsam dolore modi repellendus voluptatem?
            </p>
        </div>
    )
}

export default Cardpromo;