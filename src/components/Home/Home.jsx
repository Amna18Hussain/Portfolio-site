import React from 'react'
import './Home.css'
import img from '../../assets/img.png'

function Home() {
    return (
        <>
            <div id='home' className='hero'>
                <img src={img} alt="" />
                <h1><span>I'm Amna Hussain,</span> frontend developer.</h1>
                <p>"Frontend developer with 2 years' experience, including 1.5 years at Engmatix, skilled in responsive web applications." </p>

                <div className="hero-action">
                    <div className="hero-connect">
                        connect me
                    </div>

                    <div className="hero-resume">
                        <a 
                            href='/Amna HussaiN (1).pdf'
                            download='Amna HussaiN (1).pdf'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            My Resume
                        </a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home