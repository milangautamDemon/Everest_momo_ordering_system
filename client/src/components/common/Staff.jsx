/* eslint-disable react/prop-types */

const Staff = ({ staffImg, staffTitle }) => {
  return (
    <div className="">
        <img src={staffImg} alt="Staff Image" className="" />
        <div className="
       ">
          {staffTitle}
        </div>
    </div>
  )
}

export default Staff;
export { Staff };
