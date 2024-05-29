import SecondaryButton from '../common/SecondaryButton'
import { useNavigate } from "react-router-dom";
import men from "../../assets/images/men.png"
import { TiArrowRight } from "react-icons/ti";


const CustomerLove = () => {
    const navigate = useNavigate();
    const handleStoryButton = () => navigate("/advice");


  return (
    <div className='my-6 md:py-12'>
        <div className="flex flex-col gap-10 md:flex-row lg:gap-32">
            <div className='flex justify-center'>
                <div className="w-72 h-96 relative">
                    <div className="bg-secondary w-full h-5/6 absolute start-0 bottom-0 rounded-t-full"></div>
                    <img src={men} alt="" className='w-full h-full absolute' />
                </div>
            </div>

            <div className="flex flex-col gap-4 md:items-start md:justify-center">
                <div className="text-xl md:text-2xl text-black-dark font-bold capitalize text-center md:text-start">
                    why customers <span className='text-primary'>love us</span>
                </div>
                <div className="text-sm text-center md:text-start md:text-lg text-black">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, dicta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita cumque eum incidunt sunt quas quae. Voluptas consequatur a quia officiis.
                </div>
                <div className="flex justify-center py-6 md:justify-start">
                    <SecondaryButton onClick={handleStoryButton} buttonName="explore our story" buttonIcon={TiArrowRight} classFeature="bg-secondary flex-row-reverse hover:bg-secondary-dark" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomerLove