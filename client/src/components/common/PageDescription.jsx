/* eslint-disable react/prop-types */

const PageDescription = ({
  pagePrimaryImg,
  pageSecondaryImg,
  pageTitle,
  pageQuote,
  pageParaPrimary,
  pageParaSecondary,
  classFeature,
  flexFeature,
}) => {
  return (
    <>
      <div className="px-8 md:px-16 xl:px-32">
        <div className={`my-6 flex md:py-8 ${flexFeature} items-center`}>
          <div
            className={`flex flex-col gap-4 ${pagePrimaryImg && pageSecondaryImg ? "md:w-1/2" : "w-full"} `}
          >
            <div
              className={`font-allura text-4xl ${classFeature} font-medium capitalize italic text-secondary-light`}
            >
              {pageTitle}
            </div>
            <div className="font-nova uppercase text-black-light lg:font-oswald">
              {pageQuote}
            </div>
            <div
              className={`text:lg font-nova font-bold lg:font-oswald lg:text-2xl lg:font-semibold ${classFeature} flex flex-col`}
            >
              <span className="text-primary">{pageParaPrimary}</span>
              <span className="text-black-dark">{pageParaSecondary}</span>
            </div>
          </div>

          {pagePrimaryImg && (
            <div className={`flex justify-end md:hidden`}>
              <img
                src={pagePrimaryImg}
                alt="Chief"
                className="h-32 w-20 sm:h-40 sm:w-32"
              />
            </div>
          )}
          {pageSecondaryImg && (
            <div className="hidden w-1/2 md:flex md:justify-end">
              <img
                src={pageSecondaryImg}
                alt="women-Chief"
                className="h-64 w-64 xl:h-80 xl:w-80"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageDescription;
