import React from 'react'
import img from '../assets/images/logo512.png'
import { Link } from 'react-router-dom'

function BlogPost({ post }) {
    return (
        <div className='flex mx-5 bg-white my-4 h-[12rem] shadow-lg rounded-lg' >
            <Link to={`/post/${post.id}`}>
                <div className="image ">
                    <img className='max-h-[12rem] max-w-[12rem]' src={img} alt="img" />
                </div>
            </Link>
            <div className='flex flex-col mx-5 space-y-1 p-2'>
                <Link to={`/post/${post.id}`}><h1 className='h-[3.2rem] overflow-hidden text-xl font-bold'>{post.title}</h1></Link>
                <p className='h-[6rem] overflow-hidden'>{post.description}</p>
                <div className='space-x-4'>
                    <a className='text-sm italic' href="/">{post.author.name}</a>
                    <a className='text-sm italic' href="/">{post.date}</a>
                </div>
            </div>
        </div>
    )
}

export default BlogPost