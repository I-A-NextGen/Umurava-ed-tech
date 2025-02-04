import { AppSidebar } from "@/app/_components/Dashboard/Appsidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "umurava edtech Dashboard",
  description: "Dashboard",
  icons: [{ rel: "icon", url: "/image1.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-umuravawhite">
      <SidebarProvider>
        <AppSidebar />
        <main className="bg-umuravawhite size-full min-h-screen">
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}
