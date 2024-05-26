/* eslint-disable react/prop-types */

const HotelService = ({serviceIcon, serviceTitle, servicePara, classFeature, paraClassTextFeature}) => {
  const Icon = serviceIcon;
  return (
      <div className={`category-card flex flex-col gap-4 ${classFeature}`}>
        <div className={`flex flex-col gap-2 justify-center ${classFeature}`}>
            <Icon size={70} className="text-primary-light" />
            <div className="text-xl capitalize font-bold text-black-dark">
              {serviceTitle}
            </div>
        </div>
       
        <div className={`text-sm font-normal text-black text-center 
        md:${paraClassTextFeature}`}>{servicePara}</div>
      </div>
  )
}

export default HotelService