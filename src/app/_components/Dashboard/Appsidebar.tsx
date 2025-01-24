"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { RxExit } from "react-icons/rx";
import {
  ExternalLink,
  File,
  Gift,
  Headphones,
  HomeIcon,
  PersonStanding,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface LinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = usePathname();
  // console.log(router);

  let user = "user";

  function whuichuser(){
    let user = "user";
    if (router === "/app/dashboard/admin") {
      user = "admin";
    }
    else if(router === "/app/dashboard/user") {
      user = "user";
    }
    return user
  }

  const isActive = (href: string) => {
      if (router === "/app/dashboard/admin") {
        user = "admin";
        return router.replace("/app/dashboard/admin", "/") === href;
      }
      else if(router === "/app/dashboard/user") {
        user = "user";
        return router.replace("/app/dashboard/user", "/") === href;
      }
      else {
        return router === href;
      }
      
  };

  const links: LinkItem[] = [
    { label: "Dashboard", href: "/", icon: <HomeIcon /> },
    { label: "Challenges & Hackathons", href: `${whuichuser()}/Hackathons`, icon: <File /> },
    { label: "Community", href: `${whuichuser()}/Community`, icon: <PersonStanding /> },
  ];
  const footerlinks: LinkItem[] = [
    { label: "Settings", href: "/", icon: <Settings /> },
    { label: "Help Center", href: "/", icon: <Headphones /> },
    { label: "Refer family & friends", href: "/", icon: <Gift /> },
  ];

  

  return (
    <Sidebar className="bg-umurava">
      <SidebarHeader className="bg-umurava p-4">
        <h4 className="text-white">Umurava</h4>
      </SidebarHeader>
      <SidebarContent className="bg-umurava px-2 pt-16">
        {links.map((link, index) => (
          <Link key={index} href={link.href} passHref>
            <SidebarMenuItem
              className={`flex hover:bg-umuravawhite/40 hover:text-white duration-300  items-center p-2 ${
                isActive(link.href)
                  ? "bg-umuravawhite rounded-xl text-umurava"
                  : "text-white"
              }`}
            >
              <SidebarMenuButton className="size-fit" aria-label={link.label}>
                {link.icon}
              </SidebarMenuButton>
              <span className="ml-4">{link.label}</span>
            </SidebarMenuItem>
          </Link>
        ))}
        <div className="flex-1" />
        <SidebarFooter className="bg-umurava text-white">
          {footerlinks.map((link, index) => (
            <Link key={index} href={link.href} passHref>
              <SidebarMenuItem className="flex items-center p-2">
                <SidebarMenuButton className="size-fit" aria-label={link.label}>
                  {link.icon}
                </SidebarMenuButton>
                <span className="ml-4">{link.label}</span>
              </SidebarMenuItem>
            </Link>
          ))}
          <>
            <>
              <SidebarGroupContent>
                <div className="flex items-center mb-8 gap-4">
                  <div className="relative size-12 overflow-clip rounded-full border-2 border-white bg-white">
                    <Image
                      src={
                        "https://i.pinimg.com/736x/e8/e6/41/e8e64141f4c0ae39c32f9701ccea9a2e.jpg"
                      }
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm text-white">Hilaire Sh</p>
                    <p className="text-sm text-white">hilaire@uidesign</p>
                  </div>
                  <button className="ml-2 rounded-none p-0">
                    <RxExit />
                  </button>
                </div>
              </SidebarGroupContent>
            </>
          </>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}


