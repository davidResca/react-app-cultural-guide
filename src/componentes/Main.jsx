import ItemListContainer from "./ItemListContainer";
import CardPromoContainer from "./CardPromoContainer";
import CardDisciplineContainer from "./CardDisciplineContainer";
import MainGreetings from "./MainGreetings";
import ItemDetailContainer from "./ItemDetailContainer";



const Main = () => {
    return (
        <main className="main">
            <ItemListContainer saludo="Bienvenidx"/>
            <ItemDetailContainer />
            <MainGreetings />
            <CardPromoContainer />
            <CardDisciplineContainer />
        </main>
    )
}

export default Main;
