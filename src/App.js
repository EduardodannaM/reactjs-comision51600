import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

//
//
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
