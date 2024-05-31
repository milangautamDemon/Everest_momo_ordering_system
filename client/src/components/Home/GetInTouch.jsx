import UserInputForm from "../common/UserInputForm";
import RestaurantContactDetails from "../RestaurantContactDetails";

const GetInTouch = () => {
  return (
    <div className="mx-8 my-8 flex flex-col gap-4 rounded-lg py-6 md:mx-16 xl:mx-32">
      <div className="flex flex-col items-center gap-2">
        <div className="text-xl font-bold capitalize md:text-2xl">
          get <span className="text-primary">in touch</span>
        </div>
        <div className="text-sm font-semibold capitalize text-secondary md:text-lg">
          Our team would love to hear from you
        </div>
      </div>

      <div className="contact flex w-full flex-col rounded-xl p-3 shadow-lg md:flex-row">
        <RestaurantContactDetails />
        <UserInputForm btnColor="bg-primary" />
      </div>
    </div>
  );
};

export default GetInTouch;
