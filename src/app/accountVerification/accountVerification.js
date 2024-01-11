import "../styles/accountVerification.css";
import { FcDocument } from "react-icons/fc";
export default function AccountVerification() {
  return (
    <div>
      <div className="account-verification-main">
        <div className="account-verification-main-text-div">
          <h2 className="account-verification-main-head">
            Account <br></br> Verification and <br></br> Security
          </h2>
          <p className="account-verification-main-para">
            Globalfx500 is a reputable international broker that is bound by
            international protocols on KYC (know-your-customer) and anti-money
            laundering guidelines. To comply, we need to perform identity
            verification on all our users. This process involves requesting our
            clients to upload certain verification documents.<br></br> We have
            implemented top security protocols to ensure that no data about our
            clients will ever be compromised in any way.
          </p>
        </div>
        <div className="account-verification-main-inputWithText">
          <p className="account-verification-main-inputWithText-text-1">
            The documents required for the verification <br></br> process are:
          </p>
          <div className="account-verification-main-inputWithText-inputs">
            <span className="inputs-file-icon">
              <FcDocument />
            </span>
            <p className="inputs-file-text">водительские права</p>
          </div>
          <div className="account-verification-main-inputWithText-inputs">
            <span className="inputs-file-icon">
              <FcDocument />
            </span>
            <p className="inputs-file-text">международное удостоверение личности (загранпаспорт);</p>
          </div>
          <div className="account-verification-main-inputWithText-inputs">
            <span className="inputs-file-icon">
              <FcDocument />
            </span>
            <p className="inputs-file-text">водительские права</p>
          </div>
          <p className="account-verification-main-inputWithText-text">
            Our website has been optimized to facilitate a quick and seamless
            verification process. Should you find any difficulties completing
            the verification requirements, simply contact our support team who
            will help you with the process as fast as possible. Our dedicated
            support team can be contacted via Live Chat, telephone, or email
            (support@orcalgroup.com).
          </p>
        </div>
      </div>
    </div>
  );
}
