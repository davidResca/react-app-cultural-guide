import CardPromoContainer from "./CardPromoContainer";


const MainCardsContainer = () => {
    return (
        <divn className="MainCardsContainer">
            <div className="main-title-container">
            <h1 className="main-title">bienvenidx</h1>
            <p className="main-subtitle">Esto es una guía</p>
            <p className="main-subtitle-color">Cultural</p>
            <p className="main-description">Compra tus entradas!</p>
            </div>
            <div className="cards-container">
                <CardPromoContainer />
            </div>
        </divn>
    )
}

export default MainCardsContainer;