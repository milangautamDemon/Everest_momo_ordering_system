/* eslint-disable react/prop-types */

const ContactCard = ({
  cardIcon,
  cardHeading,
  cardTopTitle,
  cardBottomTitle,
  cardTopRightText,
  cardTopSecondText,
  cardBottomText,
}) => {
  const Icon = cardIcon;
  return (
    <div className="h-60 w-72 rounded-lg px-3 py-10 font-varel shadow-xl md:h-40 md:w-52 lg:h-60 lg:w-72">
      <div className="mb-10 flex items-center gap-2 md:mb-3 lg:mb-10">
        <span className="text-sm text-danger md:text-xs lg:text-sm">
          <Icon />
        </span>
        <span className="text-sm font-bold uppercase text-black-dark md:text-xs lg:text-sm">
          {cardHeading}
        </span>
      </div>
      <div className="flex flex-col gap-6 font-semibold text-black-dark md:gap-3 lg:gap-6">
        <div
          className={`flex ${cardTopTitle ? "justify-between" : "justify-start"} capitalize`}
        >
          <div className="text-sm font-semibold capitalize text-secondary-dark md:text-xs lg:text-sm">
            {cardTopTitle}
          </div>
          <div className="flex flex-col gap-2 md:gap-1 lg:gap-2">
            <div className="text-sm md:text-xs lg:text-sm">
              {cardTopRightText}
            </div>
            <div className="text-sm md:text-xs lg:text-sm">
              {cardTopSecondText}
            </div>
          </div>
        </div>
        <div
          className={`flex ${cardBottomTitle ? "justify-between" : "justify-start"} capitalize`}
        >
          <div className="text-sm font-semibold capitalize text-secondary-dark md:text-xs lg:text-sm">
            {cardBottomTitle}
          </div>
          <div className="text-sm md:text-xs lg:text-sm">{cardBottomText}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
