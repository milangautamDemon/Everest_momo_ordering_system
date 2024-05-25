
import headerLogo  from "../../assets/images/momoLogo.png";
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <>
        <NavLink className="flex items-center gap-2" >
            <img src={headerLogo} alt="Logo" height={50} width={50} />
            <div className="text:xl md:text-2xl font-bold text-secondary">momos</div>
        </NavLink>
    </>
  )
}

export default Logo;