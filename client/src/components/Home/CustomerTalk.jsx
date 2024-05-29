import customerImg from "../../assets/images/customerImg.jpeg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const CustomerTalk = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-4 mx-8 md:mx-16 xl:mx-32 md:flex-row md:justify-between">
    <div className="flex flex-col gap-2 items-center md:w-3/5 md:items-start">
        <div className="flex flex-col gap-4">
            <div className="text-xl md:text-2xl font-bold capitalize text-center md:text-start">
                200+ <span className='text-primary'>happy customer</span>
            </div>
            <div className="text-sm font-bold text-secondary text-center md:text-start">
                What our customers say about us
            </div>
            <div className="italic text-center md:text-start">
                `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis.`
            </div>
            <div className="font-bold text-sm md:text-lg text-black-dark">livie dias</div>
        </div>
        <div className="flex gap-2">
            <span className="left-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black"><FaArrowLeft size={8} /></span>
            <span className="right-icons h-6 w-6 lg:w-8 lg:h-8 flex justify-center items-center rounded-full border border-solid border-black-light hover:border-black"><FaArrowRight size={8} /></span>
        </div>
    </div>

    <div className="md:w-2/5 md:flex md:justify-end">
        <div className="w-40 md:w-56">
            <img src={customerImg} alt="customer" className='w-full rounded-lg' />
        </div>
    </div>
</div>
  )
}

export default CustomerTalk