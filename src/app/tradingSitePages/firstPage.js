// import Navbar from "../navbar/navbar";
import "../styles/trading.css";
import trading1 from "../../../public/assets/images/trading-1.png";
import bgPattern from "../../../public/assets/images/4.png";
import Image from "next/image";
export default function SuperiorTrading() {
  return (
    <div>
      <div className="sup-trading-main">
        <div className="sup-trading-image-div">
          <Image
            src={trading1}
            alt="trading-1"
            className="sup-trading-image-div"
          />
        </div>
        <div className="sup-trading-overlytext-div">
          <Image src={bgPattern} alt="pattern" className="bgp-img" />
          <div className="overlay-text-div">
            <h2 className="overlay-text-div-head">
              Superior Trading<br></br> Platform
            </h2>
            <p className="overlay-text-div-para">
              Open, Manage & Close Trades Of Your Favorite Global Financial
              Assets On Our Powerful Trading Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
