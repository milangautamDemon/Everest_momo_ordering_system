import PageDescription from "../components/common/PageDescription"
import MomoMenuList from "../components/common/MomoMenuList";
import buffSteamMomo from "../assets/images/sea-momo.png"

import QrScanner from "../components/common/QrScanner";
import UniqueTitle from "../components/common/UniqueTitle";

const Menu = () => {
  return (
    <div className="mx-8 md:mx-16 xl:mx-32">

      <PageDescription 
          pageTitle="our menu"
          pageParaPrimary="Our menu is more than just momos,"
          pageParaSecondary="with a variety of dishes to cater to all taste and preferences"
          classFeature="text-center"
          flexFeature="justify-center"
      />

      <QrScanner />

      <div className="py-4 mt-6 md:mt-12 md:py-6 flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <UniqueTitle 
            primaryTitle="chicken" 
            secondaryTitle={`momo's`} 
          />

          <div className="grid grid-cols-1 justify-items-center sm:justify-between sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

          </div>
        </div>

        <div className="flex flex-col gap-8">
          <UniqueTitle 
            primaryTitle="buff" 
            secondaryTitle={`momo's`} 
          />

          <div className="grid grid-cols-1 justify-items-center sm:justify-between sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

            <MomoMenuList 
              menuImg={buffSteamMomo}
              menuName="buff steam momo"
              menuPrice="200"
              itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
            />

          </div>
        </div>

      </div>

    </div>
  )
}

export default Menu