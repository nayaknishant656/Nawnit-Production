import React from 'react'
import "./header.css"
import { Link } from "react-router-dom";
export default function header() {
    return (
        <>
        <div className='nav_main__parent'>
            <div className='nav__right'><h3>Nawnit Production</h3></div>
            <div className='nav__left'><div className='left__main_nav'>
                <nav>
                    <ul>
                        <Link to="/" ><li>Home</li></Link>
                        <li>gmail</li>
                    </ul>
                </nav>
            </div>
            </div>
        </div>
        </>
        
    )
}
