/* eslint-disable react/prop-types */
const PrimaryButton = ({ buttonName, classFeature, handleButton }) => {
  return (
    <>
        <button type="button" className={`bg-primary py-2 px-7 capitalize text-lg rounded-full text-white-default ${classFeature}`} onClick={handleButton} data-bs-toggle="button">
            {buttonName}
        </button>
    </>
  )
}

export { PrimaryButton };
export default PrimaryButton;