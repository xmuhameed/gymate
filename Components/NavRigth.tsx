"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo/logo-footer.svg";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPerson, BsFillTelephoneFill } from "react-icons/bs";
import {
  FaRegChartBar,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { IoLocationSharp, IoMail } from "react-icons/io5";
import img1 from "../public/images/sidebar/img1.jpg";
import img2 from "../public/images/sidebar/img2.jpg";
import img3 from "../public/images/sidebar/img3.jpg";
import img4 from "../public/images/sidebar/img4.jpg";
import img5 from "../public/images/sidebar/img5.jpg";
import img6 from "../public/images/sidebar/img6.jpg";
import { NavLinks } from "./NavLinks";
import { useAuth } from "@/Context/AuthContext";
import { User } from "./User";

export const NavRigth = () => {
  const [sidebar, setSidebar] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const { currentUser } = useAuth();
  const imgsArr = [img1, img2, img3, img4, img5, img6];
  const handleSideBar = () => {
    setSidebar(!sidebar);
  };
  const handleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
  };
  return (
    <>
      <div
        className={`w-screen h-screen mb-96 bg-white absolute top-0 duration-300 py-12 px-9 ${
          burgerMenu ? "left-0" : "-left-full"
        }`}
        onClick={() => setBurgerMenu(false)}
      >
        <div className="flex justify-between items-center mb-12 z-20">
          <RiCloseLine
            className="text-[var(--mainRed)] text-5xl font-bold ml-auto cursor-pointer"
            onClick={() => setBurgerMenu(false)}
          />
        </div>
        <NavLinks active={burgerMenu} />
      </div>
      <div
        className={`w-full sm:w-[400px] h-screen overflow-y-scroll bg-white absolute top-0 duration-300 py-12 px-9 z-20 ${
          sidebar ? "left-0" : "-left-[500px]"
        }`}
      >
        <div className="flex justify-between items-center">
          <Image width={120} height={120} alt="logo" src={logo}></Image>
          <RiCloseLine
            className="text-[var(--mainRed)] text-5xl font-bold ml-auto cursor-pointer"
            onClick={() => setSidebar(false)}
          />
        </div>
        <div className="my-14">
          <h3 className="text-xl font-bold mb-7">About Us</h3>
          <p className="text-gray-600 text-[1.1rem] leading-7">
            Find out who we are and what makes us unique. We are a
            community-driven gym committed to providing personalized fitness
            experiences for all levels of fitness enthusiasts in a welcoming and
            supportive environment.
          </p>
        </div>
        <div className="my-14">
          <h3 className="text-xl font-bold mb-7">Gallery</h3>
          <div className="grid grid-cols-3 gap-4">
            {imgsArr.map((img, index) => {
              return (
                <Image
                  key={index}
                  width={100}
                  height={100}
                  alt="gallery"
                  src={img}
                  className="rounded-md"
                ></Image>
              );
            })}
          </div>
        </div>
        <div className="my-14 flex flex-col gap-3">
          <h3 className="text-xl font-bold mb-7">Contact Info</h3>
          <div className="flex items-center">
            <IoLocationSharp className="text-[var(--mainRed)] text-2xl mr-2" />
            <span className="text-gray-600 hover:text-[var(--mainRed)]">
              59 Street, House Newyork City
            </span>
          </div>
          <div className="flex items-center">
            <BsFillTelephoneFill className="text-[var(--mainRed)] text-2xl mr-2" />
            <span className="text-gray-600 hover:text-[var(--mainRed)]">
              +123-678800090
            </span>
          </div>
          <div className="flex items-center">
            <IoMail className="text-[var(--mainRed)] text-2xl mr-2" />
            <span className="text-gray-600 hover:text-[var(--mainRed)]">
              gymate@gymail.com
            </span>
          </div>
        </div>
        <div className="my-14">
          <h3 className="text-xl font-bold mb-7">Follow Us</h3>
          <div className="flex gap-3">
            <span className="grid place-content-center bg-[var(--mainRed)] rounded-full w-14 h-14 cursor-pointer">
              <FaFacebookF className="text-white text-2xl" />
            </span>
            <span className="grid place-content-center bg-[var(--mainRed)] rounded-full w-14 h-14 cursor-pointer">
              <FaTwitter className="text-white text-2xl" />
            </span>
            <span className="grid place-content-center bg-[var(--mainRed)] rounded-full w-14 h-14 cursor-pointer">
              <FaInstagram className="text-white text-2xl" />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="xl:hidden" onClick={handleBurgerMenu}>
          <HiMenu className="text-white text-[1.8rem] hover:text-[var(--mainRed)] cursor-pointer" />
        </div>
        {currentUser ? (
          <User />
        ) : (
          <Link href="/signin">
            <BsPerson className="text-white text-[1.8rem] hover:text-[var(--mainRed)] cursor-pointer" />
          </Link>
        )}
        <div onClick={handleSideBar}>
          <FaRegChartBar className="text-white text-[1.8rem] hover:text-[var(--mainRed)] cursor-pointer" />
        </div>
        <Link
          href="/contact"
          className="join-class hidden sm:inline-block w-56 h-12 border-stone-700 border-solid border-2 rounded-md"
        >
          <div className="rotate-el bg-[var(--mainRed)] text-white text-[2rem] inline-grid place-content-center w-10 h-9 m-1 rounded-md transition-transform">
            <AiOutlinePlus className="text-lg" />
          </div>
          <span className="text-white font-bold ml-2">JOIN CLASS NOW</span>
        </Link>
      </div>
    </>
  );
};
