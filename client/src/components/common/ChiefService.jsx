/* eslint-disable react/prop-types */
const ChiefService = ({ serviceClass, servicImage, momoImg }) => {
  return (
    <div className={`chief-service-card`}>
        <div className={`${serviceClass}`}>
            <div className="/* eslint-disable react/prop-types */"></div>
            <div className="/* eslint-disable react/prop-types */">
               <img src={servicImage} alt="Hotel Service Image" className="" />
            </div>
        </div>
        <img src={momoImg} alt="momo image" className="" />
    </div>
  )
}

export default ChiefService;
export { ChiefService };
