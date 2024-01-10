import Image from "next/image";
import laptopTimeline from "../../../public/assets/images/laptopTimeline.png";
import "../styles/HeadAndTImeline.css";
import { PiHandPointing } from "react-icons/pi";
import { FaFileAlt } from "react-icons/fa";
import { GiCard5Diamonds } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";



import { PiBookOpenTextBold } from "react-icons/pi";
import CraditDebit from "../craditDebit/craditDebit";

export default function HeadAndTImeline() {
  return (
    <> 
    <div>
      <div className="position-div">
      <div className="main-timeline-deposite">
        <div className="text-head-timeline">
          <div className="deposites-para">
            <h2 className="deposites-head">Deposits</h2>
            <p className="deposit-para-div">
              Globalfx500 has made it easy for you to fund your trading account
              with a method that is safe and convenient for you. The process is
              simple and straightforward, making it easy for you to quickly get
              started with your trading activities. Globalfx500 utilizes top
              security protocols to ensure that you never have to worry about
              the safety and security of any funds held in your account. In
              addition to holding all client funds in tier-1 segregated bank
              accounts, Globalfx500 also applies industry-best encryption
              technologies to ensure that your personal and financial
              information is not put at any risk whatsoever.
            </p>
          </div>
        </div>
        <div className="bg-img-timeline">
          <Image className="laptop-img" src={laptopTimeline} alt="laptop" />
        </div>
      </div>
      <div className="overlay-timeline-div-text-div-mobile-view">
            <h2 className="deposit-heads">What is the Deposit</h2> 
            <h2 className="deposit-heads">Processat</h2>
            <h2 className="deposit-heads">Globalfx500</h2>
            <p className="deposit-para">Here are the steps to follow to fund your Globalfx500 trading account:</p>
          </div>
      <div className="overlay-timeline-div">
          <div className="overlay-timeline-div-text-div">
            <h2 className="deposit-heads">What is the Deposit</h2> 
            <h2 className="deposit-heads">Processat</h2>
            <h2 className="deposit-heads">Globalfx500</h2>
            <p className="deposit-para">Here are the steps to follow to fund your Globalfx500 trading account:</p>
          </div>
          <div className="timeline-row">
              <p className="timelinerow"></p>
              <span className="timelineborder"><PiBookOpenTextBold/></span><span className="text-timeline">Login into your Globalfx500 trading account</span>
              <p className="timelinerow"></p>
              <span className="timelineborder1"><PiHandPointing /></span><span className="text-timeline1">Click on "Deposit"</span>
              <p className="timelinerow"></p>
              <span className="timelineborder2"><FaFileAlt/></span><span className="text-timeline2">Select a payment method that you prefer</span>
              <p className="timelinerow">

              <span className="timelineborder3"><GiCard5Diamonds/></span><span className="text-timeline3">Follow the prompts to complete the deposit process using your preferred payment method</span>
              </p>
              <span className="timelineborder4"><FaCheck/></span><span className="text-timeline4">Your deposit will reflect as soon as the process is successfully completed</span>

          </div>
        </div>
        </div>
    </div>
    </>
  );
}
