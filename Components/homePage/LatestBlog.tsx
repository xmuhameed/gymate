import React from "react";
import { MainTitle } from "../ui/MainTitle";
import Link from "next/link";
import { Button } from "../ui/Button";

export const LatestBlog = () => {
  return (
    <section className="py-20">
      <div className="mx-10 xl:mx-36">
        <div className="w-fit mx-auto">
          <MainTitle content="LATEST BLOG" />
        </div>
        <h2 className="font-bold text-4xl w-fit mx-auto bt-6 mb-4">
        Our Recent News
        </h2>
        <p className="w-fit mx-auto text-gray-500 text-center mb-10">
        Gymat an unknown printer took a galley of type and scrambled
        <br />make a type specimen book.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-content-center gap-5 h-fit">
            <div className="shadow-xl p-10">
                <span className="mb-8 border-solid border-2 border-gray-700 rounded-3xl font-bold py-1 px-4">22.03.2022</span>
                <h3 className="font-bold text-xl my-6">Yoga For Everyone in 2023</h3>
                <p className="text-gray-600 mb-9">This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.</p>
                <Link href="/blog" className="mt-4">
                    <Button content="READ MORE" variant="red" />
                </Link>
            </div>
            <div className="shadow-xl p-10">
                <span className="mb-8 border-solid border-2 border-gray-700 rounded-3xl font-bold py-1 px-4">13.09.2022</span>
                <h3 className="font-bold text-xl my-6">Getting Back Into CrossFit After Vacation</h3>
                <p className="text-gray-600 mb-9">Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success..</p>
                <Link href="/blog" className="mt-4">
                    <Button content="READ MORE" variant="red" />
                </Link>
            </div>
            <div className="shadow-xl p-10">
                <span className="mb-8 border-solid border-2 border-gray-700 rounded-3xl font-bold py-1 px-4">28.06.2022</span>
                <h3 className="font-bold text-xl my-6">Meet Fitness Ambassador Grace</h3>
                <p className="text-gray-600 mb-9">Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.</p>
                <Link href="/blog" className="mt-4">
                    <Button content="READ MORE" variant="red" />
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
};
