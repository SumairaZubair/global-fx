import creditDebitData from "./creditDebitData";
import "../styles/creditDebit.css";
import Image from "next/image";
import { FaInfoCircle } from "react-icons/fa";

console.log(creditDebitData);
export default function CraditDebit() {
  return (
    <div>
      <div className="credit-content">
        {creditDebitData.map((cradit) => (
          <div className="data-content" key={cradit.id}>
            <div className="data-img">
              <Image className="data-img" src={cradit.img} />
            </div>
            <div className="data-title-desp">
              <p className="cradit-title">{cradit.title}</p>
              <p className="cradit-desp">{cradit.desp}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="precautions">
        <span>
          {" "}
          <FaInfoCircle className="infoicone" />
        </span>
        <p className="precautions-p">
          We understand that our clients have different preferred payment
          methods. Browse through our various supported methods by clicking on
          the ‘Deposit’ button when you log into your Globalfx500 trading
          account.
        </p>
      </div>
    </div>
  );
}
