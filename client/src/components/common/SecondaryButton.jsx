/* eslint-disable react/prop-types */
const SecondaryButton = ({
  buttonName,
  classFeature,
  buttonIcon,
  ...handle
}) => {
  const Icon = buttonIcon;
  return (
    <>
      <button
        {...handle}
        type="button"
        className={`flex items-center gap-1 rounded-full px-8 py-3 text-sm font-light capitalize text-white-default lg:gap-2 ${classFeature}`}
        data-bs-toggle="button"
      >
        <div className="icon text-lg lg:text-xl">
          <Icon />
        </div>
        <div className="">{buttonName}</div>
      </button>
    </>
  );
};

export { SecondaryButton };
export default SecondaryButton;
