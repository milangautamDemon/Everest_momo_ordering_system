/* eslint-disable react/prop-types */

const ChiefService = ({ primaryHeading, blackHeading, normalPara, cookingImage, momoImg, classFeature }) => {
  return (
    <div className={`px-8 md:px-16 xl:px-32`}>
        <div className={`w-full flex flex-col gap-8 md:gap-12 ${classFeature} md:justify-between md:items-start`}>
            <div className="flex flex-col gap-4 w-full  md:w-1/2">
              <div className="text-lg md:text-xl font-bold text-black-dark text-center md:text-start">{blackHeading} <span className="text-primary">{primaryHeading}</span></div>
              <div className="text-sm text-black text-center md:text-start">
               {normalPara}
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
               <img src={cookingImage} alt="Hotel Service Image" className="w-full h-60 sm:h-72 rounded-lg md:rounded-none object-cover" />
            </div>
        </div>
        <div className="momo hidden md:flex md:justify-center md:-translate-y-20">
          <img src={momoImg} alt="momo image" className="hidden md:block md:w-40" />
        </div>
    </div>
  )
}

export default ChiefService;
export { ChiefService };
