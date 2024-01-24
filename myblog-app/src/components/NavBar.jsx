import React from 'react';
import humberger from "../assets/icons/humberger.svg";

function NavBar() {
    return (
        <div className="NavBar bg-white items-center">
            <nav className='flex justify-between items-center mx-4 h-16'>
                <div className="nav-left">
                    <h1 className='text-SaintPetersburgDarkBlue font-bold text-2xl' >My Blog</h1>
                </div>
                <div className="nav-right">
                    <div className="humberger">
                        <img src={humberger} alt="icon" />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar