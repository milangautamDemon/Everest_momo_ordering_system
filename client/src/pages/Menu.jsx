import PageDescription from "../components/common/PageDescription"
import qrScanner from "../assets/images/scan-me.png"
import { FaMobileScreenButton } from "react-icons/fa6";
import MomoMenuList from "../components/common/MomoMenuList";
import buffSteamMomo from "../assets/images/sea-momo.png"

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

      <div className="py-6 px-4 flex flex-col gap-10 bg-white-light rounded-lg shadow-md">
        <div className="flex flex-col items-center gap-1">
          <div className="text-secondary text-lg text-center font-bold">
              Scan the QR code
          </div>
          <div className="text-black font-medium text-center">
              You can also check  about the allergy advices using your as well
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src={qrScanner} alt="QR Scanner" className="h-28 w-28" />
          <div className="flex items-center justify-center gap-1 text-lg text-black-dark font-bold uppercase">
            <div>
              <span className="text-primary">scan</span> me!
            </div>
            <div><FaMobileScreenButton /></div>
          </div>
        </div>
      </div>

    <div className="py-4 mt-6 md:mt-12 md:py-6">
      <div className="">
        <div className="">

        </div>
        <div className="grid grid-cols-1 justify-items-center sm:justify-between sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <MomoMenuList 
            menuImg={buffSteamMomo}
            menuName="buff steam momo"
            menuPrice="price"
            itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
          />

          <MomoMenuList 
            menuImg={buffSteamMomo}
            menuName="buff steam momo"
            menuPrice="price"
            itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
          />

          <MomoMenuList 
            menuImg={buffSteamMomo}
            menuName="buff steam momo"
            menuPrice="price"
            itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
          />

          <MomoMenuList 
            menuImg={buffSteamMomo}
            menuName="buff steam momo"
            menuPrice="price"
            itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
          />

          <MomoMenuList 
            menuImg={buffSteamMomo}
            menuName="buff steam momo"
            menuPrice="price"
            itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
          />

          <MomoMenuList 
            menuImg={buffSteamMomo}
            menuName="buff steam momo"
            menuPrice="price"
            itemDescription="Freshly Stream Buff Momos made from whole wheat and kneaded with beta Carotena Rich Vegetable Juice"
          />

        </div>
      </div>

    </div>

</div>
  )
}

export default Menu