'use client';
import { Landing } from "@/Components/Landing";
import img1 from "../../../public/images/GalleryPage/10.jpg";
import img2 from "../../../public/images/GalleryPage/11.jpg";
import img3 from "../../../public/images/GalleryPage/12.jpg";
import img4 from "../../../public/images/GalleryPage/3.jpg";
import img5 from "../../../public/images/GalleryPage/4.jpg";
import img6 from "../../../public/images/GalleryPage/5.jpg";
import img7 from "../../../public/images/GalleryPage/6.jpg";
import img8 from "../../../public/images/GalleryPage/7.jpg";
import img9 from "../../../public/images/GalleryPage/8.jpg";
import Image from "next/image";
import { PageSwitcher } from "@/Components/galleryPage/PageSwitcher";


const Page = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <>
      <Landing mainHeading="Gallery" />
      <section className="w-sreen mx-6 xl:mx-36 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => {
            return (
              <div key={index} className="relative">
                <Image src={image} alt="Gallery Image" className="w-full" />
              </div>
            );
          })}
        </div>
          <PageSwitcher />
      </section>
    </>
  );
};
export default Page;
