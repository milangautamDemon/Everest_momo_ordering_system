/* eslint-disable react/prop-types */
const PrimaryButton = ({ buttonName, classFeature, ...handle }) => {
  return (
    <>
        <button type="button" className={`py-2 capitalize rounded-full text-white-default ${classFeature}`} {...handle} data-bs-toggle="button">
            {buttonName}
        </button>
    </>
  )
}

export { PrimaryButton };
export default PrimaryButton;