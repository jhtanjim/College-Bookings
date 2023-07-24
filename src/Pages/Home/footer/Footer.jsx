import React from 'react';
import { Link } from 'react-router-dom';
import footerimg from '../../../assets/images/testimonial01.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-red-100 text-base-content">
                <div>
                    <img src={footerimg} alt="" style={{ width: '150px', height: 'auto' }} />

                    <h2 className='text-xl font-bold text-start'>Programing College</h2>
                    <p>College, also known as university or higher education institution in some regions, is an educational institution that provides tertiary education beyond the high school level.</p>
                </div>
                <div>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/colleges">Colleges</Link></li>
                    <li><Link to="/addmission">Admission</Link></li>


                    <li><Link to="/login">Login</Link></li>


                </div>

                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <h1 className='bg-red-100 text-center pb-8'>copyright jh tanjim || 2023</h1>
        </div>
    );
};

export default Footer