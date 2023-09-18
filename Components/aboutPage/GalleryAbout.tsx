import Image from "next/image";
import img3 from "../../public/images/AboutPage/3.jpg";
import img4 from "../../public/images/AboutPage/4.jpg";
import mountain from "../../public/images/AboutPage/mountain.png";
import target from "../../public/images/AboutPage/target.png";

export const GalleryAbout = () => {
  return (
    <section className="py-20">
      <div className="mx-10 xl:mx-36">
        <div className="flex justify-center items-center max-lg:flex-col">
          <div className="lg:w-1/2 grid place-content-center gap-5 text-center p-4 md:p-20">
            <Image src={target} alt="Gymate Gallery" className="mx-auto w-1/5" />
            <h3 className="font-bold text-2xl">Our History</h3>
            <p className="text-gray-700 text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              Exercitation veniam consequat.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image src={img3} alt="Gymate Gallery" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center max-lg:flex-col-reverse">
          <div className="lg:w-1/2">
            <Image src={img4} alt="Gymate Gallery" className="w-full" />
          </div>
          <div className="lg:w-1/2 grid place-content-center gap-5 text-center p-4 md:p-20">
            <Image src={mountain} alt="Gymate Gallery" className="mx-auto w-1/5" />
            <h3 className="font-bold text-2xl">Our History</h3>
            <p className="text-gray-700 text-base">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit
              Exercitation veniam consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
