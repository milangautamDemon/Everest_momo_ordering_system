import UserInputForm from "../components/common/UserInputForm";
import ContactCard from "../components/common/ContactCard";
import { RiMapPinFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
import Map from "../components/Map";

const ContactUs = () => {
  return (
    <div className="pt-8">
      <div className="px-8 pb-8 font-poppins md:px-16 xl:px-32">
        <div className="py-4 text-center font-allura text-4xl font-medium capitalize text-secondary-light">
          our contact
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="text-sm font-light uppercase text-black">
            get in touch
          </div>
          <div className="text-sm font-semibold text-black-dark md:text-lg">
            <span className="capitalize text-primary">our friendly team</span>{" "}
            would love to hear from you
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 py-8 md:flex-row md:justify-between md:gap-0">
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

      <div className="md:w-100% flex w-full flex-col bg-white-light md:flex-row">
        {/*map*/}
        <div className="h-80 w-full md:h-auto md:w-1/2">
          <Map />
        </div>
        {/*user input form*/}
        <UserInputForm btnColor="bg-secondary" />
      </div>
    </div>
  );
};

export default ContactUs;
