"use client"
import React, { useState } from 'react'

const Contact = () => {
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "", desc: "" });

  const handleOnChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });
      setUserInfo({ name: "", email: "", phone: "", desc: "" });

    } catch (error) {
      console.log(error.message);
    }

  }
  return (
    <section className="w-full h-[90vh] flex justify-center items-center">
      <div className=" rounded border-2 p-8 w-96">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-5">Contact Us</h2>
        <form action="" onSubmit={handleFormSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name" className='font-semibold'>name</label>
            <input type="text" onChange={handleOnChange} value={userInfo.name} required id='name' name="name" placeholder='name' className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className='font-semibold'>email</label>
            <input type="email" onChange={handleOnChange} value={userInfo.email} required id='email' name="email" placeholder='email' className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="phone" className='font-semibold'>phone</label>
            <input type="text" onChange={handleOnChange} value={userInfo.phone} required id='phone' name="phone" placeholder='phone' autoComplete='false' className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative mb-4">
            <label htmlFor="desc" className='font-semibold'>description</label>
            <textarea onChange={handleOnChange} value={userInfo.desc} required id='desc' name='desc' placeholder='description' className="w-full bg-white resize-none h-28 rounded border border-gray-300 focus:border-blue-500 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>
          </div>
          <div className='flex justify-center'>
            <button type='submit' className="bg-blue-300 font-semibold active:bg-blue-300 border-0 w-full py-1 px-8 focus:outline-none hover:bg-blue-200 rounded-xl text-lg">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact