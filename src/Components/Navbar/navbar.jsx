import React, { useState } from 'react'
import './navbar.css'
import logo from "../assest/logo.png"
import cart_icon from "../assest/cart_icon.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
    const[menu,setMenu] =useState("shop");
    return (
        <div className='Navbar'>
            <div className='nav-logo'>
                <img src={logo} alt='logo'></img>
                <p>SHOPPER</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => {setMenu("Shop")}}><Link style={{ textDecoration:'none',color:'#626262'}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
                <li  onClick={() => {setMenu("Men")}}><Link style={{ textDecoration:'none', color:'#626262'}} to='/mens'>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("Women")}}><Link style={{ textDecoration:'none', color:'#626262'}} to='/womens'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("Kids")}}><Link style={{ textDecoration:'none', color:'#626262'}} to='/kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
           <Link to='/login'> <button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt='Cart'></img></Link>
            <div className='nav-cart-count'>0</div>

            </div>


        </div>
    )
}

export default Navbar