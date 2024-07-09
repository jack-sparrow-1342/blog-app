import React from 'react'
import img from '../assets/images/sample-image.jpg'
import profile from '../assets/images/logo512.png';
import { Link } from 'react-router-dom'

function BlogPost({ post }) {
    
    return (
            <div className="bg-white my-6 mx-4 max-h-auto p-4 shadow-lg rounded-lg">
                <Link to={`/post/${post._id}`}>
                    <div className="image bg-center">
                        <img src={img} alt="BlogImage" className='bg-repeat-round mb-2 w-full h-56 rounded-md'/>
                    </div>
                </Link>
                <div className="text-ellipsis overflow-hidden">
                    <Link to={`/post/${post.id}`}><h1 className='font-bold text-xl text-[rgb(49,49,49)]'>{post.topic}</h1></Link>
                    <h4 className='font-medium text-lg text-[#313131]'>{post.content}</h4>
                    {post?.tags.map(tag => (
                        <p className='text-[#313131]'>#{tag}</p>
                    ))}
                </div>
                <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={profile} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                        <div><p className="text-[#313131]">{post.username}</p>
                        <p className="text-gray-500">22 Jan 2024</p></div>
                    </div>
                    
                    <div>
                        <div className='btn border border-solid border-LightGray flex justify-center items-center w-28 h-10 rounded-lg mt-auto'>
                            <button className='font-medium text-[#313131]'>Category</button>
                        </div>
                    </div>
                </div>
                
            </div>
    )
}

export default BlogPost