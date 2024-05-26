/* eslint-disable react/prop-types */


const ContactCard = ({cardIcon, cardHeading, cardTopTitle, cardBottomTitle, cardTopRightText, cardTopSecondText, cardBottomText}) => {

    const Icon = cardIcon;
  return (
    <div className='font-varel px-3 py-10 rounded-lg shadow-xl h-60 w-72 md:h-40 md:w-52 lg:h-60 lg:w-72'>
        <div className="flex gap-2 items-center mb-10 md:mb-3 lg:mb-10">
            <span className="text-danger text-sm md:text-xs lg:text-sm">
              <Icon />
            </span>
            <span className="uppercase text-black-dark  text-sm md:text-xs lg:text-sm font-bold">
               {cardHeading}
            </span>
        </div>
        <div className="font-semibold text-black-dark flex flex-col gap-6 md:gap-3 lg:gap-6">
            <div className={`flex ${cardTopTitle ? "justify-between" : "justify-start"} capitalize`}>
                <div className="text-sm md:text-xs lg:text-sm font-semibold text-secondary-dark capitalize">{cardTopTitle}</div>
                <div className="flex flex-col gap-2 md:gap-1 lg:gap-2">
                    <div className="text-sm md:text-xs lg:text-sm">
                        {cardTopRightText}
                    </div>
                    <div className="text-sm md:text-xs lg:text-sm">
                        {cardTopSecondText}
                    </div>
                </div>
            </div>
            <div className={`flex ${cardBottomTitle ? "justify-between" : "justify-start"} capitalize`}>
                <div className="text-sm md:text-xs lg:text-sm font-semibold text-secondary-dark capitalize">{cardBottomTitle}</div>
                <div className="text-sm md:text-xs lg:text-sm">{cardBottomText}</div>
            </div>
        </div>
        
    </div>
  )
}

export default ContactCard