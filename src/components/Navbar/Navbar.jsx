import './Navbar.css'

// images
import logo from './images/logo.png'
import cart from './images/cart.png'
import serch from './images/serch.png'
import wishlist from './images/wishlist.png'
import profile from './images/profile.png'

const Navbar = (()=>{
    return(
        <>
              <div className="navbar-con">
                <img src={logo} alt='logo'/>
                <p>Semi Kanchi pattu</p>
                <p>Light weight pattu</p>
                <p>Soft Silk</p>
                <p>Pure Kanchi Pattu</p>
                <p>Exclusive Bridal wear</p>
                <p>Pure Kanjivaram Silk</p>
                <img src={serch} alt='serch'/>
                <img src={wishlist} alt='wishlist'/>
                <img src={cart} alt='cart'/>
                <img src={profile} alt='profile'/>

              </div>
        </>
    )
})
export default Navbar