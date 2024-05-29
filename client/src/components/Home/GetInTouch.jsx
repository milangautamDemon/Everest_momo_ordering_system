import UserInputForm from "../common/UserInputForm";
import RestaurantContactDetails from "../RestaurantContactDetails";


const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-4 my-8 py-6 mx-8 md:mx-16 xl:mx-32 rounded-lg">
        <div className="flex flex-col items-center gap-2">
            <div className="text-xl md:text-2xl font-bold capitalize">
                get <span className="text-primary">in touch</span>
            </div>
            <div className="text-sm md:text-lg font-semibold text-secondary capitalize">Our team would love to hear from you</div>
        </div>

        <div className="contact flex flex-col md:flex-row w-full  shadow-lg p-3 rounded-xl">
            <RestaurantContactDetails />
            <UserInputForm btnColor="bg-primary"/>
        </div>
    </div>
  )
}

export default GetInTouch