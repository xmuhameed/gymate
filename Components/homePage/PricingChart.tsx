import Image from "next/image";
import { MainTitle } from "../ui/MainTitle";
import img1 from "../../public/images/pricing/img1.jpg";
import img2 from "../../public/images/pricing/img2.jpg";
import img3 from "../../public/images/pricing/img3.jpg";
import { Button } from "../ui/Button";
import Link from "next/link";

export const PricingChart = () => {
  return (
    <section className="pricingChartBg py-20">
      <div className="mx-10 xl:mx-36">
        <div className="w-fit mx-auto">
          <MainTitle content="PRICING CHART" />
        </div>
        <h2 className="font-bold text-4xl w-fit mx-auto my-6">
          Exclusive Pricing Plan
        </h2>
        <p className="w-fit mx-auto text-gray-500 text-center mb-10">
          Gymat an unknown printer took a galley of type and scrambled
          <br />
          make a type specimen book.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="bg-white shadow-xl">
            <div className="grayscale hover:grayscale-0 duration-500">
              <div className="relative after:duration-500 after:content-['Beginners'] after:font-bold after:text-xl after:bg-white after:text-gray-800 hover:after:text-[var(--mainRed)] after:px-12 after:pt-3 after:absolute after:left-[50%] after:-translate-x-[50%] after:bottom-0">
                <Image src={img1} alt="Pricing Chart" className="w-full" />
              </div>
              <div className="py-8">
                <span className="mb-6 mx-auto w-fit block font-bold text-6xl font-sans relative before:content-['$'] after:content-['p/m'] before:absolute after:absolute before:font-light after:font-light before:text-3xl after:text-3xl before:text-gray-500 after:text-gray-500 before:top-0 before:-left-6 after:bottom-0 after:-right-16">
                  39
                </span>
                <ul className="text-center gap-4 flex flex-col my-4 text-lg">
                  <li className="text-gray-500">Free Hand</li>
                  <li className="text-gray-500">Gym Fitness</li>
                  <li className="text-gray-500">Weight Loss</li>
                  <li className="text-gray-500">Personal Trainer</li>
                  <li className="text-gray-500">Cycling</li>
                </ul>
              </div>
            </div>
                <Link href="/contact" className="mx-auto w-fit block mb-10">
                  <Button content="PURCHASE NOW" variant="red" />
                </Link>
          </div>
          <div className="bg-white shadow-xl">
            <div className="grayscale hover:grayscale-0 duration-500">
              <div className="relative after:duration-500 after:content-['Beginners'] after:font-bold after:text-xl after:bg-white after:text-gray-800 hover:after:text-[var(--mainRed)] after:px-12 after:pt-3 after:absolute after:left-[50%] after:-translate-x-[50%] after:bottom-0">
                <Image src={img2} alt="Pricing Chart" className="w-full" />
              </div>
              <div className="py-8">
                <span className="mb-6 mx-auto w-fit block font-bold text-6xl font-sans relative before:content-['$'] after:content-['p/m'] before:absolute after:absolute before:font-light after:font-light before:text-3xl after:text-3xl before:text-gray-500 after:text-gray-500 before:top-0 before:-left-6 after:bottom-0 after:-right-16">
                  65
                </span>
                <ul className="text-center gap-4 flex flex-col my-4 text-lg">
                  <li className="text-gray-500">Free Hand</li>
                  <li className="text-gray-500">Gym Fitness</li>
                  <li className="text-gray-500">Weight Loss</li>
                  <li className="text-gray-500">Personal Trainer</li>
                  <li className="text-gray-500">Cycling</li>
                </ul>
              </div>
            </div>
                <Link href="/contact" className="mx-auto w-fit block mb-10">
                  <Button content="PURCHASE NOW" variant="red" />
                </Link>
          </div>
          <div className="bg-white shadow-xl">
            <div className="grayscale hover:grayscale-0 duration-500">
              <div className="relative after:duration-500 after:content-['Beginners'] after:font-bold after:text-xl after:bg-white after:text-gray-800 hover:after:text-[var(--mainRed)] after:px-12 after:pt-3 after:absolute after:left-[50%] after:-translate-x-[50%] after:bottom-0">
                <Image src={img3} alt="Pricing Chart" className="w-full" />
              </div>
              <div className="py-8">
                <span className="mb-6 mx-auto w-fit block font-bold text-6xl font-sans relative before:content-['$'] after:content-['p/m'] before:absolute after:absolute before:font-light after:font-light before:text-3xl after:text-3xl before:text-gray-500 after:text-gray-500 before:top-0 before:-left-6 after:bottom-0 after:-right-16">
                  100
                </span>
                <ul className="text-center gap-4 flex flex-col my-4 text-lg">
                  <li className="text-gray-500">Free Hand</li>
                  <li className="text-gray-500">Gym Fitness</li>
                  <li className="text-gray-500">Weight Loss</li>
                  <li className="text-gray-500">Personal Trainer</li>
                  <li className="text-gray-500">Cycling</li>
                </ul>
              </div>
            </div>
                <Link href="/contact" className="mx-auto w-fit block mb-10">
                  <Button content="PURCHASE NOW" variant="red" />
                </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
