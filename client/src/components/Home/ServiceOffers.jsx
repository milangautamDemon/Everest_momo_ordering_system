import SecondaryButton from "../common/SecondaryButton";
import { TiArrowRight } from "react-icons/ti";
import HotelService from "../common/HotelService";
import { GiPartyPopper } from "react-icons/gi";
import { GiOpenedFoodCan } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import serviceImg from "../../assets/images/service-img.jpeg";
import ExploreProcess from "../common/ExploreProcess";
import { useNavigate } from "react-router-dom";

const ServiceOffers = () => {
  const navigate = useNavigate();

  const handleMenu = () => navigate("/menu");
  return (
    <div className="my-10">
      <div className="pb-8 text-center text-xl font-bold capitalize md:text-2xl">
        <span className="text-primary">we offer people</span> the service they
        want
      </div>

      <ExploreProcess
        exploreIcon={SecondaryButton}
        exploreImg={serviceImg}
        exploreTitle="Process behind the making"
        explorePara="See how only chefs cooks only the best momos"
        btnName="explore food menu"
        classFeature="items-center"
        handle={handleMenu}
      />

      <div className="mx-8 my-12 flex flex-col gap-4 md:mx-16 xl:mx-32">
        <div className="md: my-4 flex flex-col items-center justify-center gap-10 md:flex-row">
          <HotelService
            serviceIcon={GiOpenedFoodCan}
            serviceTitle="quality food"
            servicePara="Only the best food with top quality products and ingredients"
            classFeature="lg:text-center"
          />
          <HotelService
            serviceIcon={GiPartyPopper}
            serviceTitle="private party"
            servicePara="Only the best food with top quality products and ingredients"
            classFeature="lg:text-center"
          />
          <HotelService
            serviceIcon={SiCodechef}
            serviceTitle="categring"
            servicePara="Only the best food with top quality products and ingredients"
            classFeature="lg:text-center"
          />
        </div>

        <div className="my-6 flex justify-center">
          <SecondaryButton
            onClick={handleMenu}
            buttonName="explore food menu"
            buttonIcon={TiArrowRight}
            classFeature="bg-secondary flex-row-reverse hover:bg-secondary-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceOffers;
