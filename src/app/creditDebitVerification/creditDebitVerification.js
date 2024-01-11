import "../styles/creditDebitVerification.css";
import { FaInfoCircle } from "react-icons/fa";

export default function CraditDebitVerification() {
  return (
    <div>
      <div className="cradetDebitVerification-main-div">
        <div className="credit-verification-text-div">
          <h2 className="credit-debit-verification-head">Credit or Debit Card</h2>
          <h2 className="credit-debit-verification-head">Verification</h2>
          <p className="credit-debit-verification-para">
            If you wish to withdraw via a credit or debit card, additional
            verification may be required. To verify your card, please submit a
            clear coloured photo or scan that shows the following:
          </p>
          <ul className="credit-debit-verification-unorder-list">
            <li className="credit-debit-verification-li">Full Name</li>
            <li className="credit-debit-verification-li">Expiry Date</li>
            <li className="credit-debit-verification-li">
              First 5 digits and Last 4 digits (make sure that the middle 7
              numbers are obscured as well as the CVV number)
            </li>
            <li className="credit-debit-verification-li">
              Your Signature that is consistent with previously uploaded
              documents
            </li>
          </ul>
        </div>
        <div className="credit-verification-textWithIcon">
            <span><FaInfoCircle className="credit-verification-icon"/></span>
          <p className="credit-verification-text-para">
            Please note that we strive to process all withdrawal requests within
            a reasonable time. Depending on your preferred payment method,<br></br> your
            request may take as short as 24 hours to as long as 7 days to be
            processed. Globalfx500 does not charge any fees for deposits or
            withdrawals.<br></br> You may, however, incur fees, such as forex or other
            related charges levied by your payment processor. Most of these fees
            are generally negligible, but it is important to confirm with your
            payment processor what their charges
          </p>
        </div>
      </div>
    </div>
  );
}
