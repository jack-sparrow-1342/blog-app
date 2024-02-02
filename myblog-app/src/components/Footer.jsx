import React from 'react'
import { Link } from 'react-router-dom';
import instagram_icon from '../assets/icons/instagram.svg'
import facebook_icon from '../assets/icons/facebook.svg'
import twitter_icon from '../assets/icons/twitter.svg'

export default function FooterComponent() {
    return (
        <div>
            <Footer />
        </div>
    )
}

const Footer = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log('Subscribed!');
    };

    return (
        <footer className="bg-[#164863f4] text-white pt-3 w-full pb-3">
            <div className=" mx-auto flex flex-col items-center">

                <div className="mb-4 flex items-center space-x-4 invert">
                    <Link to="/" className="hover:bg-gray-700 p-2 rounded-full">
                        <img src={instagram_icon} alt="Instagram" />
                    </Link>
                    <Link to="/" className="hover:bg-gray-700 p-2 rounded-full">
                        <img src={facebook_icon} alt="Facebook" />
                    </Link>
                    <Link to="/" className="hover:bg-gray-700 p-2 rounded-full">
                        <img src={twitter_icon} alt="Twitter" />
                    </Link>
                </div>

                <form onSubmit={handleSubscribe} className="mb-4">
                    <label htmlFor="email" className="sr-only">Subscribe to our newsletter</label>
                    <div className="flex items-center justify-center">
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none w-52 md:w-[500px]"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>

                {/* Footer Content */}
                <div className="text-center">
                    <p className="text-sm text-white mb-2">Connect with us on social media for updates</p>
                    <p className="text-sm text-white">&copy; 2023 Your Blog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};


