import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Staff from "../common/Staff";
import headChef from "../../assets/images/headChef.jpeg";
import assistantChef from "../../assets/images/chef2.jpeg";
import assistantChef2 from "../../assets/images/chef3.jpeg";
import { useState } from "react";

const staffData = [
  {
    staffImg: headChef,
    staffTitle: "head chef",
  },
  {
    staffImg: assistantChef,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef2,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef2,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef2,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef2,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef2,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef2,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef2,
    staffTitle: "assistant chef",
  },
  {
    staffImg: assistantChef2,
    staffTitle: "assistant chef",
  },
];

const StaffTeams = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(staffData.length / itemsPerPage);

  const handlePrevious = () => {
    setStartIndex(
      (prev) => (prev - itemsPerPage + staffData.length) % staffData.length,
    );
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
    <div className="flex flex-col gap-4 px-8 md:px-16 xl:px-32">
      <div className="text-center text-lg font-bold capitalize text-black-dark md:text-2xl">
        meet the <span className="text-primary">team</span>
      </div>
      <div className="text-center text-sm font-semibold text-secondary-dark md:text-lg">
        Our talented team members who delivers only the best results
      </div>
      <div
        className={`my-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8 md:gap-12`}
      >
        {getDisplayedItems()?.map((data, index) => (
          <Staff
            key={index}
            staffImg={data.staffImg}
            staffTitle={data.staffTitle}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <div className="count text-black-light">
          <span className="font-bold text-black-dark">{currentPage}</span>/
          <span>{totalPages}</span>
        </div>
        <div className="flex gap-2">
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
  );
};

export default StaffTeams;
