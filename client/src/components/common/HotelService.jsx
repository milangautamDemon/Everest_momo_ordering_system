/* eslint-disable react/prop-types */
const HotelService = ({serviceIcon, serviceTitle, servicePara}) => {
  const Icon = serviceIcon;
  return (
      <div className="category-card">
        <div className=""><Icon size={70} /></div>
        <h5 className="">{serviceTitle}</h5>
        <p className="">{servicePara}</p>
      </div>
  )
}

export default HotelService;
export { HotelService };