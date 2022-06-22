import ItemListContainer from "./ItemListContainer";
import MainCardsContainer from "./MainCardsContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import { Routes, Route } from "react-router-dom";



const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<MainCardsContainer />}></Route>
                <Route path="/products/" element={<ItemListContainer />}></Route>
                <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
                <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
            </Routes>
        </main>
    )
}

export default Main;
