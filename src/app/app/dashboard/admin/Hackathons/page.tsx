import React from 'react'
import { Button } from '@/components/ui/button'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoDocumentTextOutline } from 'react-icons/io5'
import TaskCard from '@/app/_components/Home/TaskCard'
import { Upperbar } from '../../user/page'

const page = () => {
  return (
    <div className='p-4'>
        <Upperbar />
        <div className='flex flex-col items-start justify-center gap-2 py-8'>
          <h4>Challenges</h4>
          <p>Join a challenge or a hackathon to gain valuable work experience,</p>
        </div>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <Button className='py-6 bg-umurava/20 text-umurava hover:bg-umurava hover:text-white duration-300 rounded-xl'>
              <IoDocumentTextOutline />
              <span>All Challenge</span>
              <span className='bg-umurava/40 rounded-xl p-1 px-2 text-white'>0</span>
            </Button>
            <Button className='py-6 bg-umurava/20 text-umurava hover:bg-umurava hover:text-white duration-300 rounded-xl'>
              <IoDocumentTextOutline />
              <span>Completed Challenge</span>
              <span className='bg-umurava/40 rounded-xl p-1 px-2 text-white'>0</span>
            </Button>
            <Button className='py-6 bg-umurava/20 text-umurava hover:bg-umurava hover:text-white duration-300 rounded-xl'>
              <IoDocumentTextOutline />
              <span>Open Challenge</span>
              <span className='bg-umurava/40 rounded-xl p-1 px-2 text-white'>0</span>
            </Button>
            <Button className='py-6 bg-umurava/20 text-umurava hover:bg-umurava hover:text-white duration-300 rounded-xl'>
              <IoDocumentTextOutline />
              <span>Ongoing Challenge</span>
              <span className='bg-umurava/40 rounded-xl p-1 px-2 text-white'>0</span>
            </Button>
          </div>
        </div>
        <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
          {
            [`1`, `2`, `3`, `4`, `5`, `6`].map((item, i) => (
              <TaskCard key={i} i={i} />
            ))
          }
        </div>
    </div>
  )
}

export default page