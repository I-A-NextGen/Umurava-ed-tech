import { Slash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Breadcrumbs = ({pathname}: {pathname: string}) => {
    const links = pathname.split('/').filter(Boolean)
  return (
    <div className='flex items-center gap-2'>
        {links.map((link, index) => (
            <Link key={index} className=" text-lg flex-row  flex items-center" href={`/${links.slice(0, index + 1).join('/')}`} >
                <span className='capitalize hover:text-umurava duration-300'>{link.replace("-", " ")} </span> {index !== links.length - 1 && " / "}
            </Link>
        ))}
    </div>
  )
}

export default Breadcrumbs