import React from 'react'
// import user_icon from '../assets/icons/user.svg';
// import email_icon from '../assets/icons/email.svg';
// import password_icon from '../assets/icons/password.svg';
// import mobile_icon from '../assets/icons/mobile.svg';
// import date_icon from '../assets/icons/date.svg';
// import gender_icon from '../assets/icons/gender.svg';
import facebook_icon from '../assets/icons/facebook.svg'
import instagram_icon from '../assets/icons/instagram.svg'
import linkedin_icon from '../assets/icons/linkedin.svg'

function ProfilePage() {
  return (
    <div>
        <div className="container flex flex-col justify-center m-auto mt-16 bg-white w-[400px] md:w-[900px] rounded-lg">
            <header className="header flex flex-col items-center gap-2 w-[100%] mt-4 mb-4">
                <h1 className='text text-[#1b5a7c] text-[1.7rem] md:text-4xl font-bold mt-2'>Profile</h1>
            </header>
            <form>
                <section className="section flex flex-col items-center bg-white mx-4 rounded-sm shadow-xl pb-4">
                    <h2 className='text text-[#1b5a7c] text-[1.2rem] md:text-2xl font-bold mt-2'>Personal Details</h2>
                    <div className="container flex flex-col items-center p-4 w-[350px]
                    md:w-[720px] rounded-xl">

                        <div className="inputs flex flex-col gap-4">
                            {/* <div className=''>
                                <input type="file" />
                                <label htmlFor="file">Upload profile picture</label>
                            </div> */}

                            <div className="input border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                {/* <img src={user_icon} alt="User" className='mx-6'/> */}
                                <label htmlFor="name" className='mx-2 font-semibold'>Name</label><br />
                                <input
                                    type="text"
                                    name='name'
                                    id='name'
                                    // value={formData.fullName}
                                    // onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className="h-10 mx-2 w-[260px] md:w-[600px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>

                            {/* <div className="input border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                <label htmlFor="bio" className='mx-4 font-semibold'>Bio</label><br />
                                <div className='col-span-10'><textarea name="bio" id="bio" placeholder='Add a bio' cols='25' className=""></textarea></div>
                            </div> */}

                            <div className="input border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                <label htmlFor="gender" className='mx-2 font-semibold'>Gender</label><br />
                                {/* <img src={gender_icon} alt="Gender" className='mx-6'/> */}
                                <select id="gender" name='gender' className="h-10 mx-2 w-[260px] md:w-[600px] bg-transparent border-none outline-none text-[#555555] text-lg">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="input border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                <label htmlFor="dob" className='mx-2 font-semibold'>Date of birth</label><br />
                                {/* <img src={date_icon} alt="Date of birth" className='mx-6'/> */}
                                <input
                                    type="date"
                                    name='dob'
                                    id="dob"
                                    // value={formData.fullName}
                                    // onChange={handleInputChange}
                                    placeholder="Date of birth"
                                    className="h-10 mx-2 w-[260px] md:w-[600px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>

                            <div className="input border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                <label htmlFor="email" className='mx-2 font-semibold'>Email</label><br />
                                {/* <img src={email_icon} alt="Email" className='mx-6'/> */}
                                <input
                                    type="email"
                                    name='email'
                                    id='email'
                                    // value={formData.fullName}
                                    // onChange={handleInputChange}
                                    placeholder="Enter your email id"
                                    className="h-10 mx-2 w-[260px] md:w-[600px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>

                            <div className="input border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                <label htmlFor="mobile" className='mx-2 font-semibold'>Mobile</label><br />
                                {/* <img src={mobile_icon} alt="Phone number" className='mx-6'/> */}
                                <input
                                    type="tel"
                                    name='mobile'
                                    id="mobile"
                                    maxLength={10}
                                    // value={formData.fullName}
                                    // onChange={handleInputChange}
                                    placeholder="Enter your mobile number"
                                    className="h-10 mx-2 w-[260px] md:w-[600px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>

                            <div className="input border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                <label htmlFor="password" className='mx-2 font-semibold'>Password</label><br />
                                {/* <img src={password_icon} alt="Password" className='mx-6'/> */}
                                <input
                                    type="password"
                                    name='password'
                                    id="password"
                                    // value={formData.fullName}
                                    // onChange={handleInputChange}
                                    placeholder="Enter password"
                                    className="h-10 mx-2 w-[260px] md:w-[600px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section flex flex-col items-center mx-4 my-6 bg-white rounded-lg shadow-xl pb-4">
                    <h2 className='text text-[#1b5a7c] text-[1.2rem] md:text-2xl font-bold mt-4 md:mt-4'>Connections</h2>
                    <div className="container flex flex-col items-center p-4 w-[350px]
                    md:w-[720px] rounded-xl">
                        <div className="inputs flex flex-col gap-4">
                            <div className="input flex items-center border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                {/* <label htmlFor="facebook">Facebook</label><br /> */}
                                <img src={facebook_icon} alt="Facebook" className='mx-3'/>
                                <input
                                    type="url" 
                                    name="facebook" 
                                    id="facebook"
                                    // value={formData.fullName}
                                    // onChange={handleInputChange}
                                    placeholder='Profile link'
                                    className="h-10 mx-2 w-[215px] md:w-[550px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>

                            <div className="input flex items-center border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                {/* <label htmlFor="instagram">Instagram</label><br /> */}
                                <img src={instagram_icon} alt="Instagram" className='mx-3'/>
                                <input
                                    type="url" 
                                    name="instagram" 
                                    id="instagram"
                                    // value={formData.fullName}
                                    // onChange={handleInputChange}
                                    placeholder='Profile link'
                                    className="h-10 mx-2 w-[215px] md:w-[550px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>

                            <div className="input flex items-center border border-black p-2 m-auto w-[300px] md:w-[650px] h-[80px] bg-[#eaeaea] rounded-md">
                                {/* <label htmlFor="linkedin">Linked IN</label><br /> */}
                                <img src={linkedin_icon} alt="LinkedIN" className='mx-3'/>
                                <input
                                    type="url" 
                                    name="linkedin" 
                                    id="linkedin"
                                    // value={formData.fullName}
                                    // onChange={handleInputChange}
                                    placeholder='Profile link'
                                    className="h-10 mx-2 w-[215px] md:w-[550px] bg-transparent border-none outline-none text-[#555555] text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="submission flex justify-center mx-auto mt-8 mb-8 gap-7">
                    <div
                        className='submit flex items-center justify-center text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-56 rounded-full font-semibold md:font-bold cursor-pointer bg-[#1b5a7c]'>Save
                    </div>
                    <div
                        className='submit flex items-center justify-center text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-56 rounded-full font-semibold md:font-bold cursor-pointer bg-[#1b5a7c]'>Discard
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ProfilePage