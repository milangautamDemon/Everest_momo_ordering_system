/* eslint-disable react/prop-types */

import headerLogo from "../../assets/images/momoLogo.png";
import { NavLink } from "react-router-dom";

const Logo = ({ navigate }) => {
  return (
    <>
      <NavLink
        to={navigate}
        className="flex items-center gap-2 font-hachi lg:font-poppins"
      >
        <img src={headerLogo} alt="Logo" height={50} width={50} />
        <div className="text:xl font-bold text-secondary md:text-2xl">
          momos
        </div>
      </NavLink>
    </>
  );
};

export default Logo;
