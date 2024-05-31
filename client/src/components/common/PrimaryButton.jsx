/* eslint-disable react/prop-types */
const PrimaryButton = ({ buttonName, classFeature, ...handle }) => {
  return (
    <>
      <button
        type="button"
        className={`rounded-full py-2 capitalize text-white-default ${classFeature}`}
        {...handle}
        data-bs-toggle="button"
      >
        {buttonName}
      </button>
    </>
  );
};

export { PrimaryButton };
export default PrimaryButton;
