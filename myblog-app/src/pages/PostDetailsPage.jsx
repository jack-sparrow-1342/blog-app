import React from 'react'
import image from '../assets/images/logo512.png';
import { useParams } from 'react-router-dom';
import { findPostById } from '../api/BlogPosts';


function PostDetailsPage() {

  const {id} = useParams()

  const currentBlog = findPostById(parseInt(id));


  return (
    <>
   <div className="mt-1 md:mx-[250px] mx-4 pb-16">
      <header className=" text-white py-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-semibold text-black">{currentBlog.title}</h1>

          {/* <p className="mt-2 text-black">{currentBlog.description}</p> */}

          <div className="mt-4 flex items-center">
            <img src={image} alt={currentBlog.author.name} className="h-8 rounded-full" />
            <div><p className="text-gray-300">{currentBlog.author.name}</p>
              <p className="text-gray-500">{currentBlog.id} | {currentBlog.date}</p></div>
          </div>

        </div>
      </header>

      <main className="mx-auto">
        <div className=" rounded-lg">
          <img src={image} alt={currentBlog.title} className="mb-4 rounded-lg max-h-[250px] max-w-[250px]" />
          <p className="text-gray-800 text-justify font-semibold text-lg mb-2">{currentBlog.description}</p>
          <p className="text-gray-800 text-justify">{currentBlog.paragraph}</p>
        </div>
      </main>
    </div>
    </>
  );

}

export default PostDetailsPage