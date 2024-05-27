/* eslint-disable react/prop-types */

import MomoMenu from "./MomoMenu"

const MomoMenuList = ({menuImg, menuName, menuPrice, itemDescription}) => {
  return (
    <div className="w-56 h-auto flex flex-col items-center gap-3 my-8">
        <MomoMenu 
            menuImg={menuImg}
            menuName={menuName} 
            menuPrice={menuPrice}
        />
        <div className="text-black-light text-center text-xs md:text-sm font-normal">
            {itemDescription}
        </div>
    </div>
  )
}

export default MomoMenuList