import React from 'react'
import './Contact.css'
import { MdMarkEmailRead } from "react-icons/md";
import { MdAddLocationAlt } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
function Contact() {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a5a4463d-a0e0-414a-b955-ec2a20a16e1c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
    return (
        <>
            <div id='contact' className="contact">
                <div className="contact-title">
                    <h1>Get in Touch</h1>
                </div>

                <div className="contact-section">
                    <div className="contact-left">
                        <h1>Let's talk</h1>
                        <p>I'm currently avaliable to take on new projects, so fell free
                            to send me a message about anything that you want me to work on.
                            you can contact anytime.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail">
                                <MdMarkEmailRead />
                                <p>itsamnaanw786@gmail.com</p>
                            </div>

                            <div className="contact-detail">
                                <MdAddCall />
                                <p>+301 6075014</p>
                            </div>

                            <div className="contact-detail">
                                <MdAddLocationAlt />
                                <p>Punjab, Pakistan </p>
                            </div>



                        </div>
                    </div>


                    <form  onSubmit={onSubmit}className='contact-right'>
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter your name' />

                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter your Email' />

                        <label htmlFor="">Write your message here</label>
                        <textarea name="message" rows="0" placeholder='Enter your Message'></textarea>

                        <button type='submit' className="contact-submit">
                            submit now
                        </button>



                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact