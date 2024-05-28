import React, {useEffect, useState} from 'react'
import {Link}  from 'react-scroll'
import './Navbar.css'
import logo from '../../assets/logo/freshdata.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50){
                setSticky(true)
            }else{
                setSticky(false)
            }
        })
    },[]);

    return (
        <nav className={`container ${sticky? 'dark-nav': ''}`}>
            <img src={logo} alt="logo" className='logo' />
            <ul>
                <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} offset={0} duration={500}>About</Link></li>
                <li><Link to="contact" smooth={true} offset={0} duration={500}>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar