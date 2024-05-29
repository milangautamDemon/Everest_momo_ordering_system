import SecondaryButton from '../common/SecondaryButton'
import { useNavigate } from "react-router-dom";
import momoitems from "../../assets/images/momos-items.png"
import theOne from "../../assets/images/text-spsl.png"
import displayMomo from "../../assets/images/display-momo.png";
import { TiArrowRight } from "react-icons/ti";



const DisplayRestaurantHome = () => {

    const navigate = useNavigate();

    const handleMenuButton = () => navigate("/menu");

  return (
    <div className='flex flex-col-reverse items-center gap-2 my-6 md:flex-row mg:justify-between lg:relative'>
        <div className="flex flex-col md:items-start">
            <div className="flex flex-col gap-2 items-center md:items-start">
                <div className="text-black-light uppercase text-start text-lg hidden md:visible md:block">
                    restaurant
                </div>
                <div className="w-40 sm:w-56 lg:w-64">
                    <img src={theOne} alt="The One" />
                </div>
                <div className="text-black-dark md:text-sm lg:text-lg font-semibold py-4">
                    More than <span className="text-primary text-lg md:text-xl lg:text-2xl">20+ Varieties</span> of momo available for you
                </div>
                <div className="py-6">
                    <SecondaryButton onClick={handleMenuButton} buttonName="explore food menu" buttonIcon={TiArrowRight} classFeature="flex-row-reverse bg-secondary hover:bg-secondary-dark" />
                </div>
            </div>
        </div>
        <div className="md:absolute end-0 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] rounded-full md:bg-primary md:translate-x-2/4 lg:translate-x-3/4">
            <div className="md:absolute md:top-28 md:-start-20 lg:top-40 lg:-start-40">
                {/* <div className=""></div>
                <div className=""></div> */}
                <img src={displayMomo} alt="" className='w-40  lg:w-72 hidden lg:visible md:block' />
                <img src={momoitems} alt="" className='w-40 sm:w-60 md:hidden' />
            </div>
        </div>
    </div>
  )
}

export default DisplayRestaurantHome