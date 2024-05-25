
import { NavLink } from 'react-router-dom';
import CommonIcon from './common/Icon';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter  } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoInstagram   } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import Logo from './common/Logo';


const Footer = () => {
  return (

        <footer className="mt-6 pt-6 lg:pt-12 px-8 md:px-16 xl:px-32 bg-white-default flex border-t-2 border-white-light flex-col gap-1" >
            <div className="flex flex-col xl:flex-row xl:justify-between lg:pb-10">
                <div className="flex flex-col gap-6 lg:flex-row xl:w-4/5 xl:gap-32">

                    <div className="flex flex-col gap-1 lg:w-2/4">
                        <div className="flex justify-center lg:justify-start">
                            <Logo />
                        </div>
                        <p className='text-center lg:text-start text-black-light'>
                        Here you can use rows and columns to organize your footer
                        content. Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                        </p>
                    </div>

                    <div className='flex flex-col gap-1 lg:w-1/4 lg:items-start lg:gap-3'>
                        <h6 className="text-lg md:text-xl capitalize font-bold text-secondary text-center">momos</h6>
                        <div className="flex gap-6 justify-center lg:flex-col lg:gap-1 capitalize">
                            <NavLink to={"/aboutus"} className="text-sm text-secondary-light">about us</NavLink>
                            <NavLink to={"/menu"} className="text-sm text-secondary-light">our menu</NavLink>
                            <NavLink to={"/services"} className="text-sm text-secondary-light">our service</NavLink>
                            <NavLink to={"/contact"} className="text-sm text-secondary-light">contact us</NavLink>
                        </div>
                    </div>

                    <div className='flex flex-col gap-1 lg:w-1/4 lg:items-start lg:gap-3'>
                        <h6 className="text-lg md:text-xl capitalize font-bold text-secondary text-center">legals</h6>
                        <div className="flex gap-6 justify-center lg:flex-col lg:gap-1 capitalize">
                            <NavLink to={"/term"} className="text-sm text-secondary-light">term & conditions</NavLink>
                            <NavLink to={"/policy"} className="text-sm text-secondary-light">Privacy Policy</NavLink>
                            <NavLink to={"/support"} className="text-sm text-secondary-light">support</NavLink>
                        </div>
                    </div>     
                </div>
                <div className="flex flex-col gap-3 items-center py-6 border-t-2 mt-8 border-white-light xl:border-none xl:py-0 xl:mt-0">
                    <h6 className="text-lg md:text-xl capitalize font-bold text-secondary">follow us</h6>
                    <div className="flex gap-3 xl:grid xl:grid-cols-3 xl:gap-2">
                        <NavLink to={""} className="">
                            <CommonIcon iconName={FaFacebookF} />
                        </NavLink>
                        <NavLink to={""} className="">
                            <CommonIcon iconName={FaLinkedinIn} />
                        </NavLink>
                        <NavLink to={""} className="">
                            <CommonIcon iconName={ FaTwitter } />
                        </NavLink>
                        <NavLink to={""} className="">
                            <CommonIcon iconName={AiFillYoutube} />
                        </NavLink>
                        <NavLink to={""} className="">
                            <CommonIcon iconName={IoLogoInstagram  } />
                        </NavLink>
                        <NavLink to={""} className="">
                            <CommonIcon iconName={FaTiktok} />
                        </NavLink>
                    </div>
                </div>
            </div>

            
            <div className="pt-6 md:py-10 border-t-2 border-solid border-white-light text-black-light capitalize text-center" >
                copyright:  © 2023 everest momo pvt ltd. all right reserved 
            </div>
        </footer>

  )
}

export default Footer;