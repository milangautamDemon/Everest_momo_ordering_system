import { useEffect, useContext, useState } from "react";
import customerImg from "../../assets/images/customerImg.jpeg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import talkContext from "../../contexts/talkContext";

const CustomerTalk = () => {
  const { form, setForm } = useContext(talkContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/get-customerTalks",
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const jsonData = await response.json();
        setUserData(jsonData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePrevious = () => {
    setForm((form + userData.length - 1) % userData.length);
  };

  const handleNext = () => {
    setForm((form + 1) % userData.length);
  };

  //------------------------------------------------------------------------
  // console.log(userData);
  // const handlePrevious = () => {
  //   setForm((prevForm) => {
  //     if (prevForm === 0) {
  //       return userData.length - 1; // Go to last element on previous click
  //     } else {
  //       return prevForm - 1;
  //     }
  //   });
  // };

  // const handleNext = () => {
  //   setForm((prevForm) => {
  //     if (prevForm === userData.length - 1) {
  //       return 0; // Go to first element on next click
  //     } else {
  //       return prevForm + 1;
  //     }
  //   });
  // };
  //--------------------------------------------------------------------------

  // console.log(form);
  return (
    <div className="mx-8 md:mx-16 xl:mx-32">
      {userData?.map((data, index) => {
        return (
          <div
            key={index}
            className={`${index == form ? "flex" : "hidden"} flex-col-reverse items-center gap-4 md:flex-row md:justify-between`}
          >
            <div className="flex flex-col items-center gap-2 md:w-3/5 md:items-start">
              <div className="flex flex-col gap-4">
                <div className="text-center text-xl font-bold capitalize md:text-start md:text-2xl">
                  200+ <span className="text-primary">happy customer</span>
                </div>
                <div className="text-center text-sm font-bold text-secondary md:text-start">
                  What our customers say about us
                </div>
                <div className="text-center italic md:text-start">
                  {data.words}
                </div>
                <div className="text-sm font-bold capitalize text-black-dark md:text-lg">
                  {data.name}
                </div>
              </div>
              <div className="flex gap-2">
                <span
                  onClick={handlePrevious}
                  className="left-icons flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-solid border-black-light hover:border-black lg:h-8 lg:w-8"
                >
                  <FaArrowLeft size={8} />
                </span>
                <span
                  onClick={handleNext}
                  className="right-icons flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-solid border-black-light hover:border-black lg:h-8 lg:w-8"
                >
                  <FaArrowRight size={8} />
                </span>
              </div>
            </div>

            <div className="md:flex md:w-2/5 md:justify-end">
              <div className="w-40 md:w-56">
                <img
                  src={customerImg}
                  alt="customer"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerTalk;
