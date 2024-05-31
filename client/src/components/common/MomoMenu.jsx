/* eslint-disable react/prop-types */

const MomoMenu = ({ menuImg, menuName, menuPrice }) => {
  return (
    <div className="flex flex-col items-center gap-1 p-4 lg:mt-12">
      <img src={menuImg} className="mb-4 h-20 w-32 md:h-40 md:w-56 lg:mb-8" />
      <div className="text-sm font-bold capitalize text-black-dark md:text-lg">
        {menuName}
      </div>
      <div className="text-sm md:text-lg">
        रु{" "}
        <span className="text-lg font-semibold text-primary md:text-2xl">
          {menuPrice}
        </span>
      </div>
    </div>
  );
};

export default MomoMenu;
