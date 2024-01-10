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
          <p  className="account-verification-main-para">
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
            The documents required for the verification process are:
            </p>
            <div className="account-verification-main-inputWithText-inputs">
                <span><FcDocument/></span> 
                <p></p>
            </div>
        </div>
      </div>
    </div>
  );
}
