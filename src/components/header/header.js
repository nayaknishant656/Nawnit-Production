import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import samadhaniLogo from './img/samadhani_logo.png';

export default function Header() {
    return (
        <div className='nav_main__parent'>
            <div className='nav__left'>
                <img
                    className='header-logo'
                    src={samadhaniLogo}
                    alt="Samadhani Logo"
                />
            </div>
            <div className='nav__right'>
                <h3>Samadhani - AI Portal</h3>
                <p className='header-description'>
                    Your Trusted Partner for Government Services
                </p>
                <details>
                    <summary>
                        <p className='summary_p'>
                            Samadhani is an online service center (web portal) that works to bring
                            all types of government services and schemes to people's homes.
                        </p>
                    </summary>
                    Through this, you can avail many types of government services from the
                    comfort of your home — whether it is Aadhaar Card, PAN Card, Voter ID, or
                    government schemes like PM Kisan, Ujjwala Yojana, Mudra Loan, and more.
                </details>
                <nav className='header-nav'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
