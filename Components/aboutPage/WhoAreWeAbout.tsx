import Image from "next/image";
import girlImg from "../../public/images/who-we-are/girl-run.png";
import { MainTitle } from "@/Components/ui/MainTitle";
import { Button } from "@/Components/ui/Button";
import Link from "next/link";

export const WhoAreWeAbout = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-36 mx-10 xl:mx-36">
      <div className="lg:w-[50%] lg:pr-9 max-lg:text-center">
        <div className="max-lg:mx-auto max-lg:w-fit">
          <MainTitle content="Who We Are" width={200} height={200} />
        </div>
        <h2 className="font-bold text-4xl my-5">
          We Will Give You Strength and Health
        </h2>
        <p className="text-gray-500 mb-10">
          At Gymate, we are dedicated to helping you achieve the body of your
          dreams. Our expert trainers and nutritionists will work with you to
          create a personalized fitness and nutrition plan that helps you reach
          your specific goals.
        </p>
        <Link href="/contact">
          <Button content="Contact Us" variant="red" />
        </Link>
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
  );
};
