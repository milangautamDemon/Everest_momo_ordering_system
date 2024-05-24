/* eslint-disable react/prop-types */


const SimpleBtn = ({btnName, handleButton}) => {
  return (
    <div onClick={handleButton} className="w-28 h-10 flex justify-center items-center border-2 border-solid border-black-light hover:border-black active:border-black-dark rounded-full">
        <button type="button" className="capitalize font-semibold" data-bs-toggle="button" aria-pressed="true">{btnName}</button>
    </div>
  )
}

export default SimpleBtn;