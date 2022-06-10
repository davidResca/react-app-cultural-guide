import ItemListContainer from "./ItemListContainer";
import CardPromoContainer from "./CardPromoContainer";
import CardDisciplineContainer from "./CardDisciplineContainer";
import MainGreetings from "./MainGreetings";
import ItemList from "./ItemList";


const Main = () => {
    return (
        <main className="main">
            <ItemListContainer saludo="Bienvenidx"/>
            <MainGreetings />
            <CardPromoContainer />
            <CardDisciplineContainer />
            {/* <ItemList /> */}
        </main>
    )
}

export default Main;
