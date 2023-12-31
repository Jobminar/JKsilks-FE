import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Footer from "./components/Footer/footer";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Login from "./components/Profile/Login";
import Signup from "./components/Profile/Signup";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Account from "./components/Profile/Account";
import Favourites from "./components/Favourites/Favourites";
import AddTocart from "./components/Cart/AddTocart";
import Semikanchipattu from "./components/Sares/semikanchipattu/semikanchipattu";
import Lightweightpattu from "./components/Sares/lightweightpattu/lightweightpattu";
import Softsilk from "./components/Sares/softsilk/softsilk";
import Purekanchipattu from "./components/Sares/purekanchipattu/purekanchipattu";
import Bridalware from "./components/Sares/Bridalware/bridalware";
import Purekanjivaram from "./components/Sares/Purekanjivaram/purekanjivaram";
import Adminheader from "./components/Admin/adminheader";
import Admincustomer from "./components/Admin/Admin-customer/admin-customer";
import Adminproduct from "./components/Admin/Admin-product/adminproduct";
import Adminfeedback from "./components/Admin/Admin-feedback/adminfeedback";
import Product from "./components/Admin/Product";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/addtocart" element={<AddTocart />} />
          <Route path="/semikanchipattu" element={<Semikanchipattu />} />
          <Route path="/lightweightpattu" element={<Lightweightpattu />} />
          <Route path="/softsilk" element={<Softsilk />} />
          <Route path="/purekanchhipattu" element={<Purekanchipattu />} />
          <Route path="/bridalware" element={<Bridalware />} />
          <Route path="/purekanjivaram" element={<Purekanjivaram />} />

          {/* Admin */}
          <Route path="/adminheader" element={<Adminheader />} />
          <Route path="/admincustomer" element={<Admincustomer />} />
          <Route path="/adminproduct" element={<Adminproduct />} />
          <Route path="/adminfeedback" element={<Adminfeedback />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
