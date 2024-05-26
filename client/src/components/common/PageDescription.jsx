/* eslint-disable react/prop-types */


const PageDescription = ({pagePrimaryImg, pageSecondaryImg, pageTitle, pageQuote, pageParaPrimary, pageParaSecondary }) => {
  return (
    <>
        <div className=" px-8 md:px-16 xl:px-32">
            <div className='my-6 md:py-8 flex justify-between items-center'>                
                <div className="flex flex-col gap-4 md:w-1/2">
                <div className="font-allura text-4xl font-medium text-secondary-light capitalize italic">
                    {pageTitle}
                </div>
                <div className="text-black-light font-nova lg:font-oswald uppercase">
                    {pageQuote}
                </div>
                <div className="text:lg lg:text-2xl font-nova lg:font-oswald font-bold lg:font-semibold text-start flex flex-col">
                    <span className=" text-primary">{pageParaPrimary}</span>  
                    <span className="text-black-dark">{pageParaSecondary}</span>
                </div>
                </div>

                <div className="md:w-1/2 md:flex md:justify-end">
                    <img src={pagePrimaryImg} alt="women-Chief" className='w-20 h-32 sm:w-32 sm:h-40 md:hidden' />
                    <img src={pageSecondaryImg} alt="women-Chief" className='hidden md:block h-64 w-64 xl:h-80 xl:w-80' />
                </div>
            </div>
        </div>
    </>
  )
}

export default PageDescription