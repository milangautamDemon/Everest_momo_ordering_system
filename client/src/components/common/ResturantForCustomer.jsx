/* eslint-disable react/prop-types */

import customerLunchImg from "../../assets/images/group-lunch.jpeg"
import qrScanner from "../../assets/images/scan-me.png"
import HotelService from "./HotelService"


const ResturantForCustomer = ({feature, icon, title, para }) => {
  return (

    <div className={`px-8 my-8 py-4 md:px-16 xl:px-32 w-full h-full flex flex-col gap-8 lg:gap-12 ${feature} lg:justify-between lg:items-start`}>

        <div className="flex flex-col gap-4 items-center h-auto w-full lg:items-start lg:w-1/2">
            <HotelService 
                serviceIcon={icon} 
                serviceTitle={title} 
                servicePara={para}
                classFeature="md:text-start" 
                flexItemFeature="md:items-start"
            />
            <div className=" w-full flex justify-center md:justify-end lg:justify-start">
                <div className="flex items-center gap-12 lg:justify-between p-4 shadow-md rounded-md">
                    <div className="flex flex-col gap-1">
                        <div className="text-secondary font-semibold">
                            Scan the QR code
                        </div>
                        <div className="text-sm text-secondary-light font-light">
                            You can also check  about the services
                        </div>
                    </div>
                    <div className="h-20 w-20">
                        <img src={qrScanner} alt="QR Scanner" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full lg:w-1/2 h-full">
            <img src={customerLunchImg} alt="customer lunch" className="w-full h-72 lg:h-full rounded-lg object-cover" />
        </div>

    </div>

  )
}

export default ResturantForCustomer