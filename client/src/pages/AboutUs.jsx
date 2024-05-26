import womenChef from "../assets/images/chief.png"
import women from "../assets/images/women.png"
import SecondaryButton from "../components/common/SecondaryButton"
import { MdSlowMotionVideo } from "react-icons/md";
import cookingImg from "../assets/images/cooking-img.jpeg"
import ChiefService from "../components/common/ChiefService";
import momoImg1 from "../assets/images/sea-momo.png"
import cookingFood from "../assets/images/food-making.jpeg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ceoImg from "../assets/images/owner.jpeg"
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import hotelImg from "../assets/images/hotel-img.jpeg"
import Staff from "../components/common/Staff";
import headChef from "../assets/images/headChef.jpeg"
import assistantChef from "../assets/images/chef2.jpeg"
import assistantChef2 from "../assets/images/chef3.jpeg"




const AboutUs = () => {
  return (
    <div className="pb-10 font-poppins">
        <div className=" px-8 md:px-16 xl:px-32">
          <div className='my-6 md:py-8 flex justify-between items-center'>                
              <div className="flex flex-col gap-4 md:w-1/2">
                <div className="font-allura text-4xl font-medium text-secondary-light capitalize italic">
                  about us
                </div>
                <div className="text-black-light font-nova lg:font-oswald uppercase">we pride ourself on</div>
                <div className="text:lg lg:text-2xl font-nova lg:font-oswald font-bold lg:font-semibold text-start flex flex-col">
                    <span className=" text-primary">Our authentic momo recipes</span>  
                    <span className="text-black-dark">passed down through generations</span>
                </div>
              </div>

              <div className="md:w-1/2 md:flex md:justify-end">
                  <img src={womenChef} alt="women-Chief" className='w-20 h-32 sm:w-32 sm:h-40 md:hidden' />
                  <img src={women} alt="women-Chief" className='hidden md:block h-64 w-64 xl:h-80 xl:w-80' />
              </div>
          </div>
        </div>

        <div className="w-full h-60 md:h-96 xl:h-[30rem] relative">
            <div className="w-full h-full">
                <img src={cookingImg} className='w-full h-full object-cover' alt="food service" />
            </div>

            <div className="absolute bottom-0 h-full w-full flex flex-col justify-end items-center md:items-start md:pl-6 py-6 bg-gradient-to-b from-black/15 to-black-dark/60">
                <div className="flex flex-col items-center md:items-start">
                    <div className="text-lg md:text-2xl font-bold capitalize text-white-default">Process behind the making</div>
                    <div className="text-sm font-normal text-white-default">See how only chefs cooks only the best momos</div>
                    <div className="my-4 flex md:justify-start">
                        <SecondaryButton buttonName="explore food menu" buttonIcon={MdSlowMotionVideo} classFeature="bg-secondary hover:bg-secondary-dark" />
                    </div>
                </div>
            </div>
        </div>
        
        <div className="flex flex-col pt-16 mt-8">
          <ChiefService 
          classFeature="flex-row"
          blackHeading="Our momos are"
          primaryHeading="made with love"
          normalPara=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex quod odit impedit inventore sed dolorum reprehenderit. Facilis, corrupti unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, tenetur."
          momoImg={momoImg1}
          cookingImage={cookingFood}
           />

          <ChiefService 
          classFeature="flex-row-reverse"
          blackHeading="Our momos are"
          primaryHeading="made with love"
          normalPara=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex quod odit impedit inventore sed dolorum reprehenderit. Facilis, corrupti unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, tenetur."
          momoImg={momoImg1}
          cookingImage={cookingFood}
           />

          <ChiefService 
          classFeature="flex-row"
          blackHeading="Our momos are"
          primaryHeading="made with love"
          normalPara=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex quod odit impedit inventore sed dolorum reprehenderit. Facilis, corrupti unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, tenetur."
          momoImg={momoImg1}
          cookingImage={cookingFood}
           />

        </div>


        <div className="w-full h-80 lg:h-96 xl:h-[30rem] flex justify-center sm:justify-start my-12">
          <div className="w-full sm:w-3/6 h-full relative">
            <img src={hotelImg} alt="hotel" className="w-full h-full blur-sm" />
            <div className="h-full w-full flex flex-col gap-4 px-6 py-4 lg:py-10 lg:px-12 xl:px-20 justify-center text-white-default absolute top-0 bg-gradient-to-t from-black/30 to-black-dark/40">
              <div className="flex flex-col gap-4">
                <div className="text-white-default">
                <BiSolidQuoteAltLeft size={22} />
                </div>
                <div className="text-white-light text-small">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam porro ullam natus modi deleniti deserunt saepe eius, quae aliquam praesentium quos incidunt consequuntur fugiat corporis. Illum ipsam modi quod.
                </div>
                <div className="text-white-default">
                  <div className="capitalize font-semibold text-xl">marcus schleifer</div>
                  <div className="uppercase font-bold">ceo</div>
                </div>
              </div>
              <div className="flex gap-2 justify-end lg:mt-12">
                <span className="left-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black">
                  <FaArrowLeft size={8} />
                </span>
                <span className="right-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black">
                  <FaArrowRight size={8} />
                </span>
              </div>
            </div>

          </div>

          <div className="hidden sm:block w-3/6 h-full">
            <img src={ceoImg} alt="CEO" className="w-full h-full" />
          </div>

        </div>


        <div className=" px-8 md:px-16 xl:px-32 flex flex-col gap-4">
          <div className="text-lg md:text-2xl font-bold capitalize text-center text-black-dark">meet the <span className="text-primary">team</span></div>
          <div className="text-sm text-center text-secondary-dark font-semibold md:text-lg">
            Our talented team members who delivers only the best results
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row gap-4 my-6 sm:gap-8 md:gap-12">
            <Staff staffImg={headChef} staffTitle="head chef" />
            <Staff staffImg={assistantChef} staffTitle="assistant chef" />
            <Staff staffImg={assistantChef2} staffTitle="assistant chef" />
          </div>
          <div className="flex justify-between">
            <div className="count text-black-light">
              <span className="text-black-dark font-bold">01</span>/
              <span>05</span>
            </div>
            <div className="flex gap-2">
              <span className="left-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black">
                <FaArrowLeft size={8} />
              </span>
              <span className="right-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black">
                <FaArrowRight size={8} />
              </span>
            </div>
          </div>
        </div>


    </div>
  )
}

export default AboutUs