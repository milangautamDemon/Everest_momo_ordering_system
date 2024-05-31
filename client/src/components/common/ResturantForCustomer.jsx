/* eslint-disable react/prop-types */

import customerLunchImg from "../../assets/images/group-lunch.jpeg";
import qrScanner from "../../assets/images/scan-me.png";
import HotelService from "./HotelService";

const ResturantForCustomer = ({ feature, icon, title, para }) => {
  return (
    <div
      className={`my-8 flex h-full w-full flex-col gap-8 px-8 py-4 md:px-16 lg:gap-12 xl:px-32 ${feature} lg:items-start lg:justify-between`}
    >
      <div className="flex h-auto w-full flex-col items-center gap-4 lg:w-1/2 lg:items-start">
        <HotelService
          serviceIcon={icon}
          serviceTitle={title}
          servicePara={para}
          classFeature="md:text-start"
          flexItemFeature="md:items-start"
        />
        <div className="flex w-full justify-center md:justify-end lg:justify-start">
          <div className="flex items-center gap-12 rounded-md p-4 shadow-md lg:justify-between">
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-secondary">
                Scan the QR code
              </div>
              <div className="text-sm font-light text-secondary-light">
                You can also check about the services
              </div>
            </div>
            <div className="h-20 w-20">
              <img src={qrScanner} alt="QR Scanner" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full lg:w-1/2">
        <img
          src={customerLunchImg}
          alt="customer lunch"
          className="h-72 w-full rounded-lg object-cover lg:h-full"
        />
      </div>
    </div>
  );
};

export default ResturantForCustomer;
