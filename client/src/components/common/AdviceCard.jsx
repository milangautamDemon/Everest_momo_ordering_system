/* eslint-disable react/prop-types */

const AdviceCard = ({adviceTitle, adviceLists}) => {
  return (
    <div className="advice-card bg-white-default border-4 flex flex-col gap-4 border-secondary rounded-lg w-5/6 h-auto px-6 py-8 lg:px-10 lg:py-12">
        <div className="text-black-dark text-lg lg:text-2xl font-bold">{adviceTitle}</div>
        <ul className="flex flex-col gap-3 justify-center marker:text-primary list-circle list-inside">
        {
            adviceLists.map((list, index) =>{
            return <li className="text-sm  lg:text-lg font-semibold text-black-dark" key={index}>{list}</li>
            })
        }
        </ul>
    </div>
  )
}

export default AdviceCard