/* eslint-disable react/prop-types */

const SimpleBtn = ({ btnName, isActive, ...handle }) => {
  return (
    <div
      {...handle}
      className={`flex h-8 w-20 items-center justify-center border-2 border-solid md:h-10 md:w-28 ${isActive ? "border-black-dark" : "border-black-light"} cursor-pointer rounded-full`}
    >
      <button
        type="button"
        className="text-sm font-semibold capitalize"
        data-bs-toggle="button"
        aria-pressed="true"
      >
        {btnName}
      </button>
    </div>
  );
};

export default SimpleBtn;
