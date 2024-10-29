import React from 'react';
import './Work.css';
import Img from '../Data/Img';
import { FaArrowRight } from "react-icons/fa";

function Mywork() {
    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                {Img.map((work) => (
                    <img key={work.id} src={work.img} alt={work.id} />
                ))}
            </div>

           
        </div>
    );
}

export default Mywork;
