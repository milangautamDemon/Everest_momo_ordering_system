/* eslint-disable react/prop-types */


import leftLine from "../../assets/images/left-line.png"
import rightLine from "../../assets/images/right-line.png"

const UniqueTitle = ({primaryTitle, secondaryTitle}) => {
  return (
    <div className="flex justify-center items-center gap-4 xl:gap-10 my-4">
        <img src={leftLine} />
        <div className="uppercase text-center text-2xl text-primary font-normal font-chela">{primaryTitle} <span className="text-black-dark">{secondaryTitle}</span> </div>
        <img src={rightLine} />
    </div>
  )
}

export default UniqueTitle