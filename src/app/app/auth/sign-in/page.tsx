import React from 'react'

const page = () => {
  return (
    <form className='min-h-screen flex items-center justify-center flex-col'>
      <div className='grid grid-cols-2 p-4'>
        <h1 className="text-3xl font-bold text-center border-b-2 border-black">Sign in</h1>
        <h1 className="text-3xl font-bold text-center">Create account</h1>
      </div>
      <div>
        <label htmlFor="email"></label>
        <input
          type='text'
          id='email'
          placeholder='Email'
          className='w-full p-4 border-b-2 border-black'
        />
      </div>
    </form>
  )
}

export default page