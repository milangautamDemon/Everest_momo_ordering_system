import PageDescription from "../components/common/PageDescription";
import menChefPrimary from "../assets/images/page-men-chef-primary.png"
import menChefSecondary from "../assets/images/page-men-chef-secondary.png"
import ExploreProcess from "../components/common/ExploreProcess";
import SecondaryButton from "../components/common/SecondaryButton"
import bgMomos from "../assets/images/momo-show.jpeg"
import ResturantForCustomer from "../components/common/ResturantForCustomer";
import { SiCodechef } from "react-icons/si";
import { GiPartyPopper } from "react-icons/gi";
import PrimaryButton from "../components/common/PrimaryButton";


const Services = () => {
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
      />

      <ResturantForCustomer 
        feature="flex-row"
        icon={GiPartyPopper} 
        title="private party"
        para="Only the best food withOnly the best food with top quality products and ingred Only the best food with top quality products and ingred top quality products and ingredients"
      />

      <ResturantForCustomer
        feature="flex-row" 
        icon={SiCodechef} 
        title="categring"
        para="Only the best food with top quality Only the best food with top quality products and ingred products Only the best food with top quality products and ingred and ingredients"
      />

      <div className="mx-8 md:mx-16 xl:mx-32 flex flex-col items-center gap-3 bg-white-light rounded-lg py-10 shadow-md">
        <div className="capitalize text-lg font-poppins font-semibold md:text-xl text-center">got any queries?</div>
        <div className="text-sm font-normal text-black text-center mb-4">if you have any queries, send us a message our friendly team would love to hear from you</div>
        <PrimaryButton buttonName="get in touch" classFeature="bg-secondary hover:bg-secondary-dark px-10" />
      </div>

    </div>
  )
}

export default Services