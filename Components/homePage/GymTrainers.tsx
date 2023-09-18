import React from "react";
import { MainTitle } from "../ui/MainTitle";
import trainer1 from "../../public/images/trainers/trainer1.png";
import trainer2 from "../../public/images/trainers/trainer2.png";
import trainer3 from "../../public/images/trainers/trainer3.png";
import shape from "../../public/images/trainers/shape.png";
import Image from "next/image";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

export const GymTrainers = () => {
  return (
    <section className="GymTrainersBg py-20">
      <div className="mx-10 xl:mx-36 text-center">
        <div className="w-fit mx-auto">
          <MainTitle content="GYM TRAINERS" />
        </div>
        <h2 className="font-bold text-4xl w-fit mx-auto my-6">
          Team Of Expert Coaches
        </h2>
        <p className="w-fit mx-auto text-gray-500 text-sm">
          Expert team of coaches helps you succeed in any goal,
          <br /> personalized guidance and motivation provided!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          <div className="pb-8 w-full cursor-pointer bg-white rounded-md relative after:content-[''] after:absolute after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:w-10 after:h-1 after:bg-[var(--mainRed)] after:duration-500 hover:after:w-full">
            <div className="cardBg grid place-content-center">
              <Image
                src={trainer1}
                width={250}
                height={250}
                alt="img"
                className="grayscale hover:grayscale-0 duration-300"
              />
            </div>
            <div className="pb-8 absolute bottom-0 w-full bg-white drop-shadow-xl">
            <Image
                src={shape}
                width={100}
                height={100}
                alt="img"
                className="mx-auto relative -top-6"
              />
              <IoIosArrowUp className="absolute -top-4 left-[50%] -translate-x-[50%] text-xl" />
              <h3 className="mx-auto w-fit font-bold text-3xl">John Lewis</h3>
              <p className="mx-auto w-fit text-gray-600 mb-2">Yoga Trainer</p>
              <div className="flex justify-center items-center mx-auto w-fit text-gray-500 text-2xl gap-4">
                <BiLogoFacebook />
                <BiLogoTwitter />
                <BiLogoInstagram />
                <CiMail />
              </div>
            </div>
          </div>
          <div className="pb-8 w-full cursor-pointer bg-white rounded-md relative after:content-[''] after:absolute after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:w-10 after:h-1 after:bg-[var(--mainRed)] after:duration-500 hover:after:w-full">
            <div className="cardBg grid place-content-center">
              <Image
                src={trainer2}
                width={250}
                height={250}
                alt="img"
                className="grayscale hover:grayscale-0 duration-300"
              />
            </div>
            <div className="pb-8 absolute bottom-0 w-full bg-white drop-shadow-xl">
            <Image
                src={shape}
                width={100}
                height={100}
                alt="img"
                className="mx-auto relative -top-6"
              />
              <IoIosArrowUp className="absolute -top-4 left-[50%] -translate-x-[50%] text-xl" />
              <h3 className="mx-auto w-fit font-bold text-3xl">Jonathan Doe</h3>
              <p className="mx-auto w-fit text-gray-600 mb-2">Crossfit Trainer</p>
              <div className="flex justify-center items-center mx-auto w-fit text-gray-500 text-2xl gap-4">
                <BiLogoFacebook />
                <BiLogoTwitter />
                <BiLogoInstagram />
                <CiMail />
              </div>
            </div>
          </div>
          <div className="pb-8 w-full md:w-1/2 lg:w-full md:mx-auto md:col-span-2 lg:col-span-1 cursor-pointer bg-white rounded-md relative after:content-[''] after:absolute after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:w-10 after:h-1 after:bg-[var(--mainRed)] after:duration-500 hover:after:w-full">
            <div className="cardBg grid place-content-center">
              <Image
                src={trainer3}
                width={250}
                height={250}
                alt="img"
                className="grayscale hover:grayscale-0 duration-300"
              />
            </div>
            <div className="pb-8 absolute bottom-0 w-full bg-white drop-shadow-xl">
            <Image
                src={shape}
                width={100}
                height={100}
                alt="img"
                className="mx-auto relative -top-6"
              />
              <IoIosArrowUp className="absolute -top-4 left-[50%] -translate-x-[50%] text-xl" />
              <h3 className="mx-auto w-fit font-bold text-3xl">Ana June</h3>
              <p className="mx-auto w-fit text-gray-600 mb-2">Personal Trainer</p>
              <div className="flex justify-center items-center mx-auto w-fit text-gray-500 text-2xl gap-4">
                <BiLogoFacebook />
                <BiLogoTwitter />
                <BiLogoInstagram />
                <CiMail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
