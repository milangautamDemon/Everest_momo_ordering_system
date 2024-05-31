/* eslint-disable react/prop-types */

import { MdSlowMotionVideo } from "react-icons/md";

const ExploreProcess = ({
  exploreIcon,
  exploreImg,
  classFeature,
  exploreTitle,
  explorePara,
  btnName,
  handle,
}) => {
  const Icon = exploreIcon;
  return (
    <>
      <div className="relative my-6 h-60 w-full md:h-96 xl:h-[30rem]">
        <div className="h-full w-full">
          <img
            src={exploreImg}
            className="h-full w-full object-cover"
            alt="food service"
          />
        </div>

        <div
          className={`absolute bottom-0 flex h-full w-full flex-col items-center justify-end bg-gradient-to-b from-black/15 to-black-dark/60 py-6 md:pl-6 md:${classFeature}`}
        >
          <div className="flex flex-col items-center md:items-start">
            <div className="text-lg font-bold capitalize text-white-default md:text-2xl">
              {exploreTitle}
            </div>
            <div className="text-sm font-normal text-white-default">
              {explorePara}
            </div>
            <div className="my-4 flex md:justify-start">
              <Icon
                onClick={handle}
                buttonName={btnName}
                buttonIcon={MdSlowMotionVideo}
                classFeature="bg-secondary hover:bg-secondary-dark"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreProcess;
