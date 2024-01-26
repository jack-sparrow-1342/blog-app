import React from 'react';
import BlogPost from '../components/BlogPost';
import { blogPosts } from '../api/BlogPostService'
import HeroComponent from '../components/HeroComponent';

function BlogPostList() {

    return (
        <>
            <HeroComponent/>
            <div className='md:mx-20 bg-transparent'>
                <div className="flex flex-wrap">
                    <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <BlogPost post={post} key={post.id}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPostList