"use client";
import cycling from "../../public/images/classes/cycling.jpg";
import meditation from "../../public/images/classes/meditation.jpg";
import boxing from "../../public/images/classes/mma.jpg";
import karate from "../../public/images/classes/karate.jpg";
import powerlifting from "../../public/images/classes/powerlifting.jpg";
import workout from "../../public/images/classes/workout.jpg";
import cross from "../../public/images/classes/cross.jpg";
import running from "../../public/images/classes/running.jpg";
import bodybuilding from "../../public/images/classes/bodybuilding.jpg";
import mma from "../../public/images/classes/box.jpg";
import yoga from "../../public/images/classes/yoga.jpg";
import fitness from "../../public/images/classes/fitness.jpg";
import { useState } from "react";
import Image from "next/image";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import Link from "next/link";
import { Button } from "../ui/Button";

export const ClassesComponents = () => {
  const lessNumber = 7;
    const [more, setMore] = useState(lessNumber);
  const [classData, setClassData] = useState([
    {
      id: 1,
      title: "Cycling",
      image: cycling,
      trainer: "Dorian Yate",
      time: "Wed: 9:00 am",
    },
    {
      id: 2,
      title: "Meditation",
      image: meditation,
      trainer: "Maria Mich",
      time: "Fri: 1:00 pm",
    },
    {
      id: 3,
      title: "Boxing",
      image: boxing,
      trainer: "John Flex",
      time: "Tue: 4:00 pm",
    },
    {
      id: 4,
      title: "Karate",
      image: karate,
      trainer: "David Rich",
      time: "Sat: 9:00 am",
    },
    {
      id: 5,
      title: "Powerlifting",
      image: powerlifting,
      trainer: "Larry Wheels",
      time: "Mon: 8:00 pm",
    },
    {
      id: 6,
      title: "Workout",
      image: workout,
      trainer: "Shawn Ray",
      time: "Sun: 10:00 am",
    },
    {
      id: 7,
      title: "Crossfit",
      image: cross,
      trainer: "Jenifer Alex",
      time: "Wen: 9:00 pm",
    },
    {
      id: 8,
      title: "Running",
      image: running,
      trainer: "Zinia Zessy",
      time: "Thu: 12:00 am",
    },
    {
      id: 9,
      title: "Bodybuilding",
      image: bodybuilding,
      trainer: "Jake Paul",
      time: "Mon: 8:00 pm",
    },
    {
      id: 10,
      title: "MMA",
      image: mma,
      trainer: "Becky Lynch",
      time: "Fri: 6:00 am",
    },
    {
      id: 11,
      title: "Yoga",
      image: yoga,
      trainer: "Marta Mich",
      time: "Wen: 8:00 am",
    },
    {
      id: 12,
      title: "Fitness",
      image: fitness,
      trainer: "Mia Malkova",
      time: "Sun: 5:00 pm",
    },
  ]);
  return (
    <>
      {classData.map((item) => {
        if (item.id > more) return null;
        return (
          <div
            className="relative rounded-2xl h-[45vh] md:h-[60vh] overflow-hidden px-3 lg:px-10"
            key={item.id}
          >
            <Image
              src={item.image}
              alt="image"
              fill
              className="absolute top-0 left-0 brightness-75 w-[150%]"
            />
            <div className="mt-[50%] md:mt-[65%]">
              <h2 className="font-bold text-3xl w-fit text-white mb-10 relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:bg-[var(--mainRed)] after:h-1 after:w-2/5 hover:after:w-full after:duration-300">
                {item.title}
              </h2>
              <div className="flex justify-start items-center relative my-10">
                <span className="flex justify-center items-center gap-1 text-white">
                  <IoPersonOutline className="text-white text-xl" />
                  {item.trainer}
                </span>
                <span className="flex justify-center items-center gap-1 text-white ml-5">
                  <AiOutlineClockCircle className="text-white text-xl" />
                  {item.time}
                </span>
              </div>
              <Link href="/contact">
                <Button variant="white" content="Join NOw" />
              </Link>
            </div>
          </div>
        );
      })}
        <div className=" absolute -bottom-28 left-1/2 -translate-x-1/2 w-fit mx-auto flex justify-center items-center" onClick={() => more == lessNumber ? setMore(classData.length) : setMore(lessNumber)}>
            <Button
            variant="gray"
            arrow={`${more != lessNumber && "no"}`}
            border={false}
            content={`${more == lessNumber ? "Show More" : "Show Less"}`}
            />
        </div>
    </>
  );
};
