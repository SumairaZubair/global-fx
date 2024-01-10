import "../styles/withDrawel.css";
import haveli from "../../../public/assets/images/haveli.png";
import Image from "next/image";
import { BsInfoCircleFill } from "react-icons/bs";
import stepData from "./withDrawelStepData";
export default function WithDrawel() {
  return (
    <div className="withDrawel-content">
      <div className="withDrawel-conten-img-text">
        <div className="withdrawel-text">
          <h2 className="withdrawel-h2">Withdrawals</h2>
          <p className="withdrawel-p">
            We have deliberately streamlined the withdrawal process at
            Globalfx500 to make it quick and easy for our clients to enjoy their
            profits. You can withdraw your funds using all the available deposit
            payment methods. Globalfx500 will facilitate safe withdrawals to
            your preferred payment methods. We do not charge any withdrawal
            fees, so you will receive 100% of the funds that you request to be
            withdrawn from your trading account. However, please note that
            depending on your preferred method, there may be applicable fees
            levied by your payment processor. Please make sure to check this
            information directly with your financial institution.
          </p>
          <p className="withdrawel-p">
            We have deliberately streamlined the withdrawal process at
            Globalfx500 to make it quick and easy for our clients to enjoy their
            profits. You can withdraw your funds using all the available deposit
            payment methods. Globalfx500 will facilitate safe withdrawals to
            your preferred payment methods. We do not charge any withdrawal
            fees, so you will receive 100% of the funds that you request to be
            withdrawn from your trading account. However, please note that
            depending on your preferred method, there may be applicable fees
            levied by your payment processor. Please make sure to check this
            information directly with your financial institution.
          </p>
        </div>
        <div className="withdrawel-img">
          <Image className="withdrawel-img" src={haveli} alt="haveli" />
        </div>
      </div>
      <div className="head-margin">
        <h2 className="withdrawel-next-head">
          What is the Withdrawal <br></br> Process at Globalfx500
        </h2>
        <p className="withdrawel-next-p">
          At Globalfx500, the withdrawal process is smooth and hassle-free. Once
          you have completed all the relevant verification
          <p>
            requirements, simply follow the below steps and wait to receive your
            money
          </p>
        </p>
      </div>
      <div className="data-steps">
        <div className="steps-flexx">
          {stepData.map((steps) => (
            <>
              <div className="steps-content">
                <p className="step-data-icons">{steps.icon}</p>
                <p className="step-data-title">{steps.title}</p>
              </div>
            </>
          ))}
        </div>
        <div className="data-steps-info">
          <p className="data-steps-info-icon" >
          <BsInfoCircleFill />
          </p>
          <p className="data-steps-info-para">
            Please note that we strive to process all withdrawal requests within
            a reasonable time. Depending on your preferred payment method, your
            request may take as short as 24 hours to as long as 7 days to be
            processed. Globalfx500 does not charge any fees for deposits or
            withdrawals. You may, however, incur fees, such as forex or other
            related charges levied by your payment processor. Most of these fees
            are generally negligible, but it is important to confirm with your
            payment processor what their charges
          </p>
        </div>
      </div>
    </div>
  );
}
