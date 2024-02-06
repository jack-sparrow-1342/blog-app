import React, { useState } from 'react'
import user_icon from "../assets/icons/user.svg";
import email_icon from '../assets/icons/email.svg';
import password_icon from '../assets/icons/password.svg';
import { useAuth } from '../security/AuthContext';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/BlogPostApiService';

function SignUpSignIn() {
    const [isSignIn, setisSignIn] = useState(true);
    const [showErrorMessage, setshowErrorMessage] = useState(false)
    const authContext = useAuth()
    const navigate = useNavigate()
    
    const togglePageStatus = () => {
        setisSignIn(!isSignIn)
        if(showErrorMessage) setshowErrorMessage(false)
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

    async function handleSubmit(e){
        e.preventDefault();
        if (isSignIn) {
            if(await authContext.authenticate(formData)){
                navigate("/")
            }else{
                setshowErrorMessage(true)
            }
        } else {

            register(formData.fullName, formData.email, formData.password)

            // try {
            //     const response = register(formData.name, formData.email, formData.password)
            //     if (response.status === 201) {
            //         console.log(response);
            //     } else {
            //         setshowErrorMessage(true)
            //         console.log(response);
            //     }
            // }catch(error) {
            //     console.log(error);
            //     setshowErrorMessage(true)
            // }
        }
    }

    return (
        <div>
            <div className="container flex flex-col justify-center m-auto mt-20 mb-20 bg-white w-[400px] md:w-[600px] rounded-lg shadow-2xl">
                <div className="header flex flex-col items-center gap-2 w-[100%] mt-8">
                    <div className="text text-[#1b5a7c] text-[1.7rem] md:text-4xl font-bold mt-1 md:mt-2">{isSignIn ? "Please Login To Continue" : "Create an Account"}</div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>

                        <div className="submission flex justify-center mx-auto mt-8 gap-7">
                            <div
                                className={`submit flex items-center justify-center text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-44 rounded-full font-semibold md:font-bold cursor-pointer ${isSignIn ? 'bg-[#797979]' : 'bg-[#1b5a7c]'}`}
                                onClick={togglePageStatus}>Sign Up</div>
                            <div
                                className={`submit flex items-center justify-center text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-44 rounded-full font-semibold md:font-bold cursor-pointer ${!isSignIn ? 'bg-[#797979]' : 'bg-[#1b5a7c]'}`}
                                onClick={togglePageStatus}>Sign In</div>
                        </div>

                        <div className="inputs mt-8 flex flex-col gap-6">
                        {showErrorMessage && <div className='mt-2 text-center text-red-600'>Invalid Credentials Please Check!</div>}
                            {!isSignIn && (
                                <div className="input border border-black flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
                                    <img src={user_icon} alt="UserIcon" className="mx-8" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="h-14 w-[250px] md:w-[370px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                    />
                                </div>
                            )}
                            <div className="input border border-black flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
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
                            <div className="input border border-black flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
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
                        {isSignIn && (
                            <div className="forgotPassword pl-7 md:pl-[66px] mt-3 text-[#797979] text-lg">
                                Forgot Password?
                                <span className="cursor-pointer text-[#025091] font-semibold">
                                    {" "}
                                    Click here!
                                </span>
                            </div>
                        )}
                        <div className="btn flex justify-center mt-8">
                            <button className="bg-[#1b5a7c] hover:bg-[#376d8b] text-white text-xl h-12  w-72 md:w-80 mb-8 rounded-full font-bold cursor-pointer" type='submit' >{isSignIn ? "Sign In" : "Sign Up"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default SignUpSignIn