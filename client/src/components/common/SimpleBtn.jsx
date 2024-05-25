/* eslint-disable react/prop-types */


const SimpleBtn = ({btnName, handleButton}) => {
  return (
    <div onClick={handleButton} className="w-20 h-8 md:w-28 md:h-10 flex justify-center items-center border-2 border-solid border-black-light hover:border-black active:border-black-dark rounded-full">
        <button type="button" className="capitalize text-sm font-semibold" data-bs-toggle="button" aria-pressed="true">{btnName}</button>
    </div>
  )
}

export default SimpleBtn;