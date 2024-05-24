
import theOne from "../assets/images/text-spsl.png"
import SecondaryButton from '../components/common/SecondaryButton';
import { TiArrowRight } from "react-icons/ti";
import Circle from '../components/Circle';
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
import customerImg from  "../assets/images/customerImg.jpeg";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Home = () => {
  return (
    <div className="my-8">
        <div className=" px-8 md:px-16 xl:px-32">
            <div className='flex flex-col-reverse items-center gap-8 my-6'>
                <div className="">
                    <div className="flex flex-col gap-2 items-center">
                        <div className="text-black-light uppercase text-lg hidden">
                            restaurant
                        </div>
                        <div className="w-64">
                            <img src={theOne} alt="The One" />   
                        </div>
                        <div className="text-lg font-semibold py-4">
                            More than <span className="text-primary text-2xl">20+ Varieties</span> of momo available for you
                        </div>
                        <div className="py-6">
                            <SecondaryButton buttonName="explore food menu" buttonIcon={TiArrowRight} classFeature="flex-row-reverse bg-secondary hover:bg-secondary-dark" />
                        </div>
                    </div>
                </div> 
                <div className="">
                    <div className=""></div>
                    <div className=""></div>
                    <img src={displayMomo} alt="" className='w-72'  />
                </div>
                <Circle />
            </div> {/*closing of top hero section*/}

            <div className='my-6'>
                <div className="flex flex-col gap-10">
                    <div className='flex justify-center '>
                        <div className="w-72 h-96 relative">
                            <div className="bg-secondary w-full h-5/6 absolute start-0 bottom-0 rounded-t-full"></div>
                            <img src={men} alt="" className='w-full h-full absolute' />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="text-2xl text-black-dark font-bold capitalize text-center">
                            why customers <span className='text-primary'>love us</span>
                        </div>
                        <div className="text-lg text-black">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis.
                        </div>
                        <div className="flex justify-center py-6">
                            <SecondaryButton buttonName="explore our story" buttonIcon={TiArrowRight} classFeature="bg-secondary flex-row-reverse hover:bg-secondary-dark" />
                        </div>
                    </div>
                </div>
            </div> {/*closing of home hero-section*/}

            <div className="my-4">
                <div className="">
                    <div className="flex flex-col items-center gap-4 my-4">
                        <div className="text-2xl font-bold text-black-dark capitalize">our <span className='text-primary'>most popular</span> Recipes</div>
                        <div className="text-lg text-black">Browse through a Varieties of recipes with fresh ingredient selected only from the best place </div>
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

        <div className="my-16">
            <div className="text-2xl font-bold capitalize text-center pb-8">
                <span className='text-primary'>we offer people</span> the service they want
            </div>

            <div className="w-full h-96 relative">
                <div className="w-full h-full">
                    <img src={serviceImg} className='w-full h-full' alt="food service" />
                </div>

                <div className="absolute top-0 h-full w-full flex flex-col justify-end items-center py-6 bg-gradient-to-b from-black/15 to-black-dark/60">
                    <div className="text-2xl font-bold capitalize text-white-default">Process behind the making</div>
                    <div className="font-normal text-white-default">See how only chefs cooks only the best momos</div>
                    <div className="my-4">
                        <SecondaryButton buttonName="explore food menu" buttonIcon={MdSlowMotionVideo} classFeature="bg-secondary hover:bg-secondary-dark" />
                    </div>
                    <div className="flex flex-col items-center my-8">
                        <div className="border-t-2 border-dotted w-80 border-blue-light"></div>
                        <div className="cross -translate-y-0.5">
                            <div className="border-t-2 border-dotted w-12 border-blue-light -rotate-45"></div>
                            <div className="border-t-2 border-dotted w-12 border-blue-light rotate-45"></div> 
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="">
                <div className="">
                    <HotelService serviceIcon={GiOpenedFoodCan} serviceTitle="quality food" servicePara="Only the best food with top quality products and ingredients" />
                    <HotelService serviceIcon={GiPartyPopper} serviceTitle="private party" servicePara="Only the best food with top quality products and ingredients" />
                    <HotelService serviceIcon={SiCodechef} serviceTitle="categring" servicePara="Only the best food with top quality products and ingredients" />
                </div>
                <div className=" ">
                    <SecondaryButton  buttonName="explore food menu" buttonIcon={TiArrowRight} classFeature=" " />
                </div>
            </div>
        </div>


        <div className=' '>
            <div className=" ">
                
                <div className=" ">
                    <div className=" ">
                        <div className=" ">
                            200+ <span className=''>happy customer</span>
                        </div>
                        <div className="">
                            what our customers say about us
                        </div>
                        <div className="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis.
                        </div>
                        <div className="">livie dias</div>
                    </div>
                    <div className=" ">
                        <div className="left-icons"><FaRegArrowAltCircleLeft size={20} className='text-black-50' /></div>
                        <div className="left-icons"><FaRegArrowAltCircleRight size={20} className='text-black-50' /></div>
                    </div>
                </div>

                <div className=''>
                    <div className="">
                        <img src={customerImg} alt="" height={400} width={300} className='' />
                    </div>
                </div>

            </div>
        </div> {/*closing of home hero-section*/}


    </div>
  )
}

export default Home