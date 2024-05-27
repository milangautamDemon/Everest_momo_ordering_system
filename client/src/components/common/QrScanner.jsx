import qrScanner from "../../assets/images/scan-me.png"
import { FaMobileScreenButton } from "react-icons/fa6";

const QrScanner = () => {
  return (
    <>
    <div className="py-6 px-4 flex flex-col gap-10 bg-white-light rounded-lg shadow-sm">
        <div className="flex flex-col items-center gap-1">
          <div className="text-secondary text-lg text-center font-bold">
              Scan the QR code
          </div>
          <div className="text-black font-medium text-center">
              You can also check  about the allergy advices using your as well
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src={qrScanner} alt="QR Scanner" className="h-28 w-28" />
          <div className="flex items-center justify-center gap-1 text-lg text-black-dark font-bold uppercase">
            <div>
              <span className="text-primary">scan</span> me!
            </div>
            <div><FaMobileScreenButton /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QrScanner