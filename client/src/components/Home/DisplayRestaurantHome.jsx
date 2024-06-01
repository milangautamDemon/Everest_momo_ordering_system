import SecondaryButton from "../common/SecondaryButton";
import { useNavigate } from "react-router-dom";
import momoitems from "../../assets/images/momos-items.png";
import theOne from "../../assets/images/text-spsl.png";
import displayMomo from "../../assets/images/display-momo.png";
import { TiArrowRight } from "react-icons/ti";

const DisplayRestaurantHome = () => {
  const navigate = useNavigate();

  const handleMenuButton = () => navigate("/menu");

  return (
    <div className="mg:justify-between my-6 flex flex-col-reverse items-center gap-2 md:flex-row lg:relative">
      <div className="flex flex-col md:items-start">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="hidden text-start text-lg uppercase text-black-light md:visible md:block">
            restaurant
          </div>
          <div className="w-40 sm:w-56 lg:w-64">
            <img src={theOne} alt="The One" />
          </div>
          <div className="py-4 font-semibold text-black-dark md:text-sm lg:text-lg">
            More than{" "}
            <span className="text-lg text-primary md:text-xl lg:text-2xl">
              20+ Varieties
            </span>{" "}
            of momo available for you
          </div>
          <div className="py-6">
            <SecondaryButton
              onClick={handleMenuButton}
              buttonName="explore food menu"
              buttonIcon={TiArrowRight}
              classFeature="flex-row-reverse bg-secondary hover:bg-secondary-dark"
            />
          </div>
        </div>
      </div>
      <div className="end-0 rounded-full md:absolute md:h-80 md:w-80 md:translate-x-2/4 md:bg-primary lg:h-[32rem] lg:w-[32rem] lg:translate-x-3/4">
        <div className="md:absolute md:-start-20 md:top-28 lg:-start-40 lg:top-40">
          <img
            src={displayMomo}
            alt=""
            className="hidden w-40 md:block lg:visible lg:w-72"
          />
          <img src={momoitems} alt="" className="w-40 sm:w-60 md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default DisplayRestaurantHome;
