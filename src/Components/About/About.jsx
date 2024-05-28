import React from 'react'
import './About.css'
import about from '../../assets/about.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img src={about} alt="about" className='about-img'/>
            </div>
            <div className='about-right'>
                <h3>About Freshdata</h3>
                <h2>Revolutionizing Communications for IoT</h2>
                <p>Over the last year we filed 12 new patents that can impact  6G, LoRa, and space communication standardization. </p>
                <p>Our first flagship product is the LPWAN Tunneling Relay, based on one of our pending patents. </p>
                <p>The freshdata relay will stand out in the emerging LPWAN relay market by its energy efficiency, backward compatibility, and its ability to support a larger number of IoT devices. We will make the PoC demonstration of the Freshdata relay on an environmental IoT system deployed on a beach, for groundwater and ecosystem monitoring. </p>
                <p>The relay will have applications wherever LPWANs are used: smart cities, agriculture, monitoring of highways, gas pipelines, electrical distribution systems, as well as satellite uplink acccess for land and maritime IoT.</p>
                <p>FRESHDATA brings together a team with cutting edge experience in AoI research as well as implementation and prototyping of wireless multiuser systems, embedded software, and business development. We also have two industry leading advisors, from whose experience we will benefit greatly. </p>
            </div>
        </div>
    )
}

export default About
