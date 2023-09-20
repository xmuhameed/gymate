import img1 from '../../public/images/blogpage/1.jpg'
import img2 from '../../public/images/blogpage/2.jpg'
import img3 from '../../public/images/blogpage/3.jpg'
import img4 from '../../public/images/blogpage/4.jpg'
import img5 from '../../public/images/blogpage/5.jpg'
import img6 from '../../public/images/blogpage/6.jpg'
import img7 from '../../public/images/blogpage/7.jpg'
import Image from 'next/image'
import { BiSolidLayer } from 'react-icons/bi'
import { Button } from '../ui/Button'
import Link from 'next/link'
import { H2 } from '../ui/H2'
import { AiOutlineSearch } from 'react-icons/ai'

export const BlogSideBar = () => {
    const blogData = [
        {
          id: 1,
          img: img1,
          title: "Yoga For Everyone in 2022",
          by: "Admin",
          time: "March 22, 2022",
          categorie: "Yoga",
          desc: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley."
        },
        {
          id: 2,
          img: img2,
          title: "Getting Back Into CrossFit After Vacation",
          by: "Admin",
          time: "March 11, 2022",
          categorie: "Yoga",
          desc: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley."
        },
        {
          id: 3,
          img: img3,
          title: "Meet Fitness Ambassador Grace",
          by: "Admin",
          time: "March 10, 2022",
          categorie: "Yoga",
          desc: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley."
        },
        {
          id: 4,
          img: img4,
          title: "The Best are European Materls Direct",
          by: "Admin",
          time: "March 08, 2022",
          categorie: "Yoga",
          desc: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley."
        },
        {
          id: 5,
          img: img5,
          title: "Give your Fitness a Boost with our Gym",
          by: "Admin",
          time: "March 05, 2022",
          categorie: "Yoga",
          desc: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley."
        },
        {
          id: 6,
          img: img6,
          title: "How to Get Fit Your Kids Moving Throughout The Summer",
          by: "Admin",
          time: "March 04, 2022",
          categorie: "Yoga",
          desc: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley."
        },
        {
          id: 7,
          img: img7,
          title: "Give your fitness a boost with our new gym challenge",
          by: "Admin",
          time: "March 02, 2022",
          categorie: "Yoga",
          desc: "Authoritatively disseminate multimedia based total linkage through market-driven methodolContinually transform integrated results vis-a-vis multidisciplinary manufacture Appropriately foster fullresearched innovation rather than backend supply. when an unknown printer took a galley."
        },
      ]
  return <>
          <div className='mt-20'>
          {/* form */}
          <form className="flex">
            <input
              className="border-solid border-[1px] text-gray-600 text-base font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
              type="search"
              placeholder="Search..."
            ></input>
            <button type="submit" className='grid place-content-center bg-[#ff0336] text-white text-3xl py-3 px-3 rounded-br-xl rounded-tr-xl pt-[18px]'>
              <AiOutlineSearch  />
            </button>
          </form>

          {/* categories */}
          <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
            <H2>Categories</H2>
            <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
              <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                <p>
                  <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                  &nbsp; Body Building
                </p>
                <span>(4)</span>
              </li>

              <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                <p>
                  <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                  &nbsp; Boxing
                </p>
                <span>(4)</span>
              </li>

              <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                <p>
                  <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                  &nbsp; Crossfit
                </p>
                <span>(4)</span>
              </li>

              <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                <p>
                  <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                  &nbsp; Fitness
                </p>
                <span>(4)</span>
              </li>

              <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                <p>
                  <i className="text-[13px] fa-solid fa-chevron-right"></i>
                  &nbsp; Meditation
                </p>
                <span>(4)</span>
              </li>

              <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                <p>
                  <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                  &nbsp; Yoga
                </p>
                <span>(4)</span>
              </li>
            </ul>
          </div>
          {/* recent posts */}
          <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
            <H2>Recent Posts</H2>
            <div className="flex flex-col gap-7 mt-6">
              {/*  */}
              {blogData.map((data) => {
                return (
                  <div key={data.id} className="flex gap-8">
                  <Image src={data.img} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      {data.time}
                    </p>
                    <p className="text-[16px] text-black hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      {data.title}
                    </p>
                  </div>
                </div>
                )
              })}
          </div>
          </div>
          {/* popular tags */}
          <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
            <H2>Popular Tags</H2>
            <div className="flex gap-3 mt-7 text-[16px] text-[#646464] font-medium flex-wrap">
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Crossfit
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Fitness
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Gym
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Meditation
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Running
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Workout
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Yoga
              </p>
              <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                #Boxing
              </p>
            </div>
          </div>
          {/* banner */}
          <div className="blog-banner w-full h-[56rem] relative">
            <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
              gymat
            </p>
            <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[18rem] h-[60px]"></span>
            <div className="text-white flex flex-col absolute top-[10rem] left-10">
              <p className="text-[64px] font-bold">34%</p>
              <p className="text-[20px] font-bold -mt-[10px]">
                Flat Discount
              </p>
            </div>
          </div>
        </div>
        </>;
};

