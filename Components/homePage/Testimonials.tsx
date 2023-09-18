import Image from "next/image";
import testimonial1 from "../../public/images/testimonials/testimonial-new.jpg";
import quote from "../../public/images/testimonials/quotes.png";
import logo1 from "../../public/images/testimonials/logo1.png";
import logo2 from "../../public/images/testimonials/logo2.png";
import logo3 from "../../public/images/testimonials/logo3.png";
import logo4 from "../../public/images/testimonials/logo4.png";
import logo5 from "../../public/images/testimonials/logo5.png";
import { MainTitle } from "../ui/MainTitle";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

export const Testimonials = () => {
  return (
    <section className="py-16 border-b-2 border-gray-200 border-solid">
      <div className="mx-10 xl:mx-36">
        <div className="w-fit mx-auto mb-16 md:mb-44">
          <MainTitle content="TESTIMONIALS" />
        </div>
        <div className="w-full border-gray-200 border-solid border-8 relative mb-20">
          <Image
            src={testimonial1}
            height={450}
            width={400}
            alt="TESTIMONIALS Image"
            className="max-lg:hidden absolute bottom-6 left-6 rounded-tr-[200px]"
          />
          <div className="testiMonialsBg bg-black m-6 py-10 px-6 md:px-16">
            <div className="lg:ml-[43%]">
            <Image
            src={quote}
            height={70}
            width={70}
            alt="TESTIMONIALS Image"
            className="mb-4"
          />
            <p className="text-gray-200 text-xs md:text-base mb-6">
            “I&apos;ve been a member of Gymate for the past 6 months and it has been an amazing experience. The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.”
            </p>
            <h3 className="text-white font-bold text-2xl mb-1">Harry Potter</h3>
            <span className="text-white text-sm">CEO of Hogwarts</span>
            </div>
            <span className="absolute bottom-10 right-10 text-xl flex justify-center items-center gap-2">
                <GoArrowLeft className="w-10 h-10 p-2 bg-white hover:bg-[var(--mainRed)] hover:text-white" />
                <GoArrowRight className="w-10 h-10 p-2 bg-white hover:bg-[var(--mainRed)] hover:text-white" />
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-2 lg:gap-8">
        <Image
            src={logo1}
            height={200}
            width={200}
            alt="TESTIMONIALS Image"
            className="hover:invert duration-200 max-md:w-32"
          />
        <Image
            src={logo2}
            height={200}
            width={200}
            alt="TESTIMONIALS Image"
            className="hover:invert duration-200 max-md:w-32"
          />
        <Image
            src={logo3}
            height={200}
            width={200}
            alt="TESTIMONIALS Image"
            className="hover:invert duration-200 max-md:w-32"
          />
        <Image
            src={logo4}
            height={200}
            width={200}
            alt="TESTIMONIALS Image"
            className="hover:invert duration-200 max-md:w-32"
          />
        <Image
            src={logo5}
            height={200}
            width={200}
            alt="TESTIMONIALS Image"
            className="hover:invert duration-200 max-md:w-32"
          />
        </div>
      </div>
    </section>
  );
};
