'use client'
import {useState} from "react";
import Image from "next/image";
import logo from "/public/images/logo/logo.svg";
import { NavLinks } from "./NavLinks";
import { NavRigth } from "./NavRigth";
import Link from "next/link";

export const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const scroll = window.scrollY;

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      window.scrollY > 10 ? setSticky(true) : setSticky(false);
    });
  }
  const goTop = () => {
  if (typeof window !== "undefined" && window.scrollY > 50){
    window.scrollTo({
    top: 0,
    behavior: "smooth",
  })}};

  return (
    <nav className={`${sticky ? "bg-black" : "bg-transparent"} duration-500 h-24 flex justify-between items-center fixed w-screen mx-auto px-8 z-50`}>
      <Link href="/"  onClick={goTop}>
        <Image src={logo} alt="logo" width={165} height={165} priority={true} className="cursor-pointer" />
      </Link>
      <NavLinks active={false} />
      <NavRigth />
    </nav>
  );
};
