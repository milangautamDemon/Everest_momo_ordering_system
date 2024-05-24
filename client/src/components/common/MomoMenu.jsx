/* eslint-disable react/prop-types */

const MomoMenu = ({menuImg, menuName, menuPrice}) => {
  return (
    <div className="flex flex-col gap-1 items-center">
        <img src={menuImg} className='w-32 mb-4 lg:mb-8' />
        <div className="capitalize text-lg font-bold text-black-dark">{menuName}</div>
        <div className="text-lg">रु <span className='text-2xl text-primary font-bold'>{menuPrice}</span></div>
    </div>
  )
}

export default MomoMenu