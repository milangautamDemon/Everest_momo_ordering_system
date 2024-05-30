import PageDescription from "../components/common/PageDescription";
import menChefPrimary from "../assets/images/page-men-chef-primary.png"
import menChefSecondary from "../assets/images/page-men-chef-secondary.png"
import ExploreProcess from "../components/common/ExploreProcess";
import SecondaryButton from "../components/common/SecondaryButton"
import bgMomos from "../assets/images/momo-show.jpeg"
import PrimaryButton from "../components/common/PrimaryButton";
import {useNavigate} from "react-router-dom";
import { CustomerServices } from "../components/OurServices/CustomerServices";


const Services = () => {

  const navigate = useNavigate();

  const handleMenu = () => navigate("../menu")
  const handleGetInTouch = () => navigate("../contact")

  return (
    <div className="pb-10 font-poppins">
      
      <PageDescription 
          pageTitle="our services"
          pageQuote="knowing our customers needs"
          pageParaPrimary="we're more than just momos."
          pageParaSecondary="we're a full-service dining experience."
          pagePrimaryImg={menChefPrimary}
          pageSecondaryImg={menChefSecondary}
          classFeature="text-start"
          flexFeature="justify-between"
      />

      <ExploreProcess 
        exploreIcon={SecondaryButton}
        exploreImg={bgMomos}
        exploreTitle="dine with us"
        explorePara="Enjoy our momos in the comfort of your own home with our delivery services"
        btnName="watch the video"
        classFeature="items-start"
        handle={handleMenu}
      />

      <CustomerServices />

      <div className="mx-8 md:mx-16 xl:mx-32 flex flex-col items-center gap-3 bg-white-light rounded-lg py-10 shadow-md">
        <div className="capitalize text-lg font-poppins font-semibold md:text-xl text-center">got any queries?</div>
        <div className="text-sm font-normal text-black text-center mb-4">if you have any queries, send us a message our friendly team would love to hear from you</div>
        <PrimaryButton onClick={handleGetInTouch} buttonName="get in touch" classFeature="bg-secondary hover:bg-secondary-dark px-10" />
      </div>

    </div>
  )
}

export default Services