import Link from 'next/link';
import React from 'react';

const Blog = async () => {
  const blogs = await getAllBlogs();

  return (
    <>
      <section className='max-w-7xl mx-auto px-5 flex justify-center'>
        <div className='mt-10'>
          {blogs.map((blog, i) => (
            <div key={i} className="blog mb-5">
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className='text-xl mb-1 font-semibold'>{blog.title}</h3>
              </Link>
              <p className='text-sm'>{blog.content.substr(0, 120)}...</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

const getAllBlogs = async () => {
  const response = await fetch('http://localhost:3000/api/blogs', {cache: 'force-cache'});
  const data = await response.json();
  return data;
}


export default Blog