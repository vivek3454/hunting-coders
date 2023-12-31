import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto px-5'>
      <div className="relative pt-10 min-h-[80vh] bg-white text-black justify-center flex flex-col place-items-center">
        {/* <Image src="/code.jpg" width={237} height={158} className='rounded-lg' alt="" /> */}
        <img src="/code.jpg" width={237} height={158} className='rounded-lg' alt="hunting coders" />
        <h1 className='text-4xl mt-6 font-semibold max-[405px]:text-4xl'>&lt;HuntingCoder /&gt;</h1>
        <p className='mt-5 text-gray-600 text-lg mb-10'>A blog for hunting Coders by a hunting Coder</p>
        <div className="blogs flex flex-col items-center">
          <div>
            <h2 className='text-2xl font-semibold mb-5'>Latest Blogs</h2>
            <div className="blog mb-5">
              <h3 className='text-xl mb-1 font-semibold'>How to learn JavaScript in 2023</h3>
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
        </div>
      </div>
    </main>
  )
}