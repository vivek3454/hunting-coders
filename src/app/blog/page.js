"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async ()=>{
      const response = await fetch('http://localhost:3000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  },[])
  
  return (
    <>
      <section className='max-w-7xl mx-auto px-5 flex justify-center'>
        <div className='mt-10'>
          {blogs.map((blog, i)=>(
          <div key={i} className="blog mb-5">
            <Link href={`/blogpost/${blog.slug}`}>
            <h3 className='text-xl mb-1 font-semibold'>{blog.title}</h3>
            </Link>
            <p className='text-sm'>{blog.content.substr(0,120)}...</p>
          </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog