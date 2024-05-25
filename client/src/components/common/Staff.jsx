/* eslint-disable react/prop-types */


const Staff = ({ staffImg, staffTitle }) => {
  return (
    <div className="relative h-60 w-40 sm:h-40 sm:w-32 md:h-60 md:w-40">
        <img src={staffImg} alt="Staff Image" className="h-full w-full object-cover rounded-sm" />
        <div className="absolute bottom-0 md:text-lg flex items-end text-white-default font-semibold capitalize p-3 h-full w-full bg-gradient-to-b from-black/5 to-black-dark/70">
        {staffTitle}
        </div>
    </div>
  )
}

export default Staff;
export { Staff };
