"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoDocumentTextOutline } from 'react-icons/io5'
import TaskCard from '@/app/_components/Home/TaskCard'
import { Upperbar } from '../page'
import Link from 'next/link'
import { FilterIcon, Plus, Search } from 'lucide-react'
import Breadcrumbs from '@/app/_components/Dashboard/Breadcrumbs'
import { Input } from '@/components/ui/input'
import { usePathname } from 'next/navigation'

const page = () => {
  const router = usePathname()
  const user = "admin"
  return (
    <div className='p-4'>
      <Upperbar />
      <div className="p-6 flex flex-row justify-between items-center">
        <Breadcrumbs pathname={router.toString()} />
        <div className="flex flex-row items-center w-fit">
          <div className="flex flex-row gap-4">
            <label className="relative w-32">
              <Input type="text" placeholder="search" className=" p-4" />
              <Search className="absolute right-2 -translate-y-1/2 top-1/2 text-umurava" />
            </label>
            <Button variant={"ghost"} size={"icon"} className="p-4">
              <FilterIcon />
            </Button>
          </div>

        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-2 py-8'>
        <h4>Challenges</h4>
        <p>Join a challenge or a hackathon to gain valuable work experience,</p>
      </div>
      <div>
        <div className={`grid grid-cols-1 md:grid-cols-4 ${user === "admin" && "md:grid-cols-5"} gap-2`}>
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
          {
            user === "admin" && (
              <Button className="ml-4 rounded-xl hover:bg-umurava/60 py-6 duration-300 bg-umurava text-white">
                <Link href={"create-new-challenge"} className="flex justify-center gap-4">
                  <Plus />
                  <span>Create New Challenge</span>
                </Link>
              </Button>
            )
          }

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