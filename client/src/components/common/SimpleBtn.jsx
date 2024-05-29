/* eslint-disable react/prop-types */


const SimpleBtn = ({btnName, isActive, ...handle}) => {
  return (
    <div {...handle} className={`w-20 h-8 md:w-28 md:h-10 flex justify-center items-center border-2 border-solid ${isActive? "border-black-dark" : "border-black-light"} rounded-full cursor-pointer`}>
        <button type="button" className="capitalize text-sm font-semibold" data-bs-toggle="button" aria-pressed="true">{btnName}</button>
    </div>
  )
}

export default SimpleBtn;