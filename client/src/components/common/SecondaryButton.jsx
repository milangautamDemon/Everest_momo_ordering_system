/* eslint-disable react/prop-types */
  const SecondaryButton = ({ buttonName, classFeature, buttonIcon, handleButton }) => {
    const Icon = buttonIcon;
    return (
      <>
          <button onClick={handleButton} type="button" className={`flex px-8 py-3 rounded-full gap-2 items-center capitalize text-lg font-light text-white-default ${classFeature}`} data-bs-toggle="button">
              <div className="icon">
                <Icon size={25} />
              </div>
              <div className="">{buttonName}</div>
          </button>
      </>
    )
  }
  
  export { SecondaryButton };
  export default SecondaryButton;