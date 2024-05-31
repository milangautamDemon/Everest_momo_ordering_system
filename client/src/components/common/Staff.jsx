/* eslint-disable react/prop-types */

const Staff = ({ staffImg, staffTitle }) => {
  return (
    <div className="relative h-60 w-40 sm:h-40 sm:w-32 md:h-60 md:w-52">
      <img
        src={staffImg}
        alt="Staff Image"
        className="h-full w-full rounded-sm object-cover"
      />
      <div className="absolute bottom-0 flex h-full w-full items-end bg-gradient-to-b from-black/5 to-black-dark/70 p-3 font-semibold capitalize text-white-default md:text-lg">
        {staffTitle}
      </div>
    </div>
  );
};

export default Staff;
export { Staff };
