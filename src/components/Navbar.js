import React from 'react';
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='px-5 py-4 flex justify-center items-center bg-blue-300 sticky top-0 z-[9999]'>
            <ul className='flex gap-5 font-semibold text-lg'>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/contact'}>Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar