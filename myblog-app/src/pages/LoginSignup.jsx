import { React, useState } from "react";
import user_icon from "../assets/icons/user.svg";
import email_icon from '../assets/icons/email.svg';
import password_icon from '../assets/icons/password.svg';

function SignInSignup() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container flex flex-col m-auto mt-16 bg-white w-[400px] md:w-[600px] rounded-lg shadow-2xl">
      <div className="header flex flex-col items-center gap-2 w-[100%] mt-8">
        <div className="text text-SaintPetersburgDarkBlue text-[1.7rem] md:text-4xl font-bold mt-1 md:mt-2">Please Login To Continue</div>
        {/* <div className="underline w-14 h-1 bg-[#025091] rounded-lg"></div> */}
      </div>

      <div>
        <div className="submission flex justify-center mx-auto mt-8 gap-7">
          <div
            className={
              action === "Sign In"
                ? "submit flex items-center justify-center bg-[#797979] text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-44 rounded-full font-semibold md:font-bold cursor-pointer"
                : "submit flex items-center justify-center bg-SaintPetersburgDarkBlue text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-44 rounded-full font-semibold md:font-bold cursor-pointer"
            }
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>

          <div
            className={
              action === "Sign Up"
                ? "submit flex items-center justify-center bg-[#797979] text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-44 rounded-full font-semibold md:font-bold cursor-pointer"
                : "submit flex items-center justify-center bg-[#025091] text-white text-base md:text-lg h-10 w-36 md:h-12 md:w-44 rounded-full font-semibold md:font-bold cursor-pointer"
            }
            onClick={() => {
              setAction("Sign In");
            }}
          >
            Sign In
          </div>
        </div>

        <div className="inputs mt-8 flex flex-col gap-6">
          {action === "Sign In" ? (
            <div></div>
          ) : (
            <div className="input flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
              <img src={user_icon} alt="UserIcon" className="mx-8" />
              <input
                type="text"
                placeholder="Name"
                className="h-14 w-[250px] md:w-[370px] bg-transparent border-none outline-none text-[#555555] text-lg"
              />
            </div>
          )}

          <div className="input flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
            <img src={email_icon} alt="EmailIcon" className="mx-8" />
            <input
              type="email"
              placeholder="Email ID"
              className="h-14 w-[250px] md:w-[370px] bg-transparent border-none outline-none text-[#555555] text-lg"
            />
          </div>

          <div className="input flex items-center m-auto w-[350px] md:w-[470px] h-[70px] bg-[#eaeaea] rounded-md">
            <img src={password_icon} alt="PasswordIcon" className="mx-8" />
            <input
              type="password"
              placeholder="Password"
              className="h-14 w-[250px] md:w-[370px] bg-transparent border-none outline-none text-[#555555] text-lg"
            />
          </div>
        </div>

        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgotPassword pl-7 md:pl-[100px] mt-3 text-[#797979] text-lg">
            Forgot Password?
            <span className="cursor-pointer text-[#025091] font-semibold">
              {" "}
              Click here!
            </span>
          </div>
        )}

        <div className="btn flex justify-center mt-8">
          {action === "Sign In"? <div></div> : <button className="bg-[#025091] text-white text-xl h-12 w-72 md:w-80 mb-8 rounded-full font-bold cursor-pointer">Sign Up</button>}
          {action === "Sign Up"? <div></div> : <button className="bg-[#025091] text-white text-xl h-12 w-72 md:w-80 mb-8 rounded-full font-bold cursor-pointer">Sign In</button>}        
        </div>
      </div>

    </div>
  );
}

export default SignInSignup;
