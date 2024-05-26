/* eslint-disable react/prop-types */

import customerLunchImg from "../../assets/images/group-lunch.jpeg"
import HotelService from "./HotelService"
import { GiOpenedFoodCan } from "react-icons/gi";
import qrScanner from "../../assets/images/scan-me.png"


const ResturantForCustomer = ({classFeature}) => {
  return (

    <div className={`px-8 md:px-16 xl:px-32 w-full flex flex-col gap-8 md:gap-12 md:${classFeature} md:justify-between md:items-start`}>

        <div className="flex flex-col gap-4 items-center w-full md:items-start md:w-1/2">
            <HotelService 
                serviceIcon={GiOpenedFoodCan} 
                serviceTitle="quality food" 
                servicePara="Only the best food with top quality products and ingredients" 
                classFeature="items-center md:items-start" 
            />

            <div className="flex items-center gap-12 md:justify-between p-4 shadow-md rounded-md">
                <div className="">
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