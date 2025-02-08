import { AppSidebar } from "@/app/_components/Dashboard/Appsidebar";
import { Upperbar } from "@/app/_components/Dashboard/Upperbar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "umurava edtech Dashboard",
  description: "Dashboard",
  icons: [{ rel: "icon", url: "/Rectangle 1537.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="size-full min-h-screen bg-umuravawhite">
        <Upperbar />
        <div className="flex flex-col gap-10 bg-slate-100 p-8 pb-24">{children}</div>
      </main>
    </SidebarProvider>
  );
}
