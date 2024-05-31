import qrScanner from "../../assets/images/scan-me.png";
import { FaMobileScreenButton } from "react-icons/fa6";

const QrScanner = () => {
  return (
    <>
      <div className="flex flex-col gap-10 rounded-lg bg-white-light px-4 py-6 shadow-sm">
        <div className="flex flex-col items-center gap-1">
          <div className="text-center text-lg font-bold text-secondary">
            Scan the QR code
          </div>
          <div className="text-center font-medium text-black">
            You can also check about the allergy advices using your as well
          </div>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img src={qrScanner} alt="QR Scanner" className="h-28 w-28" />
          <div className="flex items-center justify-center gap-1 text-lg font-bold uppercase text-black-dark">
            <div>
              <span className="text-primary">scan</span> me!
            </div>
            <div>
              <FaMobileScreenButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QrScanner;
