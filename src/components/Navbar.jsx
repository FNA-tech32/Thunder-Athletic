import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import { links } from '../../data'
import { VscThreeBars } from 'react-icons/vsc'
import { VscClose } from 'react-icons/vsc'
import { FaBolt } from 'react-icons/fa'

const Navbar = () => {
    const [isNavShowing , setIsNavShowing] = React.useState(false)
    return (
        <nav>
            <div className="container nav_container">
                <Link to="/" className='nav_brand' onClick={() => setIsNavShowing(false)}>
                    <span className='brand_icon'><FaBolt /></span>
                    <span className='brand_text'>THUNDER <span>ATHLETICS</span></span>
                </Link>
                <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>{
                    links.map(({ name, path }, index) => {
                        return (
                            <li key = {index}> <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ""} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink></li>

                        )

                    })
                }
                </ul>

                <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {
                        isNavShowing ? <VscClose /> : <VscThreeBars />
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar