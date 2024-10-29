import React from 'react';
import './About.css';
import img from '../../assets/img.png';

function About() {
    return (
        <>
            <div id='about' className="about">
                <div className="about-title">
                    <h1>About me</h1>
                </div>

                <div className="about-sections">
                    <div className="about-left">
                        <img src={img} alt="" />
                    </div>

                    <div className="about-right">
                        <div className="about-para">
                            <p>
                                "With 2 years of experience as a frontend developer, I bring a passion for crafting visually stunning and interactive user experiences. My focus is on creating clean,
                                responsive designs that not only engage users but also elevate the overall digital experience. <br />
                                Driven by creativity and attention to detail, I thrive in  <br />
                                collaborative environments where innovation and quality are <br />
                                a priority."
                            </p>
                        </div>

                        <div className="about-skills">
                            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "70%" }} /></div>
                            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "65%" }} /></div>
                            <div className="about-skill"><p>React, Redux</p><hr style={{ width: "70%" }} /></div>
                            <div className="about-skill"><p>Backend Frameworks</p><hr style={{ width: "50%" }} /></div>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="about-achievements">
                        <div className="about-achievement">
                            <h1>2+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                            <hr /> {/* Horizontal line after the first achievement */}
                        </div>

                        <div className="about-achievement">
                            <h1>45+</h1>
                            <p>PROJECTS COMPLETE</p>
                            <hr /> {/* Horizontal line after the second achievement */}
                        </div>

                        <div className="about-achievement">
                            <h1>1+</h1>
                            <p>Internship</p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
