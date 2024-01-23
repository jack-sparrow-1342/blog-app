import {React, useState} from 'react'
import user_icon from '../icons/user.svg'
import email_icon from '../icons/email.svg'
import password_icon from '../icons/password.svg'

function LoginSignup() {

  const [action, setAction] = useState('Sign Up')

  return (
    <div className='container flex flex-col m-auto mt-52 bg-white w-[370px] md:w-[600px] rounded-lg'>
      <div className="header flex flex-col items-center gap-2 w-[100%] mt-7">
        <div className='text text-[#025091] text-3xl font-bold'>{action}</div>
        {/* <div className="underline w-14 h-1 bg-[#025091] rounded-lg"></div> */}
      </div>

      <div className="inputs mt-6 flex flex-col gap-6">
        {action === 'Login'? <div></div> : <div className="input flex items-center m-auto w-[300px] md:w-[400px] h-[70px] bg-[#eaeaea] rounded-md">
          <img src={user_icon} alt="UserIcon" className='mx-8'/>
          <input type="text" placeholder='Name' className='h-14 w-[300px] bg-transparent border-none outline-none text-[#797979] text-lg'/>
        </div>}        
      
        <div className="input flex items-center m-auto w-[300px] md:w-[400px] h-[70px] bg-[#eaeaea] rounded-md">
          <img src={email_icon} alt="EmailIcon" className='mx-8'/>
          <input type="email" placeholder='Email ID' className='h-14 w-[300px] bg-transparent border-none outline-none text-[#797979] text-lg'/>
        </div>
      
        <div className="input flex items-center m-auto w-[300px] md:w-[400px] h-[70px] bg-[#eaeaea] rounded-md">
          <img src={password_icon} alt="PasswordIcon" className='mx-8'/>
          <input type="password" placeholder='Password' className='h-14 w-[300px] bg-transparent border-none outline-none text-[#797979] text-lg'/>
        </div>

      </div>

      {action === "Sign Up"? <div></div> : <div className="forgotPassword pl-[100px] mt-5 text-[#797979] text-lg">Forgot Password?<span className='cursor-pointer text-[#025091] font-semibold'> Click here!</span></div>}

      <div className="submission flex mx-auto my-8 gap-7">
        <div className={action === "Login" ? "submit flex items-center justify-center bg-[#4d4d4d] text-white text-lg h-12 w-44 rounded-full font-bold cursor-pointer" : "submit flex items-center justify-center bg-[#025091] text-white text-lg h-12 w-44 rounded-full font-bold cursor-pointer"} onClick={() => {setAction('Sign Up')}}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit flex items-center justify-center bg-[#4d4d4d] text-white text-lg h-12 w-44 rounded-full font-bold cursor-pointer" : "submit flex items-center justify-center bg-[#025091] text-white text-lg h-12 w-44 rounded-full font-bold cursor-pointer"} onClick={() => {setAction('Login')}}>Login</div>
      </div>

    </div>
  )
}

export default LoginSignup