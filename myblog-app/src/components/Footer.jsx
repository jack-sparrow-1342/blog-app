import React from 'react'
import instagram_icon from '../assets/icons/instagram.svg'
import facebook_icon from '../assets/icons/facebook.svg'
import twitter_icon from '../assets/icons/twitter.svg'
import emailFooter_icon from '../assets/icons/emailFooter.svg'

function Footer() {
  return (
    <div className="footer-container flex justify-between p-4">
      <div className="company space-y-1">
        <h1 className="text-SaintPetersburgDarkBlue font-bold">Company</h1>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">About</p>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">Jobs</p>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">For the record</p>
      </div>
                    
      <div className="communities space-y-1">
        <h1 className="text-SaintPetersburgDarkBlue font-bold">Communities</h1>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">For Artists</p>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">Developers</p>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">Advertising</p>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">Investors</p>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">Vendors</p>
      </div>
      
      <div className="useful-links space-y-1">
        <h1 className="text-SaintPetersburgDarkBlue font-bold">Useful links</h1>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">Support</p>
        <p className="font-semibold text-DarkGray hover:underline underline-offset-1 cursor-pointer hover:text-LightGray">Free Mobile App</p>
      </div>

      <div className="footer-email flex flex-col w-[250px] space-y-2">
      <h1 className="text-SaintPetersburgDarkBlue font-bold">Send an email</h1>
        <div className="input flex bg-LightGray rounded-md w-[160px] md:w-[240px] space-y-1">
          <img src={emailFooter_icon} alt="EmailIcon" className="ml-1 mr-4 text-DarkGray" />
          <input
            type="email"
            placeholder="Email ID"
            className="h-8 flex items-center w-[140px] md:w-[190px] bg-transparent border-none outline-none text-[#555555] text-base"
          />
        </div>
        <button className="bg-SaintPetersburgDarkBlue text-white text-sm h-6 w-20 rounded-full cursor-pointer">Submit</button>
        <div className="social">
          <div className="flex space-x-3">
            <div className="bg-DarkGray invert p-3 rounded-full"><img src={instagram_icon} alt="Instagram"/></div>
            <div className="bg-DarkGray invert p-3 rounded-full"><img src={facebook_icon} alt="Twitter"/></div>
            <div className="bg-DarkGray invert p-3 rounded-full"><img src={twitter_icon} alt="Facebook"/></div>
          </div>
        </div>
      </div>
                    
      
    </div>
  )
}
