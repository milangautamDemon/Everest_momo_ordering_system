/* eslint-disable react/prop-types */

const HotelService = ({serviceIcon, serviceTitle, servicePara, classFeature, flexItemFeature}) => {
  const Icon = serviceIcon;
  return (
      <div className={`category-card flex flex-col gap-4 items-center ${flexItemFeature}`}>
        <div className={`flex flex-col gap-2 justify-center items-center ${flexItemFeature}`}>
            <Icon size={70} className="text-primary-light" />
            <div className={`text-xl capitalize font-bold text-black-dark ${classFeature}`}>
              {serviceTitle}
            </div>
        </div>
       
        <div className={`text-sm font-normal text-black text-center 
        ${classFeature}`}>{servicePara}</div>
      </div>
  )
}

export default HotelService