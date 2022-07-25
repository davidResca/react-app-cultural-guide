//import styles from 'MainGreeting.module.css';
import { Link } from "react-router-dom";

const MainGreeting = () => {
    return (
        <div className="MainCardsContainer">
            <div className="main-title-container">
            <h1 className="main-title">bienvenidx</h1>
            <p className="main-subtitle">Esto es una guía</p>
            <p className="main-subtitle-color">Cultural</p>
            <p className="main-description"><Link to ="/products">Compra tus entradas!</Link></p>
            </div>
        </div>
    )
}

export default MainGreeting;