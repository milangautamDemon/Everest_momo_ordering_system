/* eslint-disable react/prop-types */

const AdvicePara = ({adviceParas}) => {
  return (
    <>
    <ul className="flex flex-col gap-8 items-start">
        {
            adviceParas.map((list, index) =>{
            return <li className="text-sm font-light text-black" key={index}>{list}</li>
            })
        }
        </ul>
    </>
  )
}

export default AdvicePara