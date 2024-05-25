/* eslint-disable react/prop-types */
const HotelService = ({serviceIcon, serviceTitle, servicePara}) => {
  const Icon = serviceIcon;
  return (
      <div className="category-card flex flex-col items-center gap-2 py-4">
        <div className="text-primary-light"><Icon size={70} /></div>
        <h5 className="text:xl md:text-2xl font-bold text-black-dark">{serviceTitle}</h5>
        <p className="text-sm font-normal text-black-dark text-center">{servicePara}</p>
      </div>
  )
}

export default HotelService;
export { HotelService };