import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { ImLocation } from "react-icons/im";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-umuravadark lg:px32 min-h-96 px-8 md:px-16">
      <div className="flex justify-between border-b-2 border-white/30 py-10">
        <h2 className="text-3xl font-bold text-white">Logo</h2>
        <div className="flex flex-row gap-4">
          <Link href="" className="rounded-full bg-white p-2">
            <FaFacebook className="text-umuravadark" size={24} />
          </Link>
          <Link href="" className="rounded-full bg-white p-2">
            <FaGooglePlusG className="text-umuravadark" size={24} />
          </Link>
          <Link href="" className="rounded-full bg-white p-2">
            <FaInstagram className="text-umuravadark" size={24} />
          </Link>
          <Link href="" className="rounded-full bg-white p-2">
            <FaLinkedinIn className="text-umuravadark" size={24} />
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-4 py-10 border-b-2 border-white/30 ">
        <div className="flex flex-col p-4 gap-4 text-white">
          <h4 className="mb-4">Our Address</h4>
          <Link href={""} className="flex opacity-80 flex-row items-center">
            <TfiEmail className="mr-3" />
            career@tickets.com
          </Link>
          <Link href={""} className="flex opacity-80 flex-row items-center">
            <ImLocation className="mr-3" />
            89 KG 14 Ave, Kigali
          </Link>
          <Link href={""} className="flex opacity-80 flex-row items-center">
            <FaPhone className="mr-3" />
            +250 700 000{" "}
          </Link>
        </div>
        <div className="flex flex-col gap-4 p-4 text-white">
          <h4 className="mb-4">
          Quick Links
          </h4>
          <Link href={""} className="flex opacity-80 flex-row items-center">Home</Link>
          <Link href={""} className="flex opacity-80 flex-row items-center">Program</Link>
          <Link href={""} className="flex opacity-80 flex-row items-center">About</Link>
          <Link href={""} className="flex opacity-80 flex-row items-center">Contact Us</Link>

        </div>
        <div className="col-span-2 text-white p-4">
            <h4 className="md:w-2/3 mb-8">Join our newsletter to keep up to date with us!</h4>
            <form action="" className="p-2 bg-white w-full lg:w-4/5 flex justify-between rounded-xl">
                <input type="email" placeholder="Enter your email address" className="rounded-lg text-black p-4 focus-visible:outline-none"/>
                <Button className="size-fit p-4 bg-umuravadark hover:bg-umuravadark/70">Subscribe</Button>
            </form>
        </div>
      </div>
      <div className="flex flex-row justify-between py-10 text-white">
        <p>Copyright © All Rights Reserved SawaPay 2024.</p>
        <p>Privacy Policy  | Terms and Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
