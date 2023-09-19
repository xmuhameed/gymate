import { Landing } from "@/Components/Landing";
import { H2 } from "@/Components/ui/H2";
import React from "react";
import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterestAlt, BiLogoTwitter } from "react-icons/bi";

const contact = () => {
  return (
    <>
      <Landing mainHeading="Contact Us" />
      <section className="w-sreen py-20">
        <div className="flex justify-center items-center mx-8 xl:mx-28 mb-20">
          <div className="md:w-1/2 md:px-8">
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
              <div className="flex justify-start items-center gap-2 mt-6">
                <div className="text-3xl bg-white text-black rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoFacebook className="" /></div>
                <div className="text-3xl bg-white text-black rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoTwitter className="" /></div>
                <div className="text-3xl bg-white text-black rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoInstagram className="" /></div>
                <div className="text-3xl bg-white text-black rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoPinterestAlt className="" /></div>
              </div>
            </div>
          </div>
          </div>
          <div className="md:w-1/2"></div>
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
