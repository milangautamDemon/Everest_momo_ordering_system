/* eslint-disable react/prop-types */

const CommonIcon = ({ iconName, handleIcon }) => {
  const Icon = iconName;
  return (
    <>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black-light text-white-default hover:bg-black">
        <Icon size={25} onClick={handleIcon} />
      </div>
    </>
  );
};

export { CommonIcon };
export default CommonIcon;
