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

export const Posts = () => {
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
  return <>{
    blogData.map((data) => {
        return (
            <div key={data.id} className="w-full my-20">
                <div className="w-full relative">
                    <Image src={data.img} alt='blog img' />
                </div>
                <div className="text-gray-500">
                    <div className="mt-3 flex justify-start items-center">
                        <BiSolidLayer className="text-[var(--mainRed)] text-xl mr-1" />
                        by <span className="font-bold mx-1">{data.by}</span> | {data.time} | {data.categorie}
                    </div>
                    <h2 className="font-bold text-4xl my-5 text-black">{data.title}</h2>
                    <p className="mb-16">{data.desc}</p>
                    <Link href="/blog" className="">
                        <Button content='Purchase Now' variant='red'/>
                    </Link>
                </div>
            </div>
        )
    })
  }
  </>;
};

