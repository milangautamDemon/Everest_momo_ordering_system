import womenChefPrimary from "../assets/images/page-women-chef-primary.png"
import womenChefSecondary from "../assets/images/page-women-chef-secondary.png"
import SecondaryButton from "../components/common/SecondaryButton"
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
import ExploreProcess from "../components/common/ExploreProcess";
import PageDescription from "../components/common/PageDescription";




const AboutUs = () => {
  return (
    <div className="pb-10 font-poppins">

        <PageDescription 
            pageTitle="about us"
            pageQuote="we pride ourself on"
            pageParaPrimary="Our authentic momo recipes"
            pageParaSecondary="passed down through generations"
            pagePrimaryImg={womenChefPrimary}
            pageSecondaryImg={womenChefSecondary}
            classFeature="text-start"
          flexFeature="justify-between"
        />

        <ExploreProcess 
          exploreIcon={SecondaryButton}
          exploreImg={cookingImg}
          exploreTitle="Process behind the making"
          explorePara="See how only chefs cooks only the best momos"
          btnName="explore food menu"
          classFeature="items-start"
        />
        
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