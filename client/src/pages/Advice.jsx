import PageDescription from "../components/common/PageDescription"
import menChefPrimary from "../assets/images/page-men-chef-primary.png"
import menChefSecondary from "../assets/images/page-men-chef-secondary.png"
import UniqueTitle from "../components/common/UniqueTitle"
import AdviceCard from "../components/common/AdviceCard"
import AdvicePara from "../components/common/AdvicePara"
import QrScanner from "../components/common/QrScanner"


const Advice = () => {

  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <PageDescription 
          pageTitle="allergy advice"
          pageQuote="at our restaurant"
          pageParaPrimary="We use only the freshest and highest quality ingredients in all our dishes,"
          pageParaSecondary="and offer transpatency in our ingredient labeling."
          pagePrimaryImg={menChefPrimary}
          pageSecondaryImg={menChefSecondary}
          classFeature="text-start"
          flexFeature="justify-between"
      />

      <div className="mx-8 md:mx-16 xl:mx-32 flex flex-col gap-8">
        <UniqueTitle 
          primaryTitle={`ingredient's`}  
          secondaryTitle="used"
        />

        <div className="bg-ingredient-bg bg-contain bg-no-repeat w-full">
          <div className="flex flex-col items-center gap-10 h-5/6 my-6">
            <AdviceCard
            adviceTitle="For the Sough"
            adviceLists={["120 gms refined flour", "1/4 tsp baking powder", "1/2 tsp salt water (for kneading)"]}
            />

            <AdviceCard
            adviceTitle="For the Chicken Filling"
            adviceLists={["1cup chicken (minced)", "1/2 onions, finely chopped", "1/4 tsp black pepper powder", "1 tsp oil", "1/2 soya sauce", "salt", "1/4 tsp vinegar"]}
            />

            <AdviceCard
            adviceTitle="For the Sough"
            adviceLists={["120 gms refined flour", "1/4 tsp baking powder", "1/2 tsp salt water (for kneading)", "1/2 garlic paste", "1/2 soya sauce", "salt", "1/4 tsp vinegar"]}
            />

            <AdviceCard
            adviceTitle="For the Sough"
            adviceLists={["25 gms garlic, peeled", "6gm whole red chilly", "3 tsp vinegar", "1/2 garlic paste", "1 tsp oil", "salt", "1/4 tsp vinegar"]}
            />
          </div>
        </div>

      </div>

      <div className="allergy-advice mx-8 md:mx-16 xl:mx-32 flex flex-col gap-8"> 
        <UniqueTitle 
          primaryTitle={`ingredient's`}  
          secondaryTitle="used"
        />

        <AdvicePara 
            adviceParas= {["Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis! esse pariatur tempora perspiciatis assumenda quisquam corporis!",
            
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis! temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis!",

            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis! temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis!",

            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis! temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis!",

            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis! Quae mollitia temporibus adipisci deserunt qui optio hic porro illo iure libero? Repellendus officiis vero cupiditate corrupti unde fuga at aperiam eveniet sed, laudantium fugiat esse pariatur tempora perspiciatis assumenda quisquam corporis!"
          ]}
        />
      </div>

      <QrScanner />

    </div>
  )
}

export default Advice