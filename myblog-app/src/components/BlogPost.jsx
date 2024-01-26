import React from 'react'
import img from '../assets/images/sample-image.jpg'
import like from '../assets/icons/like.svg';
import comment from '../assets/icons/comment.svg';
import { Link } from 'react-router-dom'

function BlogPost({ post }) {
    return (
            <div className="bg-LightGray my-4 mx-4 max-h-auto p-4 shadow-lg rounded-lg">
                <Link to={`/post/${post.id}`}>
                    <div className="image bg-center">
                        <img src={img} alt="BlogImage" className='bg-repeat-round mb-2 w-full h-52 rounded-md'/>
                    </div>
                </Link>
                <div className="overflow-hidden overflow-ellipsis">
                    <Link to={`/post/${post.id}`}><h1 className='font-bold text-xl'>{post.title}</h1></Link>
                    <h4 className='font-medium text-lg'>{post.description}</h4>
                    <p className='h-36'>{post.paragraph}</p>
                </div>
                <div>
                    <span className='btn bg-stone-700 hover:bg-stone-500 flex justify-center w-28 h-10 rounded-lg mt-2'>
                        <button className='font-bold text-white'>Read more</button>
                    </span>
                    {/* <span className='flex h-10 space-x-2'>
                        <img src={like} alt="Like" />
                        <img src={comment} alt="Comment" />
                    </span> */}
                </div>
            </div>
    )
}

export default BlogPost