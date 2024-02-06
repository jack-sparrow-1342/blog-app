import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';
import HeroComponent from '../components/HeroComponent';
import { blogPosts } from '../api/BlogPosts';
import { retiveAllPosts } from '../api/BlogPostApiService';

function BlogPostList() {

    // const [posts, setposts] = useState([])

    // retiveAllPosts()
    //     .then(response => setposts(response.data))
    //     .catch(error => console.log(error))
    //     .finally(console.log("Cleaning Up", posts))

return (
        <>
            <HeroComponent />
            <div className='md:mx-20 bg-transparent'>
                <div className="flex flex-wrap">
                    <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <BlogPost post={post} key={post.id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPostList