import Footer from "./Components/Footer/Footer.jsx";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";
//
//
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="este es el greeting de itemlistcontainer" />
      <ProductCard title="Producto 1" price={500} />
      <ProductCard title="Producto 2" price={1000} />
      <ProductCard title="Producto 3" price={2000} />
      <Footer />
    </div>
  );
}

export default App;
