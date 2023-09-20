"use client";
import Link from "next/link";
import { useState } from "react";

interface arrayOfObj     {
    id: number,
    day: string,
    class: string,
    time: string,
    trainer: string,
  }

export const ScheduleComponent = () => {
    const dayIndex = new Date().getDay()
    const weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    const [day, setDay] = useState(weekday[dayIndex])
    const [schedule, setSchedule] = useState([
    {
      id: 1,
      day: "monday",
      class: "Fitness",
      time: "9:00am - 10:00am",
      trainer: "David Vila",
    },
    {
      id: 2,
      day: "monday",
      class: "Body Building",
      time: "10:00pm - 11:00pm",
      trainer: "John Weights",
    },
    {
      id: 3,
      day: "monday",
      class: "Running",
      time: "4:00pm - 5:00pm",
      trainer: "Junifor Jonas",
    },
    {
      id: 4,
      day: "monday",
      class: "Cycling",
      time: "6:00pm - 7:00pm",
      trainer: "Robert Louis",
    },
    {
      id: 5,
      day: "tuesday",
      class: "Boxing",
      time: "9:00am - 10:00am",
      trainer: "Mike Tyson",
    },
    {
      id: 6,
      day: "tuesday",
      class: "Yoga",
      time: "10:00pm - 11:00pm",
      trainer: "Mia louis",
    },
    {
      id: 7,
      day: "tuesday",
      class: "Crossfit",
      time: "4:00pm - 5:00pm",
      trainer: "Cristofer Columbo",
    },
    {
      id: 8,
      day: "wednesday",
      class: "Cycling",
      time: "9:00am - 10:00am",
      trainer: "Mario Vreco",
    },
    {
      id: 9,
      day: "wednesday",
      class: "Body Building",
      time: "10:00pm - 11:00pm",
      trainer: "John Weights",
    },
    {
      id: 10,
      day: "wednesday",
      class: "Fitness",
      time: "4:00pm - 5:00pm",
      trainer: "Tom Rizzly",
    },
    {
      id: 11,
      day: "wednesday",
      class: "Running",
      time: "6:00pm - 7:00pm",
      trainer: "Michael Jonson",
    },
    {
      id: 12,
      day: "thursday",
      class: "Fitness",
      time: "9:00am - 10:00am",
      trainer: "David Vila",
    },
    {
      id: 13,
      day: "thursday",
      class: "Body Building",
      time: "10:00pm - 11:00pm",
      trainer: "John Weights",
    },
    {
      id: 14,
      day: "thursday",
      class: "Running",
      time: "4:00pm - 5:00pm",
      trainer: "Junifor Jonas",
    },
    {
      id: 15,
      day: "friday",
      class: "Crossfit",
      time: "9:00am - 10:00am",
      trainer: "Mike Mich",
    },
    {
      id: 16,
      day: "friday",
      class: "Karate",
      time: "10:00pm - 11:00pm",
      trainer: "John Jones",
    },
    {
      id: 17,
      day: "friday",
      class: "Meditation",
      time: "4:00pm - 5:00pm",
      trainer: "Lara Croft",
    },
    {
      id: 18,
      day: "friday",
      class: "Workout",
      time: "6:00pm - 7:00pm",
      trainer: "Lary Wheels",
    },
    {
      id: 19,
      day: "saturday",
      class: "Power Lifting",
      time: "9:00am - 10:00am",
      trainer: "David Laid",
    },
    {
      id: 20,
      day: "saturday",
      class: "Boxing",
      time: "10:00pm - 11:00pm",
      trainer: "Tyson Fury",
    },
    {
      id: 21,
      day: "saturday",
      class: "Yoga",
      time: "4:00pm - 5:00pm",
      trainer: "Milica Tails",
    },
    {
      id: 22,
      day: "sunday",
      class: "Fitness",
      time: "9:00am - 10:00am",
      trainer: "David Vila",
    },
    {
      id: 23,
      day: "sunday",
      class: "Body Building",
      time: "10:00pm - 11:00pm",
      trainer: "John Weights",
    },
    {
      id: 24,
      day: "sunday",
      class: "Running",
      time: "4:00pm - 5:00pm",
      trainer: "Junifor Jonas",
    },
    {
      id: 25,
      day: "sunday",
      class: "Cycling",
      time: "6:00pm - 7:00pm",
      trainer: "Robert Louis",
    },
  ])
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-1 md:gap-3">
        <span
          className={`hover:bg-[var(--mainRed)] hover:text-white py-1 md:py-2 px-3 md:px-7 rounded-[50px] cursor-pointer ${day == "saturday" && "bg-[var(--mainRed)] text-white"}`}
          onClick={() => setDay("saturday")}
          >
          Saturday
        </span>
        <span
          className={`hover:bg-[var(--mainRed)] hover:text-white py-1 md:py-2 px-3 md:px-7 rounded-[50px] cursor-pointer ${day == "sunday" && "bg-[var(--mainRed)] text-white"}`}
          onClick={() => setDay("sunday")}
        >
          Sunday
        </span>
        <span
          className={`hover:bg-[var(--mainRed)] hover:text-white py-1 md:py-2 px-3 md:px-7 rounded-[50px] cursor-pointer ${day == "monday" && "bg-[var(--mainRed)] text-white"}`}
          onClick={() => setDay("monday")}
          >
          Monday
        </span>
        <span
          className={`hover:bg-[var(--mainRed)] hover:text-white py-1 md:py-2 px-3 md:px-7 rounded-[50px] cursor-pointer ${day == "tuesday" && "bg-[var(--mainRed)] text-white"}`}
          onClick={() => setDay("tuesday")}
          >
          Tuesday
        </span>
        <span
          className={`hover:bg-[var(--mainRed)] hover:text-white py-1 md:py-2 px-3 md:px-7 rounded-[50px] cursor-pointer ${day == "wednesday" && "bg-[var(--mainRed)] text-white"}`}
          onClick={() => setDay("wednesday")}
        >
          Wednesday
        </span>
        <span
          className={`hover:bg-[var(--mainRed)] hover:text-white py-1 md:py-2 px-3 md:px-7 rounded-[50px] cursor-pointer ${day == "thursday" && "bg-[var(--mainRed)] text-white"}`}
        onClick={() => setDay("thursday")}
        >
          Thursday
        </span>
        <span
          className={`hover:bg-[var(--mainRed)] hover:text-white py-1 md:py-2 px-3 md:px-7 rounded-[50px] cursor-pointer ${day == "friday" && "bg-[var(--mainRed)] text-white"}`}
          onClick={() => setDay("friday")}
          >
          Friday
        </span>
      </div>
      <div className="mt-10 flex flex-col gap-2">
        {schedule.map((data) => {
            if (day != data.day) return null
            return (
                <div key={data.id} className="bg-gray-100 px-12 py-7 flex md:flex-row flex-col justify-between items-center max-md:gap-6">
                    <div className="flex flex-col justify-center items-center gap-2 md:w-1/5">
                        <span className="text-gray-400 text-sm" >Class Name</span>
                        <h3 className="font-bold text-xl">{data.class}</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 md:w-1/5">
                        <span className="text-gray-400 text-sm" >Time</span>
                        <h3 className="font-bold text-xl">{data.time}</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2 md:w-1/5">
                        <span className="text-gray-400 text-sm" >Trainer</span>
                        <h3 className="font-bold text-xl">{data.trainer}</h3>
                    </div>
                    <Link href="/contact" className=" hover:bg-[var(--mainRed)] bg-gray-600 text-white hover:text-white py-2 px-5 rounded-[50px] cursor-pointer">Join Now</Link>
                </div>
            )
        })}
      </div>
    </>
  );
};
