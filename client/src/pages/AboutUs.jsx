import womenChefPrimary from "../assets/images/page-women-chef-primary.png"
import womenChefSecondary from "../assets/images/page-women-chef-secondary.png"
import SecondaryButton from "../components/common/SecondaryButton"
import cookingImg from "../assets/images/cooking-img.jpeg"
import ExploreProcess from "../components/common/ExploreProcess";
import PageDescription from "../components/common/PageDescription";
import {useNavigate} from "react-router-dom";
import TeamTalk from "../components/AboutUs/TeamTalk";
import ChefServiceMap from "../components/AboutUs/ChefServiceMap";
import StaffTeams from "../components/AboutUs/StaffTeams";


const AboutUs = () => {
  const navigate = useNavigate();

  const handleMenu = () => navigate("../menu")
  return (
    <div className="pb-10 font-poppins">

        <PageDescription 
            pageTitle="about us"
            pageQuote="we pride ourself on"
            pageParaPrimary="Our authentic momo recipes"
            pageParaSecondary="passed down through generations"
            pagePrimaryImg={womenChefPrimary}
            pageSecondaryImg={womenChefSecondary}
            classFeature="text-start"
            flexFeature="justify-between"
        />

        <ExploreProcess 
          exploreIcon={SecondaryButton}
          exploreImg={cookingImg}
          exploreTitle="Process behind the making"
          explorePara="See how only chefs cooks only the best momos"
          btnName="explore food menu"
          classFeature="items-start"
          handle={handleMenu}
        />
        
        <ChefServiceMap />

        <TeamTalk />

        <StaffTeams />


    </div>
  )
}

export default AboutUs