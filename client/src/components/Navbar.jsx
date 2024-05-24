
import {NavLink} from "react-router-dom";
import PrimaryButton from './common/PrimaryButton';
import CommonIcon from './common/Icon';
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram   } from "react-icons/io";
import Logo from './common/Logo';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);

  return (
   <nav className="py-2 px-8 md:px-16 xl:px-32 bg-white-default border-b-2 border-white-light border-solid">
        <div className="flex justify-between items-center relative">
            <div className="flex items-center">
                <Logo />
            </div>

            <div className={`absolute top-16 w-full lg:relative lg:top-0 lg:w-auto lg:flex lg:items-center ${toggle? 'hidden' : 'block'}`}>
                <ul className="w-full flex flex-col justify-center items-center gap-4 bg-black-dark py-6 text-black-light lg:text-secondary-light lg:flex-row lg:bg-white lg:py-0 lg:bg-white-default xl:gap-6">
                    <li className="">
                        <NavLink
                        to="/" className="text-lg font-bold capitalize lg:text-sm lg:font-semibold xl:text-lg xl:font-light"
                        >
                        about us
                        </NavLink>
                    </li>
                    <li className="">
                    <NavLink
                        to="/" className="text-lg font-bold capitalize lg:text-sm lg:font-semibold xl:text-lg xl:font-light"
                        >
                        our menu
                        </NavLink>
                    </li>
                    <li className="">
                    <NavLink
                        to="/" className="text-lg font-bold capitalize lg:text-sm lg:font-semibold xl:text-lg xl:font-light"
                        >
                        our services
                        </NavLink>
                    </li>
                    <li className="">
                    <NavLink
                        to="/" className="text-lg font-bold capitalize lg:text-sm lg:font-semibold xl:text-lg xl:font-light"
                        >
                        allergy advice
                        </NavLink>
                    </li>
                </ul>
            </div>
            
            <div className="invisible lg:visible flex gap-8 justify-end items-center">
                <div className="flex gap-4">
                   <CommonIcon iconName={FaFacebookF} />
                   <CommonIcon iconName={FaTiktok} />
                   <CommonIcon iconName={IoLogoInstagram } />
                </div>
                <div className="">
                    <PrimaryButton buttonName="contact us" classFeature="" />
                </div>
            </div>
            <div className="hamburgar-menu lg:hidden" onClick={handleToggle}>
                <RxHamburgerMenu size={40} aria-label="Open Menu" />
            </div>
        </div>
    </nav>



  )
}

export default Navbar