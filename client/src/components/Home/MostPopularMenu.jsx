import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleBtn from "../common/SimpleBtn";
import buffMomo from "../../assets/images/fry-momo.png";
import seaMomo from "../../assets/images/sea-momo.png";
import chillyMomo from "../../assets/images/chilly-momo.png";
import { useNavigate } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import SecondaryButton from "../common/SecondaryButton";
import { useState } from "react";
import MomoMenuList from "../common/MomoMenuList";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const momoTypeLists = [
  {
    image: buffMomo,
    menuName: "fry buff momo",
    category: "buff",
    price: 150,
  },
  {
    image: seaMomo,
    category: "buff",
    menuName: "sea buff momo",
    price: 250,
  },
  {
    image: chillyMomo,
    category: "buff",
    menuName: "chilly buff momo",
    price: 190,
  },
  {
    image: buffMomo,
    menuName: "fry chicken momo",
    category: "chicken",
    price: 150,
  },
  {
    image: seaMomo,
    category: "chicken",
    menuName: "sea chicken momo",
    price: 250,
  },
  {
    image: chillyMomo,
    category: "chicken",
    menuName: "chilly chicken momo",
    price: 190,
  },
  {
    image: buffMomo,
    menuName: "fry veg momo",
    category: "veg",
    price: 150,
  },
  {
    image: seaMomo,
    category: "veg",
    menuName: "sea veg momo",
    price: 250,
  },
  {
    image: chillyMomo,
    category: "veg",
    menuName: "chilly veg momo",
    price: 190,
  },
  {
    image: seaMomo,
    category: "buff",
    menuName: "sea buff momo",
    price: 250,
  },
  {
    image: chillyMomo,
    category: "buff",
    menuName: "chilly buff momo",
    price: 190,
  },
  {
    image: buffMomo,
    menuName: "fry chicken momo",
    category: "chicken",
    price: 150,
  },
  {
    image: seaMomo,
    category: "chicken",
    menuName: "sea chicken momo",
    price: 250,
  },
  {
    image: chillyMomo,
    category: "chicken",
    menuName: "chilly chicken momo",
    price: 190,
  },
  {
    image: buffMomo,
    menuName: "fry veg momo",
    category: "veg",
    price: 150,
  },
  {
    image: seaMomo,
    category: "veg",
    menuName: "sea veg momo",
    price: 250,
  },
  {
    image: chillyMomo,
    category: "veg",
    menuName: "chilly veg momo",
    price: 20000,
  },
];

const MostPopularMenu = () => {
  const [filterCategory, setFilterCategory] = useState("buff");
  const [startIndex, setStartIndex] = useState(0);

  const navigate = useNavigate();

  const handleMenuButton = () => navigate("/menu");
  const handleCategory = (category) => {
    setFilterCategory(category);
  };

  const itemsPerPage = 3;

  const filterData = momoTypeLists.filter(
    (item) => item.category === filterCategory,
  );

  const handlePrevious = () => {
    setStartIndex(
      (prev) => (prev - itemsPerPage + filterData.length) % filterData.length,
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage) % filterData.length);
  };

  const getDisplayedItems = () => {
    let displayedItems = [];
    for (let i = 0; i < itemsPerPage; i++) {
      displayedItems.push(filterData[(startIndex + i) % filterData.length]);
    }
    return displayedItems;
  };

  return (
    <div className="my-4 flex flex-col md:gap-4">
      <div className="flex flex-col">
        <div className="my-4 flex flex-col items-center gap-4">
          <div className="text-xl font-bold capitalize text-black-dark md:text-2xl">
            our <span className="text-primary">most popular</span> Recipes
          </div>
          <div className="text-center text-sm text-black md:text-lg">
            Browse through a Varieties of recipes with fresh ingredient selected
            only from the best place{" "}
          </div>
        </div>
        <div className="my-6 flex items-center justify-center gap-6 py-4">
          <SimpleBtn
            onClick={() => handleCategory("buff")}
            btnName="buff"
            isActive={filterCategory === "buff"}
          />
          <SimpleBtn
            onClick={() => handleCategory("chicken")}
            btnName="chicken"
            isActive={filterCategory === "chicken"}
          />
          <SimpleBtn
            onClick={() => handleCategory("veg")}
            btnName="veg"
            isActive={filterCategory === "veg"}
          />
        </div>

        <div
          className={`relative my-6 flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-8 xl:gap-12`}
        >
          {getDisplayedItems()?.map((item, index) => (
            <MomoMenuList
              key={index}
              menuImg={item.image}
              menuName={item.menuName}
              menuPrice={item.price}
            />
          ))}
          <div className="absolute top-1/3 flex w-full justify-between">
            <span
              onClick={handlePrevious}
              className="left-icons flex h-6 w-6 items-center justify-center rounded-full border border-solid border-black-light hover:border-black hover:bg-white-light lg:h-8 lg:w-8"
            >
              <FaArrowLeft size={8} />
            </span>
            <span
              onClick={handleNext}
              className="right-icons flex h-6 w-6 items-center justify-center rounded-full border border-solid border-black-light hover:border-black hover:bg-white-light lg:h-8 lg:w-8"
            >
              <FaArrowRight size={8} />
            </span>
          </div>
        </div>
      </div>

      <div className="my-12 flex justify-center">
        <SecondaryButton
          onClick={handleMenuButton}
          buttonName="explore our menu"
          buttonIcon={TiArrowRight}
          classFeature="bg-secondary hover:bg-secondary-dark flex-row-reverse"
        />
      </div>
    </div>
  );
};

export default MostPopularMenu;
