import React, { useState } from 'react';
import humberger from "../assets/icons/humberger.svg";
import search from "../assets/icons/search.svg";
import closeIcon from "../assets/icons/close-svgrepo-com.svg";
import writeIcon from "../assets/icons/write-svgrepo-com.svg";
import userImage from "../assets/images/logo512.png"
import '../App.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';

function NavBar() {

    const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
    const [isUserMenuOpen, setisUserMenuOpen] = useState(false)

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated

    const toogleMobileMenuOpen = () => {
        setisMobileMenuOpen(!isMobileMenuOpen)
    }
    const logout = () => {
        authContext.logout()
        if(isUserMenuOpen) setisUserMenuOpen(!isUserMenuOpen)
        if(isMobileMenuOpen) setisMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <div className="NavBar bg-[#164863] items-center fixed w-full z-50">
            {/* <div className="fixed z-20"> */}
            <nav className='flex justify-between items-center mx-4 h-16 md:mx-24'>
                <div className="nav-left">
                    <Link to="/"><h1 className='text-white font-bold text-2xl cursor-pointer'>BLOGSTER</h1></Link>
                </div>

                <div className="nav-right flex">

                    <div className="hidden search md:flex border border-[#427d9d] px-2 rounded-lg mr-16">
                        <input className='outline-none py-2 px-2 bg-transparent w-[20rem] text-white' placeholder='Search...' type="text" />
                        <button><img src={search} alt="" className='rotate-90 invert' /></button>
                    </div>

                    <div className="hidden md:flex   items-center">
                        {isAuthenticated && (
                            <div className='flex space-x-16 mr-16 text-xl font-bold'>
                                <div className='text-white hover:underline'><Link to="/">Home</Link></div>
                                <div className='text-white hover:underline'><Link to="/">About</Link></div>
                                <Link to="/" className='text-white hover:underline'>
                                    <div className='flex space-x-1'>
                                        <div>Write</div>
                                        <img className='w-5 invert' src={writeIcon} alt="write" />
                                    </div>
                                </Link>
                            </div>
                        )}
                        {isAuthenticated && <div onClick={() => setisUserMenuOpen(!isUserMenuOpen)} className='border rounded-full cursor-pointer'><img className='p-1 w-10 rounded-full' src={userImage} alt="UserIcon" /></div>}
                        {!isAuthenticated && <Link to="/signup-signin"><button className="py-2 px-6 rounded-lg bg-[#427d9d] text-white font-bold hover:bg-[#376d8b]">Sign in</button></Link>}
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
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/">Settings</Link></li>
                                <li><Link to="/">Saved Post</Link></li>
                                <li><Link to="/">Membership</Link></li>
                                <li><Link to="/" onClick={logout}>Logout</Link></li>
                            </ul>
                        </div>
                    )}

                    <div className="md:hidden humberger mr-2 invert">
                        {!isMobileMenuOpen && (<img onClick={toogleMobileMenuOpen} className='w-6' src={humberger} alt="icon" />)}
                    </div>

                </div>
            </nav>

            {isMobileMenuOpen && (
                <div className={`MobileMenu md:hidden 
                    fixed top-0 right-0 h-screen w-[60%] bg-white transform slide-in  transition-transform ease-in-out duration-1000 shadow-xl`}  >

                    <div className="md:hidden humberger flex flex-col items-end mr-5 mt-4">
                        {isMobileMenuOpen && (<img onClick={toogleMobileMenuOpen} className='w-8' src={closeIcon} alt="icon" />)}
                    </div>

                    {!isAuthenticated && (
                        <div className='flex flex-col items-end space-y-3 pr-8 pt-8 text-xl'>
                            <div onClick={toogleMobileMenuOpen}><Link to="/">Home</Link></div>
                            <div onClick={toogleMobileMenuOpen}><Link to="/">About</Link></div>
                        </div>
                    )}
                    {isAuthenticated && (
                        <div className='flex flex-col items-end space-y-3 pr-9 pt-8 text-xl'>
                            <div onClick={toogleMobileMenuOpen}><Link to="/profile">Profile</Link></div>
                            <Link to="/">
                                <div className='flex space-x-1'>
                                    <div>Write</div>
                                    <img className='w-5 ' src={writeIcon} alt="write" />
                                </div>
                            </Link>
                            <div onClick={toogleMobileMenuOpen}><Link to="/">Saved Post</Link></div>
                            <div onClick={toogleMobileMenuOpen}><Link to="/">Membership</Link></div>
                        </div>
                    )}
                    {!isAuthenticated && (
                        <div className='p-5 absolute w-full bottom-[10%]'>
                            <Link to="/login-signup" onClick={toogleMobileMenuOpen} ><button className="bg-gray-500 mb-2 text-white text-xl h-12 rounded-lg  w-full  font-bold" type='submit' >Login</button></Link>
                            <Link to="/" ><button onClick={toogleMobileMenuOpen}  className="bg-[#1b5a7c]  text-white text-xl h-12 rounded-lg  w-full  font-bold" type='submit' >Sign Up</button></Link>
                        </div>
                    )}
                    {isAuthenticated && (
                        <div className='p-5 absolute w-full bottom-[5%]'>
                            <button onClick={logout} className="bg-gray-500 mb-2 text-white text-xl h-12 rounded-lg  w-full  font-bold" type='submit' >Logout</button>
                        </div>
                    )}
                </div>
            )}
            {/* </div> */}
        </div>
    )
}

export default NavBar