import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Staff from "../common/Staff";
import headChef from "../../assets/images/headChef.jpeg"
import assistantChef from "../../assets/images/chef2.jpeg"
import assistantChef2 from "../../assets/images/chef3.jpeg"
import { useState } from "react";

const staffData = [
    {    
        staffImg : headChef,
        staffTitle : "head chef"
    }, {    
        staffImg : assistantChef,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef2,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef2,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef2,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef2,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef2,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef2,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef2,
        staffTitle : "assistant chef"
    },
    {    
        staffImg : assistantChef2,
        staffTitle : "assistant chef"
    }
   
]

const StaffTeams = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(staffData.length / itemsPerPage);

    const handlePrevious = () => {
        setStartIndex((prev) => (prev - itemsPerPage + staffData.length) % staffData.length);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + itemsPerPage) % staffData.length);
    };
    const getDisplayedItems = () => {
        let displayedItems = [];
        for (let i = 0; i < itemsPerPage; i++) {
            displayedItems.push(staffData[(startIndex + i) % staffData.length]);
        }
        return displayedItems;
    };

    const currentPage = Math.floor(startIndex / itemsPerPage) + 1;

  return (
    <div className=" px-8 md:px-16 xl:px-32 flex flex-col gap-4">
          <div className="text-lg md:text-2xl font-bold capitalize text-center text-black-dark">meet the <span className="text-primary">team</span></div>
          <div className="text-sm text-center text-secondary-dark font-semibold md:text-lg">
            Our talented team members who delivers only the best results
          </div>
          <div className={`flex flex-col items-center justify-center sm:flex-row gap-4 my-6 sm:gap-8 md:gap-12`}>
            {
                getDisplayedItems()?.map((data, index) => (<Staff key={index} 
                    staffImg={data.staffImg} staffTitle={data.staffTitle} />
                ))
            }
          </div>
          <div className="flex justify-between">
            <div className="count text-black-light">
                <span className="text-black-dark font-bold">
                    {currentPage}
                </span>
                /<span>
                    {totalPages}
                </span>
            </div>
            <div className="flex gap-2">
              <span  onClick={handlePrevious} className="left-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black">
                <FaArrowLeft size={8} />
              </span>
              <span  onClick={handleNext} className="right-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black">
                <FaArrowRight size={8} />
              </span>
            </div>
          </div>
        </div>
  )
}

export default StaffTeams