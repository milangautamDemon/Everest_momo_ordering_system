/* eslint-disable react/prop-types */


const CommonIcon = ({iconName, handleIcon}) => {
    const Icon = iconName;
  return (
    <>
        <div className="w-10 h-10 bg-black-light text-white-default flex justify-center items-center rounded-full">
            <Icon size={25} onClick={handleIcon} />
        </div>
    </>
  )
}

export { CommonIcon };
export default CommonIcon;