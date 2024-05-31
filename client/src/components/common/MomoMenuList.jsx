/* eslint-disable react/prop-types */

import MomoMenu from "./MomoMenu";

const MomoMenuList = ({ menuImg, menuName, menuPrice, itemDescription }) => {
  return (
    <div className="my-8 flex h-auto w-56 flex-col items-center gap-3">
      <MomoMenu menuImg={menuImg} menuName={menuName} menuPrice={menuPrice} />
      <div className="text-center text-xs font-normal text-black-light md:text-sm">
        {itemDescription}
      </div>
    </div>
  );
};

export default MomoMenuList;
