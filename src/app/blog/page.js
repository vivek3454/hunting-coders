import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <>
      <section className='max-w-7xl mx-auto px-5 flex justify-center'>
        <div className='mt-10'>
          <div className="blog mb-5">
            <Link href={`/blogpost/learn-javascript`}>
            <h3 className='text-xl mb-1 font-semibold'>How to learn JavaScript in 2023</h3>
            </Link>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit?</p>
          </div>
          <div className="blog mb-5">
            <h3 className='text-xl mb-1 font-semibold'>How to learn JavaScript in 2023</h3>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit?</p>
          </div>
          <div className="blog mb-5">
            <h3 className='text-xl mb-1 font-semibold'>How to learn JavaScript in 2023</h3>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit?</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog