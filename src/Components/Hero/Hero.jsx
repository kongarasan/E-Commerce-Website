import React from 'react'
import "./Hero.css"
import hand_icon from "../assest/hand_icon.png"
import arrow_icon from "../assest/arrow.png"
import hero_img from "../assest/hero_image.png"
const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>NEW ARRAIVAL ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <p>new</p>
                        <img src={hand_icon} alt=''></img>

                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collections</div>
                    <img src={arrow_icon} alt=''></img>
                </div>

            </div>
            <div className='hero-right'>
               <img src={hero_img} alt=''></img>
            </div>
        </div>

    )
}

export default Hero