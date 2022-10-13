import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    function scrollToProjects(){
        setTimeout(() => {
            document.getElementById("proj")?.scrollIntoView();
        }, 300)
    }

    function scrollToContact(){
        setTimeout(() => {
            document.getElementById("contact")?.scrollIntoView();
        }, 300)
    }

    return (
        <header className="header">
            <div className="welcome">
                <h1>Welcome</h1>
            </div>
            <div className="nav">
                <NavLink to="/home" className="link">Home</NavLink>
                <NavLink to="/home" className="link" onClick={scrollToProjects}>Projects</NavLink>
                <NavLink to="/home" className="link" onClick={scrollToContact}>Contact</NavLink>
            </div>
            
        </header>
    )

}

export default Header