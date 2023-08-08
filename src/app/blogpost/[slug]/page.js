import React from 'react';
import fs from 'fs'

const BlogPost = async ({ params }) => {
  function createMarkUp(c){
    return {__html: c}
  }
  const blog = await getSingleBlog(params.slug);
  return (
    <div className='max-w-7xl mx-auto px-5 mt-10'>
      <h2 className='text-3xl font-semibold text-center mb-5'>{blog && blog.title}</h2>
      {blog && <div dangerouslySetInnerHTML={createMarkUp( blog.content)}></div>}
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