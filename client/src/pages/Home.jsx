import 'react-phone-input-2/lib/style.css'
import { useContext } from "react";
import { Map } from "../components/Map";
import { mapContext } from "../context/mapContext";
import MostPopularMenu from "../components/Home/MostPopularMenu";
import CustomerLove from "../components/Home/CustomerLove";
import DisplayRestaurantHome from "../components/Home/DisplayRestaurantHome";
import ServiceOffers from '../components/Home/ServiceOffers';
import CustomerTalk from '../components/Home/CustomerTalk';
import GetInTouch from '../components/Home/GetInTouch';



const Home = () => {

    const {currentMarkerPosition, setCurrentMarkerPosition} = useContext(mapContext);

    return (
        <div className="font-poppins py-4 overflow-hidden">
            <div className=" px-8 md:px-16 xl:px-32">
                <DisplayRestaurantHome />
                <CustomerLove />
                <MostPopularMenu />
            </div>

            <ServiceOffers />

            <CustomerTalk />
            
            <GetInTouch />

            {/*map*/}
            <div className="w-full h-60 md:h-80 lg:h-96 mt-12">
                <Map currentMarkerPosition={currentMarkerPosition} setCurrentMarkerPosition={setCurrentMarkerPosition} />
            </div>

        </div>
    )
}

export default Home