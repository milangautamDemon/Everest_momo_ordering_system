/* eslint-disable react/prop-types */

const AdvicePara = ({ adviceParas }) => {
  return (
    <>
      <ul className="flex flex-col items-start gap-8">
        {adviceParas.map((list, index) => {
          return (
            <li className="text-sm font-light text-black" key={index}>
              {list}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AdvicePara;
