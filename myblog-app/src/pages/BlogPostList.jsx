import React from 'react';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../api/BlogPostService'

function BlogPostList() {

    return (
        <div className='m-7 bg-transparent'>
            <div className="flex flex-col flex-wrap">
                {blogPosts.map((post) => (
                    <BlogPost post={post}  key={post.id}/>
                ))}
            </div>
        </div>
    )
}

export default BlogPostList