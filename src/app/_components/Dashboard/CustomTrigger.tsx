"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar()

  return <button onClick={toggleSidebar} className=" bg-white p-2 sm:hidden inline"><Menu/></button>
}
