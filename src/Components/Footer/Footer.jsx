import React from 'react'
import "./Footer.css"
import footer_logo from "../assest/logo_big.png"
import instagram_logo from "../assest/instagram_icon.png"
import pintester_icon from "../assest/pintester_icon.png"
import whatsapp_icon from "../assest/whatsapp_icon.png"
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={footer_logo} alt=''></img>
                <p>SHOPPER</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='footer-social-icon'>
                <div className='footer-icons-container'>
                    <img src={instagram_logo}></img>
                </div>
                <div className='footer-icons-container'>
                    <img src={pintester_icon}></img>
                </div>

                <div className='footer-icons-container'>
                    <img src={whatsapp_icon}></img>
                </div>


            </div>
            <div className='footer-copyright'>
                <hr />
                <p>Copyright @ 2023 -All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer