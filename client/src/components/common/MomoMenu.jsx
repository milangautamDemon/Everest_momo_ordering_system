/* eslint-disable react/prop-types */

const MomoMenu = ({menuImg, menuName, menuPrice}) => {
  return (
    <div className="flex flex-col gap-1 items-center p-4 lg:mt-12">
      <img src={menuImg} className='w-32 h-20 mb-4 md:w-56 md:h-40 lg:mb-8' />
      <div className="capitalize text-sm md:text-lg font-bold text-black-dark">{menuName}</div>
      <div className="text-sm md:text-lg">रु <span className='text-lg md:text-2xl text-primary font-semibold'>{menuPrice}</span></div>
    </div>
  )
}

export default MomoMenu