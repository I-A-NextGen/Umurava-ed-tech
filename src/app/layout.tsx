import ReduxProvider from "@/lib/redux/reduxProvider";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import { type Metadata } from "next";
import { Inter } from "next/font/google";
import TopLoader from "@/components/TopLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ed-Tech",
  description: "Ed-Tech",
  icons: [{ rel: "icon", url: "/Rectangle 1537.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <TopLoader />
          <ToastContainer />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
