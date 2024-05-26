import { useContext } from "react"
import { Map } from "../components/Map"
import { mapContext } from "../context/mapContext";
import UserInputForm from "../components/common/UserInputForm";
import ContactCard from "../components/common/ContactCard";
import { RiMapPinFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";

const ContactUs = () => {
  const {currentMarkerPosition, setCurrentMarkerPosition} = useContext(mapContext);

  return (
    <div className="pt-8">
      <div className="font-poppins px-8 pb-8 md:px-16 xl:px-32">
        <div className="font-allura text-4xl font-medium text-secondary-light capitalize text-center py-4">
          our contact
        </div>
        <div className="flex flex-col gap-1 text-center items-center">
          <div className="text-black uppercase text-sm font-light">get in touch</div>
          <div className="text-black-dark text-sm md:text-lg font-semibold"><span className="text-primary capitalize">our friendly team</span> would love to hear from you</div>
        </div>
        <div className="flex flex-col gap-10 py-8 items-center md:flex-row md:gap-0 md:justify-between">
          <ContactCard 
            cardIcon={RiMapPinFill}
            cardHeading="location"
            cardTopRightText="new baneshwor-41203,"
            cardTopSecondText="kathmandu, bagmati, nepal"
          />

          <ContactCard 
            cardIcon={BsTelephoneFill}
            cardHeading="phone"
            cardTopTitle="mobile:"
            cardTopRightText="(+0977)9875624536"
            cardTopSecondText="(+0977)9875624536"
            cardBottomTitle="tel:"
            cardBottomText="01-93843433"
          /> 

          <ContactCard 
            cardIcon={FaClock}
            cardHeading="service time"
            cardTopTitle="mon - fri"
            cardTopRightText="(+0977)9875624536"
            cardBottomTitle="sat - sun"
            cardBottomText="closed"
          /> 

        </div>
      </div>

      <div className="w-full flex flex-col md:w-100% md:flex-row bg-white-light">
        {/*map*/}
        <div className="w-full h-80 md:h-auto md:w-1/2">
            <Map currentMarkerPosition={currentMarkerPosition} setCurrentMarkerPosition={setCurrentMarkerPosition} />
        </div>
        {/*user input form*/}
        <div className="bg-white-light md:bg-white-default py-8 md:w-1/2 lg:m-8 lg:shadow-md lg:rounded-lg">
          <UserInputForm btnColor="bg-secondary" />
        </div>
      </div>
    </div>
  )
}

export default ContactUs