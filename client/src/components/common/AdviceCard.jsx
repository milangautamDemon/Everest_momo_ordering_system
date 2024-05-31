/* eslint-disable react/prop-types */

const AdviceCard = ({ adviceTitle, adviceLists }) => {
  return (
    <div className="advice-card flex h-auto w-5/6 flex-col gap-4 rounded-lg border-4 border-secondary bg-white-default px-6 py-8 lg:px-10 lg:py-12">
      <div className="text-lg font-bold text-black-dark lg:text-2xl">
        {adviceTitle}
      </div>
      <ul className="flex list-inside list-circle flex-col justify-center gap-3 marker:text-primary">
        {adviceLists.map((list, index) => {
          return (
            <li
              className="text-sm font-semibold text-black-dark lg:text-lg"
              key={index}
            >
              {list}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdviceCard;
