import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  {
    src: "https://www.youtube.com/embed/xE_RWfn2ns8",
    title: "Unlocking Tech Job Opportunities Session by Umurava | Delivered by Vivens Uwizeyimana",
    name: "Manzi Jack",
    role: "Product Designer, Kigali",
    image: "/Rectangle 4386 1.png",
  },
  {
    src: "https://www.youtube.com/embed/xE_RWfn2ns8",
    title: "Unlocking Tech Job Opportunities Session by Umurava | Delivered by Vivens Uwizeyimana",
    name: "Jane Doe",
    role: "Software Engineer, Kigali",
    image: "/Rectangle 4386 1.png",
  },
  {
    src: "https://www.youtube.com/embed/xE_RWfn2ns8",
    title: "Unlocking Tech Job Opportunities Session by Umurava | Delivered by Vivens Uwizeyimana",
    name: "John Smith",
    role: "UX Researcher, Kigali",
    image: "/Rectangle 4386 1.png",
  },
  {
    src: "https://www.youtube.com/embed/xE_RWfn2ns8",
    title: "Unlocking Tech Job Opportunities Session by Umurava | Delivered by Vivens Uwizeyimana",
    name: "Alice Johnson",
    role: "Data Scientist, Kigali",
    image: "/Rectangle 4386 1.png",
  },
  {
    src: "https://www.youtube.com/embed/xE_RWfn2ns8",
    title: "Unlocking Tech Job Opportunities Session by Umurava | Delivered by Vivens Uwizeyimana",
    name: "Bob Williams",
    role: "DevOps Engineer, Kigali",
    image: "/Rectangle 4386 1.png",
  },
]

export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const getVisibleVideos = () => {
    const visibleVideos = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % videos.length
      visibleVideos.push(videos[index])
    }
    return visibleVideos
  }

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {videos.map((video, index) => (
          <div key={index} className="md:w-1/3 flex-shrink-0">
            <div className="p-4">
              <iframe
                className="h-40 w-full rounded-xl"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
              <div className="mt-4 flex flex-row gap-4 p-2">
                <img
                  alt={video.name}
                  className="bg-umurava size-12 rounded-full"
                  src={video.image || "/placeholder.svg"}
                />
                <div className="flex flex-col gap-1">
                  <h5 className="text-sm font-semibold">{video.name}</h5>
                  <p className="text-xs text-gray-600">{video.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

