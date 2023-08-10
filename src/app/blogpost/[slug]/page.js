import React from 'react';
import fs from 'fs'

const BlogPost = async ({ params }) => {
  const blog = await getSingleBlog(params.slug);
  return (
    <div className='max-w-7xl mx-auto px-5 py-5 mt-10'>
      <h2 className='text-3xl font-semibold text-center mb-5'>{blog.heading}</h2>
      <p className='mb-3'>{blog.introduction}</p>
      <div>
        {blog.content.map((item, index) => (
          <div key={index} className='mb-4'>
            <h3 className='text-lg font-semibold'>{item.title}</h3>
            {item.desc && <p>{item.desc}</p>}
            <ul className='ml-5'>{
              item?.points?.map((point) => (
                <li className='list-disc' key={point}>{point}</li>
              ))
            }</ul>
          </div>
        ))}
      </div>
      {blog.conclusion && <p className='mt-4 font-serif'>{blog.conclusion}</p>}

    </div>
  )
}

export const dynamicParams = true;

export async function generateStaticParams() {
  return [
    { slug: 'how-to-learn-js' },
    { slug: 'how-to-learn-nextjs' },
    { slug: 'how-to-learn-nodejs' },
    { slug: 'how-to-learn-reactjs' }
  ]
}


const getSingleBlog = async (slug) => {
  const file = fs.readFileSync(`src/blogdata/${slug}.json`, 'utf-8');
  const blogData = JSON.parse(file);
  return blogData;
}

export default BlogPost