import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleBtn from '../common/SimpleBtn';
import MomoMenu from '../common/MomoMenu';
import buffMomo from "../../assets/images/fry-momo.png";
import seaMomo from "../../assets/images/sea-momo.png";
import chillyMomo from "../../assets/images/chilly-momo.png";
import { useNavigate } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import SecondaryButton from "../common/SecondaryButton";
import { useState } from "react";


const momoTypeLists = [
    {
        image : buffMomo,
        menuName : "fry buff momo",
        category : "buff",
        price : 150
    },
    {
        image : seaMomo,
        category : "buff",
        menuName : "sea buff momo",
        price : 250
    },
    {
        image : chillyMomo,
        category : "buff",
        menuName : "chilly buff momo",
        price : 190
    },
    {
        image : buffMomo,
        menuName : "fry chicken momo",
        category : "chicken",
        price : 150
    },
    {
        image : seaMomo,
        category : "chicken",
        menuName : "sea chicken momo",
        price : 250
    },
    {
        image : chillyMomo,
        category : "chicken",
        menuName : "chilly chicken momo",
        price : 190
    },
    {
        image : buffMomo,
        menuName : "fry veg momo",
        category : "veg",
        price : 150
    },
    {
        image : seaMomo,
        category : "veg",
        menuName : "sea veg momo",
        price : 250
    },
    {
        image : chillyMomo,
        category : "veg",
        menuName : "chilly veg momo",
        price : 190
    }

];

const MostPopularMenu = () => {
    const [filterCategory, setFilterCategory] = useState("buff");

    const navigate = useNavigate();


    const handleMenuButton = () => navigate("/menu");
    const handleCategory = (category) => {
        setFilterCategory(category);
    }
    
    const filterData = momoTypeLists.filter(item => item.category === filterCategory);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 3,
        adaptiveHeight: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
        ]
      };


  return (
    <div className="my-4 flex flex-col md:gap-4">
        <div className="flex flex-col">
            <div className="flex flex-col items-center gap-4 my-4">
                <div className="text-xl md:text-2xl font-bold text-black-dark capitalize">our <span className='text-primary'>most popular</span> Recipes</div>
                <div className="text-sm text-center md:text-lg text-black">Browse through a Varieties of recipes with fresh ingredient selected only from the best place </div>
            </div>
            <div className="py-4 flex gap-6 justify-center items-center my-6">
                <SimpleBtn onClick={() => handleCategory("buff")} btnName='buff' isActive={filterCategory === "buff"}  />
                <SimpleBtn onClick={() => handleCategory("chicken")} btnName="chicken" isActive={filterCategory === "chicken"} />
                <SimpleBtn onClick={() => handleCategory("veg")} btnName='veg' isActive={filterCategory === "veg"} />
            </div>
                {/* <div className="flex justify-center gap-8 lg:gap-12 xl:gap-32 items-center pt-6"> */}
                <Slider {...settings}>
                    {
                        filterData.map((item, index) => (
                            <MomoMenu key={index} menuImg={item.image} menuName={item.menuName} menuPrice={item.price} />
                        ))
                    }
                </Slider>
                {/* </div> */}
        </div>

        <div className="flex justify-center my-12">
            <SecondaryButton onClick={handleMenuButton} buttonName="explore our menu" buttonIcon={TiArrowRight} classFeature="bg-secondary hover:bg-secondary-dark flex-row-reverse" />
        </div>
    </div> 
  )
}

export default MostPopularMenu