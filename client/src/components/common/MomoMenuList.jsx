/* eslint-disable react/prop-types */

const MomoMenuList = ({ menuImg, menuName, menuPrice, itemDescription }) => {
  return (
    <div className="my-4 flex h-auto w-56 flex-col items-center gap-3">
      <div className="flex flex-col items-center gap-1 p-4">
        <img src={menuImg} className="mb-4 h-20 w-32 lg:mb-8" />
        <div className="text-sm font-bold capitalize text-black-dark">
          {menuName}
        </div>
        <div className="text-sm xl:text-lg">
          रु{" "}
          <span className="text-lg font-semibold text-primary xl:text-lg">
            {menuPrice}
          </span>
        </div>
      </div>
      {itemDescription && (
        <div
          className={`text-center text-xs font-normal text-black-light xl:text-sm`}
        >
          {itemDescription}
        </div>
      )}
    </div>
  );
};

export default MomoMenuList;
