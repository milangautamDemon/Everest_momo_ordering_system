import { NavLink, useNavigate } from "react-router-dom";
import PrimaryButton from "./common/PrimaryButton";
import CommonIcon from "./common/Icon";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Logo from "./common/Logo";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);

  const handleContactButton = () => navigate("/contact");

  return (
    <nav className="relative z-50 border-b-2 border-solid border-white-light bg-white-default px-8 py-2 md:px-16 xl:px-32">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        <div
          className={`absolute top-14 w-full lg:relative lg:top-0 lg:flex lg:w-auto lg:items-center ${isMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="lg:bg-white flex w-full flex-col items-center justify-center gap-2 bg-black-dark py-6 font-hachi text-black-light lg:flex-row lg:bg-white-default lg:py-0 lg:font-poppins lg:text-black-dark xl:gap-6">
            <li>
              <NavLink
                onClick={handleMenuClose}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold capitalize text-danger lg:text-sm lg:font-light"
                    : "text-lg font-bold capitalize hover:text-secondary lg:text-sm lg:font-light"
                }
                to="/aboutus"
              >
                about us
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleMenuClose}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold capitalize text-danger-light lg:text-sm lg:font-light"
                    : "text-lg font-bold capitalize hover:text-secondary lg:text-sm lg:font-light"
                }
                to="/menu"
              >
                our menu
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleMenuClose}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold capitalize text-danger lg:text-sm lg:font-light"
                    : "text-lg font-bold capitalize hover:text-secondary lg:text-sm lg:font-light"
                }
                to="/services"
              >
                our services
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleMenuClose}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold capitalize text-danger lg:text-sm lg:font-light"
                    : "text-lg font-bold capitalize hover:text-secondary lg:text-sm lg:font-light"
                }
                to="/advice"
              >
                allergy advice
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden items-center justify-end gap-8 lg:flex">
          <div className="flex gap-4">
            <CommonIcon iconName={FaFacebookF} />
            <CommonIcon iconName={FaTiktok} />
            <CommonIcon iconName={IoLogoInstagram} />
          </div>
          <div>
            <PrimaryButton
              buttonName="contact us"
              onClick={handleContactButton}
              classFeature="bg-primary px-7 hover:bg-primary-dark"
            />
          </div>
        </div>
        <div className="hamburgar-menu lg:hidden" onClick={handleToggle}>
          <RxHamburgerMenu size={40} aria-label="Open Menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
