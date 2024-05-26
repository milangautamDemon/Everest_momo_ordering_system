/* eslint-disable react/prop-types */

import customerLunchImg from "../../assets/images/group-lunch.jpeg"
import qrScanner from "../../assets/images/scan-me.png"
import HotelService from "./HotelService"


const ResturantForCustomer = ({feature, icon, title, para }) => {
  return (

    <div className={`px-8 my-8 py-4 md:px-16 xl:px-32 w-full flex flex-col gap-8 md:gap-12 md:${feature} md:justify-between md:items-start`}>

        <div className="flex flex-col gap-4 items-center w-full md:items-start md:w-1/2">
            <HotelService 
                serviceIcon={icon} 
                serviceTitle={title} 
                servicePara={para} 
                classFeature="items-center md:items-start"
                paraClassTextFeature="text-start" 
            />

            <div className="flex items-center gap-12 md:justify-between p-4 shadow-md rounded-md">
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

        <div className="w-full md:w-1/2">
            <img src={customerLunchImg} alt="customer lunch" className="w-full h-auto sm:h-72 rounded-lg" />
        </div>

    </div>

  )
}

export default ResturantForCustomer