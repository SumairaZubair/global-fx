import Image from "next/image";
import "../styles/webTrader.css";
import trading2 from "../../../public/assets/images/trading-2.png";
export default function DynamicWebTrader() {
  return (
    <div>
      <div className="DynamicWebTrader-main">
        <div className="DynamicWebTrader-text">
          <h2 className="DynamicWebTrader-head">
            Access the Powerful and Dynamic WebTrader with Advanced Features
            {/* Access the Powerful<br></br> and Dynamic<br></br> WebTrader with
            <br></br> Advanced Features */}
          </h2>
          <p className="DynamicWebTrader-para">
            Connect with the Global Financial Markets Today
          </p>
          <p className="DynamicWebTrader-para2">
            The proprietary cloud-based Globalfx500 WebTrader provides instant
            access to the global financial markets. The platform is quickly
            accessible via any web browser and requires no download or
            installation. The platform is 100% compatible with popular desktop
            operating systems such as Windows, Linux, and macOS. You are only
            required to complete a single login to your trading account and you
            can start viewing live price feeds of your favorite financial assets
            and open your preferred trades anywhere or anytime you desire.
          </p>
        </div>
        <div className="DynamicWebTrader-image">
          <Image
            src={trading2}
            alt="trading-2"
            className="DynamicWebTrader-image"
          />
        </div>
      </div>
    </div>
  );
}
