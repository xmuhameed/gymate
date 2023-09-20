import { Landing } from "@/Components/Landing";
import { H2 } from "@/Components/ui/H2";
import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterestAlt, BiLogoTwitter } from "react-icons/bi";

const contact = () => {
  return (
    <>
      <Landing mainHeading="Contact Us" />
      <section className="w-sreen py-20">
        <div className="flex justify-center items-center flex-col md:flex-row mx-8 xl:mx-28 mb-20">
          <div className="w-full md:w-1/2 md:px-8">
          <h1 className="text-xl md:text-3xl font-bold mb-6 md:mb-10">We are here for help you! To Shape Your Body.</h1>
          <p className="text-gray-500 max-md:text-xs">At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
            <div className="">
              <H2 >New York City, USA</H2>
              <p className="text-gray-500 mt-6 max-md:text-sm">85 Briston Mint Street,
                  <br />London, E1 8LG, USA</p>
            </div>
            <div className="">
              <H2>Opening Hours</H2>
              <p className="text-gray-500 mt-6 max-md:text-sm">85 Briston Mint Street,
                  <br />London, E1 8LG, USA</p>
            </div>
            <div className="">
              <H2>Information</H2>
              <p className="text-gray-500 mt-6 max-md:text-sm">85 Briston Mint Street,
                  <br />London, E1 8LG, USA</p>
            </div>
            <div className="">
              <H2>Follow Us On</H2>
              <div className="flex justify-center md:justify-start items-center gap-1 mt-6">
                <div className="text-3xl bg-white text-black rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoFacebook className="" /></div>
                <div className="text-3xl bg-white text-black rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoTwitter className="" /></div>
                <div className="text-3xl bg-white text-black rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoInstagram className="" /></div>
                <div className="text-3xl bg-white text-black rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoPinterestAlt className="" /></div>
              </div>
            </div>
          </div>
          </div>
          <div className="w-full md:w-1/2 md:px-8 max-md:mt-20 bg-slate-50">
            <H2 larg={true}>Leave Us Your Info</H2>
            <form className="flex flex-col mt-5 pt-[30px] pr-[50px] pb-[50px] bg-[#f8f8f8] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full">
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
            ></input>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
            ></input>
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8">
              <option>Select Class</option>
              <option>Body Building</option>
              <option>Boxing</option>
              <option>Running</option>
              <option>Fitness</option>
              <option>Yoga</option>
              <option>Workout</option>
              <option>Katate</option>
              <option>Meditation</option>
              <option>Cycling</option>
            </select>
            <textarea
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></textarea>
            <button
              type="submit"
              disabled
              className="text-white bg-[var(--mainRed)] cursor-pointer w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
            >
              submit now
            </button>
          </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3140510.597796714!2d-104.854752!3d39.764244000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1695144392557!5m2!1sen!2srs"
          title="responsive-iframe"
          width="600"
          height="450"
          style={{ width: "100%", height: "45rem", border: "0px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};
export default contact;
