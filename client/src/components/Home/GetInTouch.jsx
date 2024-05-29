import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import UserInputForm from "../common/UserInputForm";


const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-4 my-8 py-6 mx-8 md:mx-16 xl:mx-32 rounded-lg">
        <div className="flex flex-col items-center gap-2">
            <div className="text-xl md:text-2xl font-bold capitalize">
                get <span className="text-primary">in touch</span>
            </div>
            <div className="text-sm md:text-lg font-semibold text-secondary capitalize">Our team would love to hear from you</div>
        </div>

        <div className="contact flex flex-col md:flex-row w-full  shadow-lg p-3 rounded-xl">
            <div className="flex flex-col gap-16 bg-secondary text-white-light py-6 px-4 rounded-lg md:w-1/2">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <FaLocationDot />
                            <div className="text-lg fond-bold capitalize">our address</div>
                        </div>
                        <div className="italic font-light capitalize">
                            new baneshwor, kathmandu, bagmati, nepal
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <FaPhone />
                            <div className="text-lg fond-bold capitalize">our contacts</div>
                        </div>
                        <div className="font-light capitalize flex gap-16">
                            <div className="flex flex-col gap-1">
                                <div className=" font-normal">mobile</div>
                                <div className="flex flex-col">
                                    <span>9837346737</span>
                                    <span>9837346737</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="capitalize font-normal">landline</div>
                                <div className="">01-73974902</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <FaClock />
                            <div className="text-lg fond-bold capitalize">our service time</div>
                        </div>
                        <div className="font-light capitalize flex gap-16">
                            <div className="flex flex-col gap-1">
                                <div className="uppercase font-normal">mon-fri</div>
                                <div className="">10 am - 8pm</div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <div className="uppercase font-normal">sat-sun</div>
                                <div className="">closed</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 mb-16">
                    <div className="italic text-lg font-light">
                        Get in touch in social networks
                    </div>
                    <div className="flex gap-4">
                        <FaFacebook size={25} className="text-white-default" />
                        <RiInstagramFill size={25} className="text-white-default" />
                        <IoLogoTiktok size={25} className="text-white-default" />
                    </div>
                </div>
            </div>

            <UserInputForm btnColor="bg-primary"/>
        </div>
    </div>
  )
}

export default GetInTouch