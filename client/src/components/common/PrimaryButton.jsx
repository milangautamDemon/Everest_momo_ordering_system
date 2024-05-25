/* eslint-disable react/prop-types */
const PrimaryButton = ({ buttonName, classFeature, handleButton }) => {
  return (
    <>
        <button type="button" className={`py-2 capitalize text-lg rounded-full text-white-default ${classFeature}`} onClick={handleButton} data-bs-toggle="button">
            {buttonName}
        </button>
    </>
  )
}

export { PrimaryButton };
export default PrimaryButton;