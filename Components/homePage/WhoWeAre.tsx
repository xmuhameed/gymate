import progresion from "../../public/images/who-we-are/progresion.png";
import workout from "../../public/images/who-we-are/workout.png";
import nutritions from "../../public/images/who-we-are/nutritions.png";
import girlImg from "../../public/images/who-we-are/girl-run.png";
import weightlifter from "../../public/images/who-we-are/weightlifter.png";
import equpments from "../../public/images/who-we-are/equpments.png";
import gymImg from "../../public/images/who-we-are/gym.png";
import Image from "next/image";
import { MainTitle } from "../ui/MainTitle";
import { Button } from "../ui/Button";

export const WhoWeAre = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 place-content-around absolute -mt-12 mb-10 mx-10 xl:mx-36">
        <div className="bgHover xl-w-[25vw] bg-white shadow-2xl rounded-tl-[40px] rounded-br-[40px] text-black hover:text-white text-center grid place-content-center py-20 px-8">
          <Image
            src={progresion}
            width={75}
            height={75}
            alt="img"
            className="mx-auto"
          />
          <h2 className="font-bold text-2xl mt-2 mb-4">PROGRESSION</h2>
          <p className="">
            Our team of experts will work with you to create a customized plan
            that helps you achieve success one step at a time.
          </p>
        </div>
        <div className="bgHover xl-w-[25vw] bg-white shadow-2xl rounded-tl-[40px] rounded-br-[40px] text-black hover:text-white text-center grid place-content-center py-20 px-8">
          <Image
            src={workout}
            width={75}
            height={75}
            alt="img"
            className="mx-auto"
          />
          <h2 className="font-bold text-2xl mt-2 mb-4">WORKOUT</h2>
          <p className="">
            With a variety of workouts to choose from, you&apos;ll have
            everything you need to get into the best shape of your life.
          </p>
        </div>
        <div className="bgHover xl-w-[25vw] bg-white shadow-2xl rounded-tl-[40px] rounded-br-[40px] text-black hover:text-white text-center grid place-content-center py-20 px-8">
          <Image
            src={nutritions}
            width={75}
            height={75}
            alt="img"
            className="mx-auto"
          />
          <h2 className="font-bold text-2xl mt-2 mb-4">NUTRITIONS</h2>
          <p className="">
            Our team will work with you to create a personalized meal plan that
            helps you reach your specific health goals.
          </p>
        </div>
      </div>
      <section className="min-h-screen bg-cover bg-center whoAreWeBg">
        <div className="mx-10 xl:mx-36 pt-[69rem] sm:pt-[63rem] md:pt-[62rem] lg:pt-80 ">
          <div className="flex justify-center items-center mt-16 mb-72">
            <div className="lg:w-[50%] md:pr-9 max-md:text-center">
              <div className="max-md:mx-auto max-md:w-fit">
                <MainTitle content="Who We Are" width={200} height={200} />
              </div>
              <h2 className="font-bold text-4xl my-5">
                Take Your Health And Body To Next Level
              </h2>
              <p className="text-gray-500 md:text-lg">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              <div className="flex max-sm:flex-col justify-center items-center sm:divide-x max-sm:divide-y divide-gray-400 mt-10 mb-20">
                <div className="px-7 py-10 grid place-content-center text-center gap-3">
                  <Image
                    src={weightlifter}
                    width={70}
                    height={70}
                    alt="img"
                    className="mx-auto"
                  />
                  <h3 className="font-bold text-lg">PROFESSIONAL TRAINERS</h3>
                </div>
                <div className="px-7 py-10 grid place-content-center text-center gap-3">
                  <Image
                    src={equpments}
                    width={70}
                    height={70}
                    alt="img"
                    className="mx-auto"
                  />
                  <h3 className="font-bold text-lg">MODERN EQUIPMENTS</h3>
                </div>
                <div className="px-7 py-10 grid place-content-center text-center gap-3">
                  <Image
                    src={gymImg}
                    width={70}
                    height={70}
                    alt="img"
                    className="mx-auto"
                  />
                  <h3 className="font-bold text-lg">FANCY GYM MACHINES</h3>
                </div>
              </div>
              <div className="max-md:mx-auto max-md:w-fit">
                <Button content="TAKE A TOUR" variant="gray" />
              </div>
            </div>
            <div className="whoarediv bg-no-repeat w-[50%] h-[96vh] grid place-content-center relative max-lg:hidden">
              <Image
                src={girlImg}
                width={600}
                height={600}
                alt="img"
                className="whoareimg mx-auto relative"
              />
              <span className="whoarespan absolute top-[45%] right-40 2xl:right-48 z-10 w-20 h-20"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
