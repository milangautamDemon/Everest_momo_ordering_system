import ceoImg from "../../assets/images/owner.jpeg";
import headChef from "../../assets/images/headChef.jpeg";
import assistantChef from "../../assets/images/chef2.jpeg";
import { useState } from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import hotelImg from "../../assets/images/hotel-img.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const userData = [
  {
    name: "marcus schleife",
    image: ceoImg,
    degination: "ceo",
    quotes:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam porro ullam natus modi deleniti deserunt saepe eius, quae aliquam praesentium quos incidunt consequuntur fugiat corporis. Illum ipsam modi quod.",
  },
  {
    name: "milton gray",
    image: headChef,
    degination: "head chef",
    quotes:
      "Lorem ipsum dolor sit amet consostrum numquam porro ullam natus modi deleniti deserunt saepe eius, quae aliquam praesentium quos incidunt consequuntur fugiat corporis. Illum ipsam modi quod.",
  },
  {
    name: "david millar",
    image: assistantChef,
    degination: "assistant chef",
    quotes:
      "Lorem ipsum dolor sit amet quae aliquam praesentium quos incidunt consequuntur fugiat corporis. Illum ipsam modi quod.",
  },
];
const TeamTalk = () => {
  const [userTalk, setUserTalk] = useState(0);

  const handlePrevious = () => {
    setUserTalk((userTalk + userData.length - 1) % userData.length);
  };

  const handleNext = () => {
    setUserTalk((userTalk + 1) % userData.length);
  };

  return (
    <div className="my-12 h-80 w-full lg:h-96 xl:h-[30rem]">
      {userData.map((list, index) => {
        return (
          <div
            key={index}
            className={`${userTalk === index ? "flex" : "hidden"} h-full w-full justify-center sm:justify-start`}
          >
            <div className="relative h-full w-full md:w-3/6">
              <img
                src={hotelImg}
                alt="hotel"
                className="h-full w-full blur-sm"
              />
              <div className="absolute top-0 flex h-full w-full flex-col justify-center gap-4 bg-gradient-to-t from-black/30 to-black-dark/40 px-6 py-4 text-white-default lg:px-12 lg:py-10 xl:px-20">
                <div className="flex flex-col gap-4">
                  <div className="text-white-default">
                    <BiSolidQuoteAltLeft size={22} />
                  </div>
                  <div className="text-small text-white-light">
                    {list.quotes}
                  </div>
                  <div className="text-white-default">
                    <div className="text-xl font-semibold capitalize">
                      {list.name}
                    </div>
                    <div className="font-bold uppercase">{list.degination}</div>
                  </div>
                </div>
                <div className="flex justify-end gap-2 lg:mt-12">
                  <span
                    onClick={handlePrevious}
                    className="left-icons flex h-6 w-6 items-center justify-center rounded-full border border-solid border-black-light hover:border-black lg:h-8 lg:w-8"
                  >
                    <FaArrowLeft size={8} />
                  </span>
                  <span
                    onClick={handleNext}
                    className="right-icons flex h-6 w-6 items-center justify-center rounded-full border border-solid border-black-light hover:border-black lg:h-8 lg:w-8"
                  >
                    <FaArrowRight size={8} />
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden h-full w-3/6 sm:block">
              <img
                src={list.image}
                alt="CEO"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamTalk;
