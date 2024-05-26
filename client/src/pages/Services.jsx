import PageDescription from "../components/common/PageDescription";
import menChefPrimary from "../assets/images/page-men-chef-primary.png"
import menChefSecondary from "../assets/images/page-men-chef-secondary.png"
import ExploreProcess from "../components/common/ExploreProcess";
import SecondaryButton from "../components/common/SecondaryButton"
import bgMomos from "../assets/images/momo-show.jpeg"
import ResturantForCustomer from "../components/common/ResturantForCustomer";

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
      />

            
      <ExploreProcess 
        exploreIcon={SecondaryButton}
        exploreImg={bgMomos}
        exploreTitle="dine with us"
        explorePara="Enjoy our momos in the comfort of your own home with our delivery services"
        btnName="watch the video"
        classFeature="items-start"
      />

      <ResturantForCustomer classFeature="flex-row" />

    </div>
  )
}

export default Services