import { useState } from "react";
import customerImg from "../../assets/images/customerImg.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const userData = [
    {
        customerPara: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis",
        customerName: "livie dias"
    },
    {
        customerPara: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis",
        customerName: "ram yadav"
    },
    {
        customerPara: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis",
        customerName: "david gm"
    },
    {
        customerPara: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis",
        customerName: "sandeep pokhrel"
    }

]

const CustomerTalk = () => {
    const [userTalk, setUserTalk] = useState(0);

    const handlePrevious = () => {
        setUserTalk((userTalk + userData.length - 1) % userData.length);
    }
    
    const handleNext = () => {
        setUserTalk((userTalk + 1) % userData.length);
    }

  return (
    <div className="mx-8 md:mx-16 xl:mx-32">
        {
            userData.map((data, index) => {
                return (
                    <div key={index} className={`${userTalk === index ? "flex" : "hidden"} flex-col-reverse items-center gap-4  md:flex-row md:justify-between`}>
                        <div className="flex flex-col gap-2 items-center md:w-3/5 md:items-start">
                            <div className="flex flex-col gap-4">
                                <div className="text-xl md:text-2xl font-bold capitalize text-center md:text-start">
                                    200+ <span className='text-primary'>happy customer</span>
                                </div>
                                <div className="text-sm font-bold text-secondary text-center md:text-start">
                                    What our customers say about us
                                </div>
                                <div className="italic text-center md:text-start">
                                    {data.customerPara}
                                </div>
                                <div className="font-bold text-sm md:text-lg text-black-dark capitalize">{data.customerName}</div>
                            </div>
                            <div className="flex gap-2">
                                <span onClick={handlePrevious} className="left-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black"><FaArrowLeft size={8} /></span>
                                <span onClick={handleNext} className="right-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black"><FaArrowRight size={8} /></span>
                            </div>
                        </div>

                        <div className="md:w-2/5 md:flex md:justify-end">
                            <div className="w-40 md:w-56">
                                <img src={customerImg} alt="customer" className='w-full rounded-lg' />
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default CustomerTalk