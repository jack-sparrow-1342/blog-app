import React from 'react';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../api/BlogPostService'

function BlogPostList() {

    return (
        <div className='md:mx-7 bg-transparent'>
            <div className="flex ">
                <div className='flex flex-wrap'>
                    {blogPosts.map((post) => (
                        <BlogPost post={post}  key={post.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogPostList