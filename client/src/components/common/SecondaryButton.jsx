/* eslint-disable react/prop-types */
  const SecondaryButton = ({ buttonName, classFeature, buttonIcon, ...handle }) => {
    const Icon = buttonIcon;
    return (
      <>
          <button {...handle} type="button" className={`flex px-8 py-3 rounded-full gap-1 items-center font-light text-white-default capitalize text-sm lg:gap-2 ${classFeature}`} data-bs-toggle="button">
              <div className="icon text-lg lg:text-xl">
                <Icon />
              </div>
              <div className="">{buttonName}</div>
          </button>
      </>
    )
  }
  
  export { SecondaryButton };
  export default SecondaryButton;