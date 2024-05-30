import ceoImg from "../../assets/images/owner.jpeg"
import headChef from "../../assets/images/headChef.jpeg"
import assistantChef from "../../assets/images/chef2.jpeg"
import { useState } from "react"
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import hotelImg from "../../assets/images/hotel-img.jpeg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const userData = [
    {
      name: "marcus schleife",
      image: ceoImg,
      degination: "ceo",
      quotes: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum numquam porro ullam natus modi deleniti deserunt saepe eius, quae aliquam praesentium quos incidunt consequuntur fugiat corporis. Illum ipsam modi quod.",
    },
    {
      name: "milton gray",
      image: headChef,
      degination: "head chef",
      quotes: "Lorem ipsum dolor sit amet consostrum numquam porro ullam natus modi deleniti deserunt saepe eius, quae aliquam praesentium quos incidunt consequuntur fugiat corporis. Illum ipsam modi quod.",
    },
    {
      name: "david millar",
      image: assistantChef,
      degination: "assistant chef",
      quotes: "Lorem ipsum dolor sit amet quae aliquam praesentium quos incidunt consequuntur fugiat corporis. Illum ipsam modi quod.",
    }
  ]
const TeamTalk = () => {
    const [userTalk, setUserTalk] = useState(0);

    const handlePrevious = () => {
        setUserTalk((userTalk + userData.length - 1) % userData.length);
    }
    
    const handleNext = () => {
        setUserTalk((userTalk + 1) % userData.length);
    }

  return (
    <div className="w-full h-80 lg:h-96 xl:h-[30rem] my-12">
        {
        userData.map((list, index) => {
          return (
            <div key={index}  className={`${userTalk === index ? "flex" : "hidden"} w-full h-full justify-center sm:justify-start `}>
                <div className="w-full md:w-3/6 h-full relative">
                    <img src={hotelImg} alt="hotel" className="w-full h-full blur-sm" />
                    <div className="h-full w-full flex flex-col gap-4 px-6 py-4 lg:py-10 lg:px-12 xl:px-20 justify-center text-white-default absolute top-0 bg-gradient-to-t from-black/30 to-black-dark/40">
                    <div className="flex flex-col gap-4">
                        <div className="text-white-default">
                        <BiSolidQuoteAltLeft size={22} />
                        </div>
                        <div className="text-white-light text-small">
                        {list.quotes}
                        </div>
                        <div className="text-white-default">
                        <div className="capitalize font-semibold text-xl">{list.name}</div>
                        <div className="uppercase font-bold">{list.degination}</div>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end lg:mt-12">
                        <span onClick={handlePrevious} className="left-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black">
                        <FaArrowLeft size={8} />
                        </span>
                        <span onClick={handleNext} className="right-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black">
                        <FaArrowRight size={8} />
                        </span>
                    </div>
                    </div>
                </div>

                <div className="hidden sm:block  w-3/6 h-full">
                    <img src={list.image} alt="CEO" className="w-full h-full object-cover" />
                </div>
            </div>
          )
        })
        }
    </div>
  )
}

export default TeamTalk