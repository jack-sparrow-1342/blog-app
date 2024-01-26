import React from 'react';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../api/BlogPostService'

function BlogPostList() {

    return (
        <div className='mx-80 bg-transparent'>
            <div className=" ">
                {blogPosts.map((post) => (
                    <BlogPost post={post}  key={post.id}/>
                ))}
            </div>
        </div>
    )
}

export default BlogPostList