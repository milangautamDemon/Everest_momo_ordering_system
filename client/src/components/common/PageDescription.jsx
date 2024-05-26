/* eslint-disable react/prop-types */


const PageDescription = ({pagePrimaryImg, pageSecondaryImg, pageTitle, pageQuote, pageParaPrimary, pageParaSecondary, classFeature, flexFeature }) => {
  return (
    <>
        <div className="px-8 md:px-16 xl:px-32">
            <div className={`my-6 md:py-8 flex ${flexFeature} items-center`}>                
                <div className={`flex flex-col gap-4 ${pagePrimaryImg && pageSecondaryImg? "md:w-1/2" : "w-full"} `}>
                    <div className={`font-allura text-4xl ${classFeature} font-medium text-secondary-light capitalize italic`}>
                        {pageTitle}
                    </div>
                    <div className="text-black-light font-nova lg:font-oswald uppercase">
                        {pageQuote}
                    </div>
                    <div className={`text:lg lg:text-2xl font-nova lg:font-oswald font-bold lg:font-semibold ${classFeature} flex flex-col`}>
                        <span className=" text-primary">{pageParaPrimary}</span>  
                        <span className="text-black-dark">{pageParaSecondary}</span>
                    </div>
                </div>

                {pagePrimaryImg && 
                    <div className={` md:hidden flex justify-end`}>
                        <img src={pagePrimaryImg} alt="Chief" className='w-20 h-32 sm:w-32 sm:h-40' />
                    </div>
                }
                {pageSecondaryImg && 
                    <div className="hidden md:flex w-1/2 md:justify-end ">
                        <img src={pageSecondaryImg} alt="women-Chief" className='h-64 w-64 xl:h-80 xl:w-80' />
                    </div>
                }
            </div>
        </div>
    </>
  )
}

export default PageDescription