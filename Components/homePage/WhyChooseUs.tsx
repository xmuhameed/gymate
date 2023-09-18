import Image from "next/image";
import WhyChooseUsImg from "../../public/images/choose-us/main-img.png";
import training from "../../public/images/choose-us/training.png";
import benchPress from "../../public/images/choose-us/bench-press.png";
import gymBag from "../../public/images/choose-us/gym-bag.png";
import bottleOfWater from "../../public/images/choose-us/bottle-of-water.png";
import { MainTitle } from "../ui/MainTitle";
import { Button } from "../ui/Button";
import Link from "next/link";

export const WhyChooseUs = () => {
  return (
    <section className="whyChooseUsBg py-20">
      <div className="flex flex-col lg:flex-row gap-6 max-lg:gap-y-32 mx-10 xl:mx-36">
        <div className="lg:w-1/2">
          <div className="w-fit mx-auto relative before:content-[''] before:absolute before:-left-6 before:bottom-0 before:w-[10px] before:h-64 before:bg-[var(--mainRed)] after:content-[''] after:absolute after:-right-2 after:top-[50%] after:-translate-y-[50%] after:-rotate-[7deg] after:w-[10px] after:h-[70%] after:bg-[var(--mainRed)]">
            <Image
              src={WhyChooseUsImg}
              sizes="100%"
              alt="img"
              className=""
            />
          </div>
        </div>
        <div className="lg:w-2/5 max-lg:text-center">
          <div className="max-lg:w-fit max-lg:mx-auto"><MainTitle content="WHY CHOOSE US" /></div>
          <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white my-8">
            We Can Give A Shape Of Your Body Here !
          </h2>
          <p className="text-lg lg:text-xl text-gray-400 mb-8">
            At <span className="font-bold">Gymate</span>, we are dedicated to
            helping you achieve the body of your dreams. Our expert trainers and
            nutritionists will work with you to create a personalized fitness
            and nutrition plan that helps you reach your specific goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-6 mb-24">
            <div className="flex justify-center items-center gap-4">
                <Image
                    src={training}
                    width={70}
                    height={70}
                    alt="img"
                    className="rounded-full p-3 bg-[#2B2B2B] hover:bg-[var(--mainRed)]"
                />
                <h3 className="md:text-xl font-bold text-white">Free Fitness Training</h3>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Image
                    src={benchPress}
                    width={70}
                    height={70}
                    alt="img"
                    className="rounded-full p-3 bg-[#2B2B2B] hover:bg-[var(--mainRed)]"
                />
                <h3 className="md:text-xl font-bold text-white">Modern Gym Equipments</h3>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Image
                    src={gymBag}
                    width={70}
                    height={70}
                    alt="img"
                    className="rounded-full p-3 bg-[#2B2B2B] hover:bg-[var(--mainRed)]"
                />
                <h3 className="md:text-xl font-bold text-white">Gym Bag Equipments</h3>
            </div>
            <div className="flex justify-center items-center gap-4">
                <Image
                    src={bottleOfWater}
                    width={70}
                    height={70}
                    alt="img"
                    className="rounded-full p-3 bg-[#2B2B2B] hover:bg-[var(--mainRed)]"
                />
                <h3 className="md:text-xl font-bold text-white">Fresh Bottle Watter</h3>
            </div>
          </div>
          <Link href="/clases" className="max-lg:mx-auto max-lg:w-fit">
            <Button content="OUR CLASSES" variant="gray"/>
            </Link>
        </div>
      </div>
    </section>
  );
};
