/* eslint-disable react/prop-types */

const HotelService = ({
  serviceIcon,
  serviceTitle,
  servicePara,
  classFeature,
  flexItemFeature,
}) => {
  const Icon = serviceIcon;
  return (
    <div
      className={`category-card flex flex-col items-center gap-4 ${flexItemFeature}`}
    >
      <div
        className={`flex flex-col items-center justify-center gap-2 ${flexItemFeature}`}
      >
        <Icon size={70} className="text-primary-light" />
        <div
          className={`text-xl font-bold capitalize text-black-dark ${classFeature}`}
        >
          {serviceTitle}
        </div>
      </div>

      <div
        className={`text-center text-sm font-normal text-black ${classFeature}`}
      >
        {servicePara}
      </div>
    </div>
  );
};

export default HotelService;
