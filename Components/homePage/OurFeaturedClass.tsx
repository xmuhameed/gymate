import { MainTitle } from "../ui/MainTitle";
import Image from "next/image";
import cycling from "../../public/images/features/cycling.jpg";
import karate from "../../public/images/features/karate.jpg";
import power from "../../public/images/features/power.jpg";
import meditation from "../../public/images/features/meditation.jpg";
import mma from "../../public/images/features/mma.jpg";
import workout from "../../public/images/features/workout.jpg";
import { Button } from "../ui/Button";
import Link from "next/link";

export const OurFeaturedClass = () => {
  return (
    <section className="">
      <div className="mx-10 xl:mx-36 text-center">
      <div className="mx-auto w-fit">
        <MainTitle content="Our Featured Class" />
      </div>
      <h2 className="font-bold text-2xl xl:text-4xl my-6">
        We Are Offering Best Flexible Classes
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-28">
        <div className="overflow-hidden relative lg:col-span-2 h-72 after:content-[''] after:absolute after:-left-[4.5rem] after:top-[20%] after:bg-white after:opacity-30 hover:after:opacity-100 duration-200 after:w-40 after:h-[70px] after:rounded-[50px] after:rotate-[30deg] after:pointer-events-none ourFeatured">
          <Image
            src={cycling}
            layout="fill"
            objectFit="cover"
            alt="img"
            className="grayscale hover:grayscale-0 hover:scale-150 duration-700"
          />
          <span className="absolute left-[30px] bottom-[25%] pointer-events-none text-white text-3xl font-bold">
            Cycling
          </span>
          <span className="absolute left-[30px] bottom-[12%] pointer-events-none px-3 py-1 bg-[var(--mainRed)] text-white text-sm">
            Wednesday: 9:00am-10:00am
          </span>
          <span className="absolute left-[18px] top-[31%] w-12 h-12 z-10 after:pointer-events-none  ourFeaturedSpan"></span>
        </div>
        <div className="overflow-hidden relative h-72 after:content-[''] after:absolute after:-left-[4.5rem] after:top-[20%] after:bg-white after:opacity-30 hover:after:opacity-100 duration-200 after:w-40 after:h-[70px] after:rounded-[50px] after:rotate-[30deg] after:pointer-events-none ourFeatured">
          <Image
            src={karate}
            layout="fill"
            objectFit="cover"
            alt="img"
            className="grayscale hover:grayscale-0 hover:scale-150 duration-700"
          />
          <span className="absolute left-[30px] bottom-[25%] pointer-events-none text-white text-3xl font-bold">
            Karate
          </span>
          <span className="absolute left-[30px] bottom-[12%] pointer-events-none px-3 py-1 bg-[var(--mainRed)] text-white text-sm">
            Friday: 10:00am-11:00am
          </span>
          <span className="absolute left-[18px] top-[31%] w-12 h-12 z-10 after:pointer-events-none  ourFeaturedSpan"></span>
        </div>
        <div className="overflow-hidden relative h-72 after:content-[''] after:absolute after:-left-[4.5rem] after:top-[20%] after:bg-white after:opacity-30 hover:after:opacity-100 duration-200 after:w-40 after:h-[70px] after:rounded-[50px] after:rotate-[30deg] after:pointer-events-none ourFeatured">
          <Image
            src={power}
            layout="fill"
            objectFit="cover"
            alt="img"
            className="grayscale hover:grayscale-0 hover:scale-150 duration-700"
          />
          <span className="absolute left-[30px] bottom-[25%] pointer-events-none text-white text-3xl font-bold">
            Power
          </span>
          <span className="absolute left-[30px] bottom-[12%] pointer-events-none px-3 py-1 bg-[var(--mainRed)] text-white text-sm">
            Saturday: 9:00am-10:00am
          </span>
          <span className="absolute left-[18px] top-[31%] w-12 h-12 z-10 after:pointer-events-none  ourFeaturedSpan"></span>
        </div>
        <div className="overflow-hidden relative h-72 after:content-[''] after:absolute after:-left-[4.5rem] after:top-[20%] after:bg-white after:opacity-30 hover:after:opacity-100 duration-200 after:w-40 after:h-[70px] after:rounded-[50px] after:rotate-[30deg] after:pointer-events-none ourFeatured">
          <Image
            src={meditation}
            layout="fill"
            objectFit="cover"
            alt="img"
            className="grayscale hover:grayscale-0 hover:scale-150 duration-700"
          />
          <span className="absolute left-[30px] bottom-[25%] pointer-events-none text-white text-3xl font-bold">
            Meditation
          </span>
          <span className="absolute left-[30px] bottom-[12%] pointer-events-none px-3 py-1 bg-[var(--mainRed)] text-white text-sm">
            Friday: 1:00pm-2:00pm
          </span>
          <span className="absolute left-[18px] top-[31%] w-12 h-12 z-10 after:pointer-events-none  ourFeaturedSpan"></span>
        </div>
        <div className="overflow-hidden relative h-72 after:content-[''] after:absolute after:-left-[4.5rem] after:top-[20%] after:bg-white after:opacity-30 hover:after:opacity-100 duration-200 after:w-40 after:h-[70px] after:rounded-[50px] after:rotate-[30deg] after:pointer-events-none ourFeatured">
          <Image
            src={mma}
            layout="fill"
            objectFit="cover"
            alt="img"
            className="grayscale hover:grayscale-0 hover:scale-150 duration-700"
          />
          <span className="absolute left-[30px] bottom-[25%] pointer-events-none text-white text-3xl font-bold">
            Martial Arts
          </span>
          <span className="absolute left-[30px] bottom-[12%] pointer-events-none px-3 py-1 bg-[var(--mainRed)] text-white text-sm">
            Sunday: 6:00pm-7:00pm
          </span>
          <span className="absolute left-[18px] top-[31%] w-12 h-12 z-10 after:pointer-events-none  ourFeaturedSpan"></span>
        </div>
        <div className="overflow-hidden relative lg:col-span-2 h-72 after:content-[''] after:absolute after:-left-[4.5rem] after:top-[20%] after:bg-white after:opacity-30 hover:after:opacity-100 duration-200 after:w-40 after:h-[70px] after:rounded-[50px] after:rotate-[30deg] after:pointer-events-none ourFeatured">
          <Image
            src={workout}
            layout="fill"
            objectFit="cover"
            alt="img"
            className="grayscale hover:grayscale-0 hover:scale-150 duration-700"
          />
          <span className="absolute left-[30px] bottom-[25%] pointer-events-none text-white text-3xl font-bold">
            Workout
          </span>
          <span className="absolute left-[30px] bottom-[12%] pointer-events-none px-3 py-1 bg-[var(--mainRed)] text-white text-sm">
            Monday: 4:00pm-5:00pm
          </span>
          <span className="absolute left-[18px] top-[31%] w-12 h-12 z-10 after:pointer-events-none  ourFeaturedSpan"></span>
        </div>
      </div>
      </div>
      <div className="ctaBg flex justify-center items-center gap-10 max-lg:flex-col py-20">
            <h2 className="font-bold text-xl md:text-2xl lg:text-4xl text-white w-3/4 lg:w-1/2 max-lg:text-center">We Are Always Providing Best Fitness Service For You</h2>
            <Link href="/contact" className="lg:w-1/3"><Button content="Join With Us" variant="white" /></Link>
        </div>
    </section>
  );
};
