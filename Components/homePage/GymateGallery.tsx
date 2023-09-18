import Image from "next/image";
import { MainTitle } from "../ui/MainTitle";
import gymateGalleryImg1 from "../../public/images/gallery/img1.jpg";
import gymateGalleryImg2 from "../../public/images/gallery/img2.jpg";
import gymateGalleryImg3 from "../../public/images/gallery/img3.jpg";
import gymateGalleryImg4 from "../../public/images/gallery/img4.jpg";
import gymateGalleryImg5 from "../../public/images/gallery/img5.jpg";

export const GymateGallery = () => {
  return (
    <section className="py-20 max-md:hidden gymateGalleryBg">
      <div className="mx-10 xl:mx-36">
        <div className="w-fit mx-auto">
          <MainTitle content="GYMAT GALLERY" />
        </div>
        <h2 className="font-bold text-4xl w-fit mx-auto my-6">
          Our Workplace Gallery
        </h2>
        <p className="w-fit mx-auto text-gray-500 text-sm text-center mb-10">
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture.
          <br /> Attracts talents and showcases company&apos;s work atmosphere.
        </p>
          <div className="grid grid-cols-4 grid-rows-3 gap-1 w-full h-[80vh]">
            <div className="col-span-2 row-span-2 overflow-hidden">
              <Image
                src={gymateGalleryImg1}
                className=""
                alt="gymate gallery image"
              />
            </div>
            <div className="col-span-2 row-span-1 overflow-hidden">
              <Image
                src={gymateGalleryImg2}
                className="relative -top-36"
                alt="gymate gallery image"
              />
            </div>
            <div className="col-span-2 row-span-2 overflow-hidden">
              <Image
                src={gymateGalleryImg5}
                className="w-full"
                alt="gymate gallery image"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
              <Image
                src={gymateGalleryImg3}
                className=""
                alt="gymate gallery image"
              />
            </div>
            <div className="col-span-1 row-span-1 overflow-hidden">
              <Image
                src={gymateGalleryImg4}
                className=""
                alt="gymate gallery image"
              />
            </div>
          </div>
          {/* <div className="grid grid-cols-4 grid-rows-4 gap-2 w-full h-[80vh]">
            <div className="col-span-2 row-span-2 overflow-hidden">
              <Image
                src={gymateGalleryImg1}
                className=""
                alt="gymate gallery image"
              />
            </div>
            <div className="col-span-2 row-start-1 overflow-hidden">
              <Image
                src={gymateGalleryImg3}
                className=""
                alt="gymate gallery image"
              />
            </div>
            <div className="col-span-1 row-start-1 overflow-hidden">
              <Image
                src={gymateGalleryImg4}
                className=""
                alt="gymate gallery image"
              />
            </div>
          </div> */}
      </div>
    </section>
  );
};
