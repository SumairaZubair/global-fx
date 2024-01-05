import Image from "next/image";
import trading from "../../../public/assets/images/trding.png";
import "../styles/trader.css";
export default function WebTraderPlatform() {
  return (
    <div className="tradermain">
      <div className="traderflex">
        <div className="trader-text">
          <h2 className="trader-head">WebTrader Platform</h2>
          <p className="bold-trading-p">
            Access the WebTrader platform which is well-equipped with the right
            features and tools to make trading easy. The platform is easy to use
            and navigate, making it the ideal choice for both new and top
            traders
          </p>
          <p className="trading-p">
            The WebTrader platform is well-known and used by traders worldwide
            because it offers everything a trader needs when they step into the
            trading arena. This includes a choice of technical indicators,
            charting tools, analytical tools, high-level features, and more. All
            this ensures that you can carry out your trading strategy in the
            market well-equipped to make the right trading choices.
          </p>
        </div>
        <div className="trader-img">
          <Image src={trading} alt="trading" />
        </div>
      </div>
    </div>
  );
}
