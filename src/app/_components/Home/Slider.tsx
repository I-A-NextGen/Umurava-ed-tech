"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Item {
  logo: string
  title: string
  image: string
}

export default function Slider() {
  const item: Item = {
    logo: "/Frame 1618868163.png",
    title:
      "The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.",
    image: "/payrolldashboard 1.png",
  }
  const items: Item[] = [item, item, item,item]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div className="relative w-full h-screen md:h-[512px] overflow-hidden ">
        <div className="p-4 flex flex-row absolute bottom-4 left-1/2 -translate-x-1/2 z-20 gap-4">
            {items.map((item, i) => (
                <div key={i} className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-500 ease-in-out shadow-md ${i === currentIndex ? "bg-slate-50 ring-1" : "bg-umurava"}`}></div>
            ))}
        </div>
      {items.map((item, i) => (
        <div
          key={i}
          className={`absolute top-0 left-0 w-full min-h-screen bg-[#f1f1f1] rounded-lg p-4 md:p-8 transition-transform duration-500 ease-in-out ${
            i === currentIndex ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
            <div className="flex flex-col justify-center p-8 gap-4">
              <div className="w-20 h-20 relative">
                <Image src={item.logo || "/placeholder.svg"} alt="Logo" layout="fill" objectFit="contain" />
              </div>
              <p className="text-lg">{item.title}</p>
              <Link href="" className="w-fit flex flex-row items-center cursor-pointer p-4 duration-300 text-blue-600">
                Learn More
                <div className="p-1 text-white ml-2 rounded-full bg-blue-600">
                  <ArrowRight size={16} />
                </div>
              </Link>
            </div>
            <div className="relative w-full min-h-96 md:h-full">
              <Image src={item.image || "/placeholder.svg"} alt="Slide Image" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

