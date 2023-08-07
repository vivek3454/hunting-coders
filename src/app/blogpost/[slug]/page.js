import React from 'react';

const BlogPost = async ({params}) => {
  const blog = await getSingleBlog(params.slug);
  return (
    <div className='max-w-7xl mx-auto px-5 mt-10'>
      <h2 className='text-3xl font-semibold text-center mb-5'>{blog && blog.title}</h2>
      <div>
        {blog && blog.content}
      </div>
    </div>
  )
}


const getSingleBlog = async (slug) => {
  const response = await fetch(`http://localhost:3000/api/getblog/${slug}`);
  const {blogData} = await response.json();
  return blogData;
}

export default BlogPost