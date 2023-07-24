import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider'; // Import the AuthContext
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext); // Use the user and logOut from the AuthContext

    const navItems = (
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/colleges">Colleges</Link></li>
            <li><Link to="/addmission">Admission</Link></li>
            {/* Show additional links if user has an email (logged in) */}
            {user?.email ? (
                <>
                    <li><Link to="myCollege">My College</Link></li>

                    <li><button onClick={logOut}>Log Out</button></li>
                </>
            ) : (
                <li><Link to="/login">Login</Link></li>
            )}
        </>
    );

    return (
        <div className="bg-red-100">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <h1>Programming College</h1>
                        {/* <img src="https://i.ibb.co/ZSMLVTt/Liceria-Co-fotor-bg-remover-20230522211737.png" alt="" /> */}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user && (
                        <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip id="tooltip">{user.displayName}</Tooltip>}
                        >
                            <div style={{ position: 'relative', zIndex: '9999' }}>
                                <img
                                    className="rounded-3xl mr-5"
                                    src={user.photoURL}
                                    alt="Profile Picture"
                                    style={{ width: '40px', height: '40px' }}
                                />
                            </div>
                        </OverlayTrigger>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
