import ItemListContainer from "./ItemListContainer";
import MainCardsContainer from "./MainCardsContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito";
import Checkout from "./Checkout";
import { Routes, Route } from "react-router-dom";



const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<MainCardsContainer />}></Route>
                <Route path="/products/" element={<ItemListContainer />}></Route>
                <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
                <Route path="/carrito" element={<Carrito/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;
