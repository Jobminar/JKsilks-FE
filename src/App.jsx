import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Profile/Login";
import Signup from "./components/Profile/Signup";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Account from "./components/Profile/Account";
import Favourites from "./components/Favourites/Favourites";
import AddTocart from "./components/Cart/AddTocart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/addtocart" element={<AddTocart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
