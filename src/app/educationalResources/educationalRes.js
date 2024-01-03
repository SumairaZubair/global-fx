import pattern from "../../../public/assets/images/4.png";
import Image from "next/image";
import man from '../../../public/assets/images/2man.png'
import "../styles/educatonalRes.css";
export default function EducationalResources() {
  return (
    // <div className="mainedu-div">
    //     <Image className='pat' src={pattern} alt={'pattern'}/>
    // </div>
    <div className="image-container">
      <Image src={pattern} alt="Background" className="background-image" />
      <div className="overlay-text">
        <div className="educational-text">
          <h3 className="ed-head">Educational Resources</h3>
          <p className="ed-p">
            To be a successful trader, you need to understand the markets and
            the many factors that cause asset prices to move. Globalfx500
            provides you with a wealth of trading resources so you can boost
            your understanding and knowledge of the online trading markets, as
            well as access to trading tools and indicators, strategies, market
            catalysts, risk management, and much more.
          </p>
             <p className="ed-p">
             Step into the trading
            arena with Globalfx500 and be well-equipped with all of the
            resources and tools to guide your trading journey to success.
             </p>
        </div>
        <div className="educational-img">
            <Image className="man" src={man} alt="man"/>
        </div>
      </div>
    </div>
  );
}
