import { NavLink } from "react-router-dom";
import CommonIcon from "./common/Icon";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import Logo from "./common/Logo";

const Footer = () => {
  return (
    <footer className="mt-6 flex flex-col gap-1 bg-white-default px-8 pt-6 md:px-16 lg:pt-12 xl:px-32">
      <div className="flex flex-col lg:pb-10 xl:flex-row xl:justify-between">
        <div className="flex flex-col gap-6 lg:flex-row xl:w-4/5 xl:gap-32">
          <div className="flex flex-col gap-1 lg:w-2/4">
            <div className="flex justify-center lg:justify-start">
              <Logo />
            </div>
            <p className="text-center text-sm font-normal text-black-light lg:text-start">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="flex flex-col gap-1 lg:w-1/4 lg:items-start lg:gap-3">
            <h6 className="text-center text-lg font-bold capitalize text-secondary md:text-xl">
              momos
            </h6>
            <div className="flex justify-center gap-6 capitalize lg:flex-col lg:gap-1">
              <NavLink to={"/aboutus"} className="text-sm text-secondary">
                about us
              </NavLink>
              <NavLink to={"/menu"} className="text-sm text-secondary">
                our menu
              </NavLink>
              <NavLink to={"/services"} className="text-sm text-secondary">
                our service
              </NavLink>
              <NavLink to={"/contact"} className="text-sm text-secondary">
                contact us
              </NavLink>
            </div>
          </div>

          <div className="flex flex-col gap-1 lg:w-1/4 lg:items-start lg:gap-3">
            <h6 className="text-center text-lg font-bold capitalize text-secondary md:text-xl">
              legals
            </h6>
            <div className="flex justify-center gap-6 capitalize lg:flex-col lg:gap-1">
              <NavLink to={"/term"} className="text-sm text-secondary">
                term & conditions
              </NavLink>
              <NavLink to={"/policy"} className="text-sm text-secondary">
                Privacy Policy
              </NavLink>
              <NavLink to={"/support"} className="text-sm text-secondary">
                support
              </NavLink>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 border-t-2 border-white-light py-6 xl:mt-0 xl:border-none xl:py-0">
          <h6 className="text-lg font-bold capitalize text-secondary md:text-xl">
            follow us
          </h6>
          <div className="flex gap-3 xl:grid xl:grid-cols-3 xl:gap-2">
            <NavLink to={""} className="">
              <CommonIcon iconName={FaFacebookF} />
            </NavLink>
            <NavLink to={""} className="">
              <CommonIcon iconName={FaLinkedinIn} />
            </NavLink>
            <NavLink to={""} className="">
              <CommonIcon iconName={FaTwitter} />
            </NavLink>
            <NavLink to={""} className="">
              <CommonIcon iconName={AiFillYoutube} />
            </NavLink>
            <NavLink to={""} className="">
              <CommonIcon iconName={IoLogoInstagram} />
            </NavLink>
            <NavLink to={""} className="">
              <CommonIcon iconName={FaTiktok} />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-solid border-white-light pt-6 text-center capitalize text-black-light md:py-10">
        copyright: © 2023 everest momo pvt ltd. all right reserved
      </div>
    </footer>
  );
};

export default Footer;
