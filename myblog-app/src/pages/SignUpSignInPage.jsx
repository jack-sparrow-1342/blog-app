import React, { useState } from 'react'
import user_icon from "../assets/icons/user.svg";
import email_icon from '../assets/icons/email.svg';
import password_icon from '../assets/icons/password.svg';
import { useAuth } from '../security/AuthContext';

function SignUpSignInPage() {
    const [isSignInPage, setisSignInPage] = useState(true);
    const authContext = useAuth()
    const togglePageStatus = () => {
        setisSignInPage(!isSignInPage)
    }

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Your Form Data ", formData)
        if (isSignInPage) {
            authContext.authenticate(formData);
        } else {

        }
    }

    return (
        <div>
            <div className="container flex flex-col m-auto mb-16 mt-10 bg-[#BCC5CE] w-[400px] md:w-[600px] rounded-lg shadow-2xl">
                <div className="header flex flex-col items-center gap-2 w-[100%] mt-8">
                    <div className="text text-SaintPetersburgDarkBlue text-[1.7rem] md:text-4xl font-bold mt-1 md:mt-2">{isSignInPage ? "Please Login To Continue" : "Create an Account"}</div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>

                        <div className="submission flex justify-center mx-auto mt-8 gap-7">
                            <div
                                className={`submit flex items-center justify-center text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-44 rounded-full font-semibold md:font-bold cursor-pointer ${isSignInPage ? 'bg-[#797979]' : 'bg-SaintPetersburgDarkBlue'}`}
                                onClick={togglePageStatus}>SignUp</div>
                            <div
                                className={`submit flex items-center justify-center text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-44 rounded-full font-semibold md:font-bold cursor-pointer ${!isSignInPage ? 'bg-[#797979]' : 'bg-SaintPetersburgDarkBlue'}`}
                                onClick={togglePageStatus}>SignIn</div>
                        </div>

                        <div className="inputs mt-8 flex flex-col gap-6">
                            {!isSignInPage && (
                                <div className="input flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
                                    <img src={user_icon} alt="UserIcon" className="mx-8" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your Name"
                                        className="h-14 w-[250px] md:w-[370px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                    />
                                </div>
                            )}
                            <div className="input flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
                                <img src={email_icon} alt="EmailIcon" className="mx-8" />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email ID"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="h-14 w-[250px] md:w-[370px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>
                            <div className="input flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
                                <img src={password_icon} alt="PasswordIcon" className="mx-8" />
                                <input
                                    type="password"
                                    id="password"
                                    name='password'
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="h-14 w-[250px] md:w-[370px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>
                        </div>
                        {isSignInPage && (
                            <div className="forgotPassword pl-7 md:pl-[66px] mt-3 text-[#797979] text-lg">
                                Forgot Password?
                                <span className="cursor-pointer text-[#025091] font-semibold">
                                    {" "}
                                    Click here!
                                </span>
                            </div>
                        )}
                        <div className="btn flex justify-center mt-8">
                            <button className="bg-SaintPetersburgDarkBlue text-white text-xl h-12  w-72 md:w-80 mb-8 rounded-full font-bold cursor-pointer" type='submit' >{isSignInPage ? "SignIn" : "SignUp"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SignUpSignInPage