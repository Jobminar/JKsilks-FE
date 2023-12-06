import { Routes,Route , BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer/footer"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"



function App() {

  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
             
        </Routes>
        <Footer/>
      </BrowserRouter>
       
       
    </>
  )
}

export default App
