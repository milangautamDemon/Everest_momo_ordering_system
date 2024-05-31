import ChiefService from "../common/ChiefService";
import momoImg1 from "../../assets/images/sea-momo.png";
import cookingFood from "../../assets/images/food-making.jpeg";

const serviceDatas = [
  {
    classFeature: "md:flex-row",
    blackHeading: "Our momos are",
    primaryHeading: "made with love",
    normalPara:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex quod odit impedit inventore sed dolorum reprehenderit. Facilis, corrupti unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, tenetur.",
    momoImg: momoImg1,
    cookingImage: cookingFood,
  },
  {
    classFeature: "md:flex-row-reverse",
    blackHeading: "Our momos are",
    primaryHeading: "made with love",
    normalPara:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex quod odit impedit inventore sed dolorum reprehenderit. Facilis, corrupti unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, tenetur.",
    momoImg: momoImg1,
    cookingImage: cookingFood,
  },
  {
    classFeature: "md:flex-row",
    blackHeading: "Our momos are",
    primaryHeading: "made with love",
    normalPara:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus ex quod odit impedit inventore sed dolorum reprehenderit. Facilis, corrupti unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, tenetur.",
    momoImg: momoImg1,
    cookingImage: cookingFood,
  },
];

const ChefServiceMap = () => {
  return (
    <div className="mt-8 flex flex-col gap-10 pt-14">
      {serviceDatas.map((data, index) => (
        <ChiefService
          key={index}
          classFeature={data.classFeature}
          blackHeading={data.blackHeading}
          primaryHeading={data.primaryHeading}
          normalPara={data.normalPara}
          momoImg={data.momoImg}
          cookingImage={data.cookingImage}
        />
      ))}
    </div>
  );
};

export default ChefServiceMap;
