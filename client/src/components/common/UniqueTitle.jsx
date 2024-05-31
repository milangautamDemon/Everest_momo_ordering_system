/* eslint-disable react/prop-types */

import leftLine from "../../assets/images/left-line.png";
import rightLine from "../../assets/images/right-line.png";

const UniqueTitle = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className="my-4 flex items-center justify-center gap-4 xl:gap-10">
      <img src={leftLine} />
      <div className="text-center font-chela text-2xl font-normal uppercase text-primary">
        {primaryTitle} <span className="text-black-dark">{secondaryTitle}</span>{" "}
      </div>
      <img src={rightLine} />
    </div>
  );
};

export default UniqueTitle;
