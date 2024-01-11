import "../styles/bankTransfer.css";
import transfer from "../../../public/assets/images/bankTransfer.png";
import Image from "next/image";
export default function BankTransfer() {
  return (
    <div>
      <div className="BankTransfer-main-div">
        <div className="BankTransfer-image-div">
          <Image src={transfer} alt="transfer" className="tranfer-img" />
        </div>
        <div className="BankTransfer-text-div">
          <h2 className="BankTransfer-text-div-head">Bank Transfer</h2>
          <p className="BankTransfer-text-div-para">
            If your deposit into your Globalfx500 trading account was done via
            bank transfer, the next withdrawal will also be processed via the
            same method. To verify your bank account, please send a clear and
            legible image that captures your original deposit transaction.
          </p>
        </div>
      </div>
    </div>
  );
}
