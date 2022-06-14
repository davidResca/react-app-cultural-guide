import ItemListContainer from "./ItemListContainer";
import CardPromoContainer from "./CardPromoContainer";
import CardDisciplineContainer from "./CardDisciplineContainer";
import MainGreetings from "./MainGreetings";



const Main = () => {
    return (
        <main className="main">
            <ItemListContainer saludo="Bienvenidx"/>
            <MainGreetings />
            <CardPromoContainer />
            <CardDisciplineContainer />
        </main>
    )
}

export default Main;
