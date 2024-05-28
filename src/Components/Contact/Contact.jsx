import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Contact Us</h3>
                <p>
                    Feel free to react out from our contact information below.
                    Your feedback, questions, and suggestions are important for us as we strive to provide
                    exceptional service to our IoT community.
                </p>
                <ul>
                    <li>info@freshdata.com</li>
                    <li>Üniversiteler Mah. İhsan Doğramacı Blv. No: 31 İç Kapı No: 20 06800 Çankaya/Ankara</li>
                </ul>
            </div>


            <div className='contact-col'>
                <form>
                    <input type="text" placeholder='Name' required/>
                    <input type="email" placeholder='Email'required/>
                    <textarea name='message' rows='6' placeholder='Message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Send</button>
                </form>
            </div>
        </div>


    )
}

export default Contact