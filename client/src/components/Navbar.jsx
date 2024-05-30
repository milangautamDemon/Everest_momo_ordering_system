import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from './common/PrimaryButton';
import CommonIcon from './common/Icon';
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Logo from './common/Logo';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleToggle = () => setIsMenuOpen(!isMenuOpen);
    const handleMenuClose = () => setIsMenuOpen(false);

    const handleContactButton = () => navigate("/contact");

    return (
        <nav className="py-2 px-8 md:px-16 xl:px-32 relative bg-white-default border-b-2 border-white-light border-solid z-50">
            <div className="flex justify-between items-center relative">
                <div className="flex items-center">
                    <Logo />
                </div>

                <div className={`absolute top-14 w-full lg:relative lg:top-0 lg:w-auto lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="font-hachi lg:font-poppins w-full flex flex-col justify-center items-center gap-2 bg-black-dark py-6 text-black-light lg:text-black-dark lg:flex-row lg:bg-white lg:py-0 lg:bg-white-default xl:gap-6">
                        <li>
                            <NavLink
                                onClick={handleMenuClose}
                                className={({ isActive }) => isActive ? "text-lg font-bold capitalize lg:text-sm lg:font-light text-danger" : "text-lg font-bold capitalize lg:text-sm lg:font-light  hover:text-secondary"}
                                to="/aboutus"
                            >
                                about us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={handleMenuClose}
                                className={({ isActive }) => isActive ? "text-lg font-bold capitalize lg:text-sm lg:font-light text-danger-light" : "text-lg font-bold capitalize lg:text-sm lg:font-light  hover:text-secondary"}
                                to="/menu"
                            >
                                our menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={handleMenuClose}
                                className={({ isActive }) => isActive ? "text-lg font-bold capitalize lg:text-sm lg:font-light text-danger" : "text-lg font-bold capitalize lg:text-sm lg:font-light hover:text-secondary"}
                                to="/services"
                            >
                                our services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={handleMenuClose}
                                className={({ isActive }) => isActive ? "text-lg font-bold capitalize lg:text-sm lg:font-light text-danger" : "text-lg font-bold capitalize lg:text-sm lg:font-light  hover:text-secondary"}
                                to="/advice"
                            >
                                allergy advice
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="hidden lg:flex gap-8 justify-end items-center">
                    <div className="flex gap-4">
                        <CommonIcon iconName={FaFacebookF} />
                        <CommonIcon iconName={FaTiktok} />
                        <CommonIcon iconName={IoLogoInstagram} />
                    </div>
                    <div>
                        <PrimaryButton buttonName="contact us" onClick={handleContactButton} classFeature="bg-primary px-7 hover:bg-primary-dark" />
                    </div>
                </div>
                <div className="hamburgar-menu lg:hidden" onClick={handleToggle}>
                    <RxHamburgerMenu size={40} aria-label="Open Menu" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
