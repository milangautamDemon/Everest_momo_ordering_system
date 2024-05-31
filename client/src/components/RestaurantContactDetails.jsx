import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

const RestaurantContactDetails = () => {
  return (
    <div className="flex flex-col gap-16 rounded-lg bg-secondary px-4 py-6 text-white-light md:w-1/2">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaLocationDot />
            <div className="fond-bold text-lg capitalize">our address</div>
          </div>
          <div className="font-light capitalize italic">
            new baneshwor, kathmandu, bagmati, nepal
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaPhone />
            <div className="fond-bold text-lg capitalize">our contacts</div>
          </div>
          <div className="flex gap-16 font-light capitalize">
            <div className="flex flex-col gap-1">
              <div className="font-normal">mobile</div>
              <div className="flex flex-col">
                <span>9837346737</span>
                <span>9837346737</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="font-normal capitalize">landline</div>
              <div className="">01-73974902</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <FaClock />
            <div className="fond-bold text-lg capitalize">our service time</div>
          </div>
          <div className="flex gap-16 font-light capitalize">
            <div className="flex flex-col gap-1">
              <div className="font-normal uppercase">mon-fri</div>
              <div className="">10 am - 8pm</div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="font-normal uppercase">sat-sun</div>
              <div className="">closed</div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 flex flex-col gap-2">
        <div className="text-lg font-light italic">
          Get in touch in social networks
        </div>
        <div className="flex gap-4">
          <FaFacebook size={25} className="text-white-default" />
          <RiInstagramFill size={25} className="text-white-default" />
          <IoLogoTiktok size={25} className="text-white-default" />
        </div>
      </div>
    </div>
  );
};

export default RestaurantContactDetails;
