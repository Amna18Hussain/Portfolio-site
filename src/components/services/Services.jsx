import React from 'react'
import './Service.css'
import Data from '../../components/Data/Data'
// import { FaArrowRight } from "react-icons/fa6";
function Services() {
  return (

    <>
    <div className="services">
        <div className="services-title">
            <h1>My Services</h1>
           
        </div>

        <div id='service' className="services-container">
            {Data.map((service, index) =>{
                return <div key={index} className="service-format">
                   
                    <h2>{service.name}</h2>
                    <p>{service.desc}</p>

                    

                </div>
            })}

        </div>
    </div>
    </>
   
  )
}

export default Services