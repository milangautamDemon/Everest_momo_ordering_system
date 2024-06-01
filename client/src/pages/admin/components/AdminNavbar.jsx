import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Logo from "../../../components/common/Logo";
import PrimaryButton from "../../../components/common/PrimaryButton";

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();

  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleMenuClose = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-solid border-white-light bg-white-default px-8 py-2 md:px-16 xl:px-32">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo navigate="/admin" />
          <div className="font-allura text-lg font-bold text-primary">
            Admin Dashboard
          </div>
        </div>

        <div
          className={`absolute right-0 top-14 flex w-auto flex-col items-center gap-4 bg-black px-4 py-4 lg:relative lg:top-0 lg:w-auto lg:flex-row lg:items-center lg:bg-white-default ${isMenuOpen ? "block" : "hidden"} lg:flex lg:gap-16 lg:py-0`}
        >
          <div className="w-full text-center font-chela text-lg capitalize text-white-default lg:hidden">
            add/update
          </div>
          <ul className="lg:bg-white flex w-auto flex-col items-center justify-center gap-2 font-nova text-black-light lg:flex-row lg:bg-white-default lg:py-0 lg:font-poppins lg:text-black-dark xl:gap-6">
            <li>
              <NavLink
                onClick={handleMenuClose}
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold capitalize text-danger-light lg:text-sm lg:font-light"
                    : "text-lg font-bold capitalize hover:text-secondary lg:text-sm lg:font-light"
                }
                to="/admin/aboutus"
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
                to="/admin/menu"
              >
                our menu
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
                to="/admin/services"
              >
                our services
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
                to="/admin/advice"
              >
                allergy advice
              </NavLink>
            </li>
          </ul>

          <div className="items-center justify-end gap-8 lg:flex">
            <PrimaryButton
              onClick={logout}
              buttonName="Logout"
              classFeature="px-8 bg-secondary font-semibold hover:bg-secondary-dark shadow-lg"
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

export default AdminNavbar;
