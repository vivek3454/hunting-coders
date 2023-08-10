import Link from 'next/link';
import React from 'react';
import fs from 'fs';

const Blog = async () => {
  const blogs = await getAllBlogs();

  return (
    <>
      <section className='max-w-7xl mx-auto px-5 flex justify-center'>
        <div className='mt-10'>
          {blogs.map((blog, i) => (
            <div key={i} className="mb-5">
              <Link href={`/blogpost/${blog.slug}`}>
                <h3 className='text-xl mb-1 hover:text-gray-700 font-semibold'>{blog.heading}</h3>
              </Link>
              <p className='text-sm'>{blog.metadesc.substr(0, 120)}...</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

const getAllBlogs = async () => {
  let allBlogs = [];
  const filePaths = fs.readdirSync('src/blogdata');
  filePaths.forEach(filePath => {
    let file = fs.readFileSync('src/blogdata/' + filePath, 'utf-8');
    allBlogs.push(JSON.parse(file));
  });
  return allBlogs;
}


export default Blog