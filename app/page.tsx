import { Button } from "@/Components/ui/Button";
import Image from "next/image";
import { BiLogoLinkedin, BiLogoTwitter, BiLogoFacebook } from "react-icons/bi";
import cloud from "../public/images/who-we-are/title-bg.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bgh md:bg-center">
      <div className=" h-screen w-full flex justify-center items-center">
        <div className="w-[10%] md:w-[53%]"></div>
        <div className="w-[90%] md:w-[47%] max-md:text-right">
          <div className="mb-6 md:mb-4 relative w-72 max-md:block max-md:ml-auto">
            <span className="w-full mx-auto absolute top-[50%] max-md:-left-[28%] left-[15%] -translate-y-[50%] z-10">
              FIND YOUR ENERGY
            </span>
            <Image
              className="title-white"
              src={cloud}
              alt="cloud"
              height={250}
              width={250}
            ></Image>
          </div>
          <div className="title mb-8 md:mb-6 max-md:mr-3">
            <h1 className="font-extrabold text-[35px] md:text-[50px] text-white">
              MAKE YOUR BODY
            </h1>
            <h1 className=" font-light text-[35px] md:text-[50px] text-white">
              FIT & PERFECT
            </h1>
          </div>
          <Link href="/clases" className="max-md:block max-md:w-fit max-md:mr-5 max-md:ml-auto">
            <Button content="Our Classes" variant="white" />
          </Link>
        </div>
      </div>
      <div className="hidden xl:flex flex-col justify-center items-center absolute right-20 top-[50%] -translate-y-[50%]">
        <span className="-rotate-90 text-white text-xl font-bold relative after:content-[''] after:absolute after:-left-14 after:top-[50%] after:-translate-y-[50%] after:w-[50%] after:h-1 after:bg-[var(--mainRed)]">
          SHARE
        </span>
        <BiLogoLinkedin className="text-white text-2xl mt-24 cursor-pointer hover:text-[var(--mainRed)]" />
        <BiLogoTwitter className="text-white text-2xl mt-3 cursor-pointer hover:text-[var(--mainRed)]" />
        <BiLogoFacebook className="text-white text-3xl mt-3 cursor-pointer hover:text-[var(--mainRed)]" />
      </div>
    </main>
  );
}
