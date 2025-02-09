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
  LucideUserRound,
  PersonStanding,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { clearAuthUser } from "@/lib/redux/features/authReducer";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { fetchUserProfile } from "@/lib/redux/actionCreators/profileAction";
import { useEffect } from "react";

interface LinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const path = usePathname();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { profile, loading: profileLoading } = useAppSelector((state) => state.profile);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!profile) {
      dispatch(fetchUserProfile());
    }
  }, [profile]);

  const isActive = (href: string) => {
    return path === href;
  };

  const links: LinkItem[] = [
    { label: "Dashboard", href: "/app/dashboard", icon: <HomeIcon /> },
    {
      label: "Challenges & Hackathons",
      href: `/app/dashboard/Challenges&Hackathons`,
      icon: <File />,
    },
    {
      label: "Community",
      href: `/app/dashboard/Community`,
      icon: <PersonStanding />,
    },
  ];
  const footerlinks: LinkItem[] = [
    { label: "Settings", href: "/", icon: <Settings /> },
    { label: "Help Center", href: "/", icon: <Headphones /> },
    { label: "Refer family & friends", href: "/", icon: <Gift /> },
  ];

  const logoutHandler = () => {
    toast.warning("Signing out... Please hold on.");
    dispatch(clearAuthUser());
    router.replace("/");
  };

  return (
    <Sidebar className="bg-umurava">
      <SidebarHeader className="h-fit bg-umurava p-4">
        <Image src={"/Rectangle 1537.png"} alt="logo" width={56} height={40} />
      </SidebarHeader>
      <SidebarContent className="bg-umurava px-2 pt-8">
        {links.map((link, index) => (
          <Link key={index} href={link.href} passHref>
            <SidebarMenuItem
              className={`flex items-center rounded-md p-2 duration-300 ${
                isActive(link.href)
                  ? "bg-umuravawhite text-umurava"
                  : "text-white hover:bg-umuravawhite/40"
              }`}
            >
              <SidebarMenuButton className="size-fit" aria-label={link.label}>
                {link.icon}
              </SidebarMenuButton>
              <span className="ml-1">{link.label}</span>
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
                <span className="ml-1">{link.label}</span>
              </SidebarMenuItem>
            </Link>
          ))}
          <>
            <SidebarGroupContent>
              <div className="mb-8 ml-4 mt-6 flex items-center gap-2">
                <div className="flex size-12 items-center justify-center rounded-full bg-slate-200/70">
                  <LucideUserRound size={25} className="font-bold text-black" />
                </div>
                <div className="">
                  <p className="text-sm text-white capitalize">
                    {profile?.fullName || ""}
                  </p>
                  <p className="text-sm text-white" title={user?.email}>
                    {user?.email.slice(0, 14)}...
                  </p>
                </div>
                <button
                  className="ml-2 rounded-none p-0"
                  title="Logout"
                  onClick={logoutHandler}
                >
                  <RxExit size={20} />
                </button>
              </div>
            </SidebarGroupContent>
          </>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
