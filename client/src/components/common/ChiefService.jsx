/* eslint-disable react/prop-types */

const ChiefService = ({
  primaryHeading,
  blackHeading,
  normalPara,
  cookingImage,
  momoImg,
  classFeature,
}) => {
  return (
    <div className={`px-8 md:px-16 xl:px-32`}>
      <div
        className={`flex w-full flex-col gap-8 md:gap-12 ${classFeature} md:items-start md:justify-between`}
      >
        <div className="flex w-full flex-col gap-4 md:w-1/2">
          <div className="text-center text-lg font-bold text-black-dark md:text-start md:text-xl">
            {blackHeading}{" "}
            <span className="text-primary">{primaryHeading}</span>
          </div>
          <div className="text-center text-sm text-black md:text-start">
            {normalPara}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={cookingImage}
            alt="Hotel Service Image"
            className="h-60 w-full rounded-lg object-cover sm:h-72 md:rounded-none"
          />
        </div>
      </div>
      <div className="momo hidden md:flex md:-translate-y-20 md:justify-center">
        <img
          src={momoImg}
          alt="momo image"
          className="hidden md:block md:w-40"
        />
      </div>
    </div>
  );
};

export default ChiefService;
export { ChiefService };
