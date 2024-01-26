import React, { useState } from 'react';
import humberger from "../assets/icons/humberger.svg";
import search from "../assets/icons/search.svg";
import closeIcon from "../assets/icons/close-svgrepo-com.svg";
import writeIcon from "../assets/icons/write-svgrepo-com.svg";
import userImage from "../assets/images/logo512.png"
import '../App.css';
// import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom';

function NavBar() {

    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
    const [isUserMenuOpen, setisUserMenuOpen] = useState(false)
    const [isAuthenticated, setisAuthenticated] = useState(false)

    const toogleMobileMenuOpen = () => {
        setisMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className="NavBar bg-[#164863] items-center">
            {/* <div className="fixed z-20"> */}
                <nav className='flex justify-between items-center mx-4 h-16 md:mx-24'>
                    <div className="nav-left">
                        <h1 onClick={() => setisAuthenticated(!isAuthenticated)} className='text-white font-bold text-2xl cursor-pointer'>BLOGSTER</h1>
                    </div>

                    <div className="nav-right flex">
                        
                        <div className="hidden search md:flex border border-[#427d9d] px-2 rounded-lg mr-16">
                            <input className='outline-none py-2 px-2 bg-transparent w-[20rem]' placeholder='Search...' type="text" />
                            <button><img src={search} alt="" className='rotate-90 invert' /></button>
                        </div>

                        <div className="hidden md:flex   items-center">
                            {isAuthenticated && (
                                <div className='flex space-x-16 mr-16 text-xl font-bold'>
                                    <div className='text-white hover:underline'><a href="/">Home</a></div>
                                    <div className='text-white hover:underline'><a href="/">About</a></div>
                                    <a href="/" className='text-white hover:underline'>
                                        <div className='flex space-x-1'>
                                            <div>Write</div>
                                            <img className='w-5 invert' src={writeIcon} alt="write" />
                                        </div>
                                    </a>
                                </div>
                            )}
                            {isAuthenticated && <div onClick={() => setisUserMenuOpen(!isUserMenuOpen)} className='border rounded-full cursor-pointer'><img className='p-1 w-10 rounded-full' src={userImage} alt="UserIcon" /></div>}
                            {!isAuthenticated && <Link to="/login-signup"><button className="py-2 px-6 rounded-lg bg-[#427d9d] text-white font-bold hover:bg-[#376d8b]">Sign in</button></Link> }
                        </div>
                        
                        {isUserMenuOpen && (
                            <div className="hidden md:flex dropdown-menu absolute right-[7rem] mt-11 w-64  border rounded-md shadow-md bg-white">
                                <ul className="py-2 space-y-2 mx-4 mt-2">
                                    <div className="user flex items-center justify-between space-x-2">
                                        <div className="profile w-16 rounded-full"><img src={userImage} alt="" /></div>
                                        <div className="userdetails space-y-1">
                                            <h1>User Name</h1>
                                            <h1>user@gmail.com</h1>
                                        </div>
                                    </div>
                                    <li><a href="/">Settings</a></li>
                                    <li><a href="/">Saved Post</a></li>
                                    <li><a href="/">Membership</a></li>
                                    <li><a href="/">Logout</a></li>
                                </ul>
                            </div>
                        )}

                        <div className="md:hidden humberger mr-2 invert">
                            {!isMobileMenuOpen && (<img onClick={toogleMobileMenuOpen} className='w-6' src={humberger} alt="icon" />)}
                            {isMobileMenuOpen && (<img onClick={toogleMobileMenuOpen} className='w-8' src={closeIcon} alt="icon" />)}
                        </div>

                    </div>
                </nav>

                {isMobileMenuOpen && (
                    <div className="MobileMenu md:hidden
                    fixed top-12 right-0 h-screen w-1/2 bg-transparent transform translate-x-0 transition-transform ease-in-out duration-500"  >
                        
                        {!isAuthenticated && (
                            <div className='flex flex-col items-end space-y-3 pr-9 pt-8 text-xl'>
                                <div onClick={toogleMobileMenuOpen}><Link to="/">Home</Link></div>
                                <div onClick={toogleMobileMenuOpen}><a href="/">About</a></div>
                                <div onClick={toogleMobileMenuOpen}><a href="/">Sign in</a></div>
                            </div>
                        )}
                        {isAuthenticated && (
                            <div className='flex flex-col items-end space-y-3 pr-9 pt-8 text-xl'>
                                <div onClick={toogleMobileMenuOpen}><a href="/">Profile</a></div>
                                <a href="/">
                                    <div className='flex space-x-1'>
                                        <div>Write</div>
                                        <img className='w-5 ' src={writeIcon} alt="write" />
                                    </div>
                                </a>
                                <div onClick={toogleMobileMenuOpen}><a href="/">Saved Post</a></div>
                                <div onClick={toogleMobileMenuOpen}><a href="/">Membership</a></div>
                                <div onClick={toogleMobileMenuOpen}><a href="/">Sign Out</a></div>
                            </div>
                        )}
                    </div>
                )}
            {/* </div> */}
        </div>
    )
}

export default NavBar