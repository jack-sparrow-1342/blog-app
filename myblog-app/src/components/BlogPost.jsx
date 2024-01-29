import React from 'react'
import img from '../assets/images/sample-image.jpg'
import profile from '../assets/images/logo512.png';
import { Link } from 'react-router-dom'

function BlogPost({ post }) {
    return (
            <div className="bg-white my-6 mx-4 max-h-auto p-4 shadow-lg rounded-lg">
                <Link to={`/post/${post.id}`}>
                    <div className="image bg-center">
                        <img src={img} alt="BlogImage" className='bg-repeat-round mb-2 w-full h-56 rounded-md'/>
                    </div>
                </Link>
                <div className="text-ellipsis overflow-hidden">
                    <Link to={`/post/${post.id}`}><h1 className='font-bold text-xl text-[#313131]'>{post.title}</h1></Link>
                    <h4 className='font-medium text-lg text-[#313131]'>{post.description}</h4>
                    <p className='h-36 text-[#313131]'>{post.paragraph}</p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={profile} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                        <div><p className="text-[#313131]">John Doe</p>
                        <p className="text-gray-500">22 Jan 2024</p></div>
                    </div>
                    
                    <div>
                        <div className='btn bg-[#1b5a7c] flex justify-center items-center w-28 h-10 rounded-lg mt-auto'>
                            <button className='font-medium text-white'>Category</button>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default BlogPost