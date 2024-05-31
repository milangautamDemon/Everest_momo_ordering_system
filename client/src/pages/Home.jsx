import "react-phone-input-2/lib/style.css";
import MostPopularMenu from "../components/Home/MostPopularMenu";
import CustomerLove from "../components/Home/CustomerLove";
import DisplayRestaurantHome from "../components/Home/DisplayRestaurantHome";
import ServiceOffers from "../components/Home/ServiceOffers";
import CustomerTalk from "../components/Home/CustomerTalk";
import GetInTouch from "../components/Home/GetInTouch";
import Map from "../components/Map";

const Home = () => {
  return (
    <div className="overflow-hidden py-4 font-poppins">
      <div className="px-8 md:px-16 xl:px-32">
        <DisplayRestaurantHome />
        <CustomerLove />
        <MostPopularMenu />
      </div>

      <ServiceOffers />

      <CustomerTalk />

      <GetInTouch />

      {/*map*/}
      <div className="mt-12 h-60 w-full md:h-80 lg:h-96">
        <Map />
      </div>
    </div>
  );
};

export default Home;
