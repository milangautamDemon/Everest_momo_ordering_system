/* eslint-disable react/prop-types */

import { MdSlowMotionVideo } from "react-icons/md";


const ExploreProcess = ({exploreIcon, exploreImg, classFeature, exploreTitle, explorePara, btnName}) => {
    const Icon = exploreIcon;
  return (
    <>
    <div className="w-full h-60 md:h-96 xl:h-[30rem] my-6 relative">
            <div className="w-full h-full">
                <img src={exploreImg} className='w-full h-full object-cover' alt="food service" />
            </div>

            <div className={`absolute bottom-0 h-full w-full flex flex-col justify-end items-center md:pl-6 py-6 bg-gradient-to-b from-black/15 to-black-dark/60 md:${classFeature}`}>
                <div className="flex flex-col items-center md:items-start">
                    <div className="text-lg md:text-2xl font-bold capitalize text-white-default">{exploreTitle}</div>
                    <div className="text-sm font-normal text-white-default">{explorePara}</div>
                    <div className="my-4 flex md:justify-start">
                        <Icon buttonName={btnName} buttonIcon={MdSlowMotionVideo} classFeature="bg-secondary hover:bg-secondary-dark" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ExploreProcess