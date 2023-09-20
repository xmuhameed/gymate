import Image from 'next/image'
import Logo from '../public/images/logo/logo-footer.svg'
import { BiLogoFacebook, BiLogoInstagram, BiLogoPinterestAlt, BiLogoTwitter } from 'react-icons/bi'
import { H2 } from './ui/H2'

export const Footer = () => {
  return (
    <footer className="bg-white mx-10 xl:mx-36">
    <div className="container page-padding py-16">
      {/* footer div all */}
      <div className="flex justify-between max-md:flex-col max-md:items-center max-md:text-center max-md:gap-16 !text-left">
        {/* logo side */}
        <div className="flex flex-col md:w-1/3 gap-2">
          <Image src={Logo} alt="footer_logo" className="w-44 mb-2" />
          <p className="text-[15px] font-medium text-[#646464]">
            Take your health and body to the next level with our
            comprehensive program designed to help you reach your fitness
            goals.
          </p>
          {/* socials */}
          <div className="flex justify-start items-center gap-1 mt-2">
                <div className="text-3xl bg-white text-[#646464] rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoFacebook className="" /></div>
                <div className="text-3xl bg-white text-[#646464] rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoTwitter className="" /></div>
                <div className="text-3xl bg-white text-[#646464] rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoInstagram className="" /></div>
                <div className="text-3xl bg-white text-[#646464] rounded-full p-2 hover:bg-[var(--mainRed)] hover:text-white duration-200" ><BiLogoPinterestAlt className="" /></div>
              </div>
          <p className="text-[16px] font-medium text-[#646464]">
            Privacy Policy | © {new Date().getFullYear()} Gymate <br />{" "}
            Design by{" "}
            <a
              target="_blank"
              rel="MohamedMostafa"
              href="https://www.mohamedmostafa.me/"
            >
              Mohamed Mostafa
            </a>
          </p>
        </div>

        {/* middle div */}
        <div className="flex flex-col gap-5 relative max-md:hidden">
          <H2>Our Classes</H2>

          <p className="text-[16px] mt-2 hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
            Fitness Classes
          </p>
          <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
            Aerobics Classes
          </p>
          <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
            Power Yoga
          </p>
          <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
            Learn Machines
          </p>
          <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#646464] font-medium hover:font-bold">
            Full-body Strength
          </p>
        </div>

        {/* right div */}
        <div className="flex flex-col gap-5 relative max-md:hidden">
          <H2>Working Hours</H2>

          <p className="text-[16px] mt-2 text-[#646464] font-bold">
            Monday - Friday:
          </p>
          <p className="text-[16px] text-[#646464] font-medium">
            7:00am - 21:00pm
          </p>
          <p className="text-[16px] text-[#646464] font-bold">Saturday:</p>
          <p className="text-[16px] text-[#646464] font-medium">
            7:00am - 19:00pm
          </p>
          <p className="text-[16px] text-[#646464] font-bold ">
            Sunday - Closed
          </p>
        </div>

        {/* middle div */}
        <span></span>
      </div>
    </div>
  </footer>
  )
}
