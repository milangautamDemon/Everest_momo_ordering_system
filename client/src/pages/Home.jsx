
import theOne from "../assets/images/text-spsl.png"
import SecondaryButton from '../components/common/SecondaryButton';
import { TiArrowRight } from "react-icons/ti";
import displayMomo from "../assets/images/display-momo.png";
import men from "../assets/images/men.png"
import SimpleBtn from '../components/common/SimpleBtn';
import MomoMenu from '../components/common/MomoMenu';
import buffMomo from "../assets/images/fry-momo.png";
import seaMomo from "../assets/images/sea-momo.png";
import chillyMomo from "../assets/images/chilly-momo.png";
import HotelService from '../components/common/HotelService';
import { GiPartyPopper } from "react-icons/gi";
import { GiOpenedFoodCan } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import { MdSlowMotionVideo } from "react-icons/md";
import serviceImg from "../assets/images/service-img.jpeg";
import customerImg from "../assets/images/customerImg.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import 'react-phone-input-2/lib/style.css'
import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import momoitems from "../assets/images/momos-items.png"
import { Map } from "../components/Map";
import { mapContext } from "../context/mapContext";
import UserInputForm from "../components/common/UserInputForm";


const Home = () => {

    const {currentMarkerPosition, setCurrentMarkerPosition} = useContext(mapContext);

    return (
        <div className="font-poppins py-4 overflow-hidden">
            <div className=" px-8 md:px-16 xl:px-32">
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
                                <SecondaryButton buttonName="explore food menu" buttonIcon={TiArrowRight} classFeature="flex-row-reverse bg-secondary hover:bg-secondary-dark" />
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
                    
                </div> {/*closing of top hero section*/}

                <div className='my-6 md:py-12'>
                    <div className="flex flex-col gap-10 md:flex-row lg:gap-32">
                        <div className='flex justify-center'>
                            <div className="w-72 h-96 relative">
                                <div className="bg-secondary w-full h-5/6 absolute start-0 bottom-0 rounded-t-full"></div>
                                <img src={men} alt="" className='w-full h-full absolute' />
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:items-start md:justify-center">
                            <div className="text-xl md:text-2xl text-black-dark font-bold capitalize text-center md:text-start">
                                why customers <span className='text-primary'>love us</span>
                            </div>
                            <div className="text-sm text-center md:text-start md:text-lg text-black">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis.
                            </div>
                            <div className="flex justify-center py-6 md:justify-start">
                                <SecondaryButton buttonName="explore our story" buttonIcon={TiArrowRight} classFeature="bg-secondary flex-row-reverse hover:bg-secondary-dark" />
                            </div>
                        </div>
                    </div>
                </div> {/*closing of home hero-section*/}

                <div className="my-4 flex flex-col md:gap-4">
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center gap-4 my-4">
                            <div className="text-xl md:text-2xl font-bold text-black-dark capitalize">our <span className='text-primary'>most popular</span> Recipes</div>
                            <div className="text-sm text-center md:text-lg text-black">Browse through a Varieties of recipes with fresh ingredient selected only from the best place </div>
                        </div>
                        <div className="py-4 flex gap-6 justify-center items-center my-6">
                            <SimpleBtn btnName='buff' />
                            <SimpleBtn btnName="chicken" />
                            <SimpleBtn btnName='veg' />
                        </div>
                        <div className="flex justify-center gap-8 lg:gap-12 xl:gap-32 items-center pt-6">
                            <MomoMenu menuImg={buffMomo} menuName="buff momo" menuPrice="150" />
                            <MomoMenu menuImg={seaMomo} menuName="sea momo" menuPrice="150" />
                            <MomoMenu menuImg={chillyMomo} menuName="chilly momo" menuPrice="150" />
                        </div>
                    </div>

                    <div className="flex justify-center my-12">
                        <SecondaryButton buttonName="explore our menu" buttonIcon={TiArrowRight} classFeature="bg-secondary hover:bg-secondary-dark flex-row-reverse" />
                    </div>
                </div> {/*momo menu wrapper close*/}
            </div>

            <div className="my-10">
                <div className="text-xl md:text-2xl font-bold capitalize text-center pb-8">
                    <span className='text-primary'>we offer people</span> the service they want
                </div>

                <div className="w-full md:h-96 xl:h-[30rem] relative">
                    <div className="w-full h-full">
                        <img src={serviceImg} className='w-full h-full' alt="food service" />
                    </div>

                    <div className="absolute top-0 h-full w-full flex flex-col justify-end items-center py-6 bg-gradient-to-b from-black/15 to-black-dark/60">
                        <div className="flex flex-col items-center peer">
                            <div className="text-xl md:text-2xl font-bold capitalize text-white-default">Process behind the making</div>
                            <div className="text-sm font-normal text-white-default">See how only chefs cooks only the best momos</div>
                            <div className="my-4">
                                <SecondaryButton buttonName="explore food menu" buttonIcon={MdSlowMotionVideo} classFeature="bg-secondary hover:bg-secondary-dark" />
                            </div>
                        </div>
                        <div className="flex flex-col invisible items-center my-8 peer-active:visible">
                            <div className="border-t-2 border-dotted w-80 border-blue-light"></div>
                            <div className="cross -translate-y-0.5">
                                <div className="border-t-2 border-dotted w-12 border-blue-light -rotate-45"></div>
                                <div className="border-t-2 border-dotted w-12 border-blue-light rotate-45"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 my-8 mx-8 md:mx-16 xl:mx-32 ">
                    <div className="flex flex-col lg:flex-row lg:gap-10 items-center md:flex-row md:gap-6">
                        <HotelService serviceIcon={GiOpenedFoodCan} serviceTitle="quality food" servicePara="Only the best food with top quality products and ingredients" />
                        <HotelService serviceIcon={GiPartyPopper} serviceTitle="private party" servicePara="Only the best food with top quality products and ingredients" />
                        <HotelService serviceIcon={SiCodechef} serviceTitle="categring" servicePara="Only the best food with top quality products and ingredients" />
                    </div>
                    <div className="flex justify-center my-6">
                        <SecondaryButton buttonName="explore food menu" buttonIcon={TiArrowRight} classFeature="bg-secondary flex-row-reverse hover:bg-secondary-dark" />
                    </div>
                </div>
            </div>


            <div className="flex flex-col-reverse items-center gap-4 mx-8 md:mx-16 xl:mx-32 md:flex-row md:justify-between">
                <div className="flex flex-col gap-2 items-center md:w-3/5 md:items-start">
                    <div className="flex flex-col gap-4">
                        <div className="text-xl md:text-2xl font-bold capitalize text-center md:text-start">
                            200+ <span className='text-primary'>happy customer</span>
                        </div>
                        <div className="text-sm font-bold text-secondary text-center md:text-start">
                            What our customers say about us
                        </div>
                        <div className="italic text-center md:text-start">
                            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis.`
                        </div>
                        <div className="font-bold text-sm md:text-lg text-black-dark">livie dias</div>
                    </div>
                    <div className="flex gap-2">
                        <span className="left-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black"><FaArrowLeft size={8} /></span>
                        <span className="right-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black"><FaArrowRight size={8} /></span>
                    </div>
                </div>

                <div className="md:w-2/5 md:flex md:justify-end">
                    <div className="w-40 md:w-56">
                        <img src={customerImg} alt="customer" className='w-full rounded-lg' />
                    </div>
                </div>
            </div>

            {/*get in touch user input form*/}
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

            {/*map*/}
            <div className="w-full h-60 md:h-80 lg:h-96 mt-12">
                <Map currentMarkerPosition={currentMarkerPosition} setCurrentMarkerPosition={setCurrentMarkerPosition} />
            </div>

        </div>
    )
}

export default Home