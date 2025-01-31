import { AppSidebar } from "@/app/_components/Dashboard/Appsidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";


const user = {
  name:"Hilaire Sh",
  email:"hilaire@uidesign",
  role:"admin",
  password:"123",
  photo:"https://i.pinimg.com/736x/43/39/ee/4339ee2c047bbb48e4aa8d515a636cf2.jpg" ,
}

export const metadata: Metadata = {
  title: user.name,
  description: user.name,
  icons: [{ rel: "icon", url: user.photo }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={``}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="bg-umuravawhite size-full min-h-screen">
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
