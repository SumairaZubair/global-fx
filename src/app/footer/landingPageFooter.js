import "../styles/landingPageFooter.css";
import logo from "../../../public/assets/images/Group2.png";
import Image from "next/image";
import MobileViewFooter from "./mobileviewFooter";
import { useRouter } from 'next/navigation';
export default function LandingPageFooter() {
  const router = useRouter();
  const StepRoutes = [
    '/trading',
    '/news',
    '/next',
  ];

  return (
    <div>
      <div className="footer-div">
        <div className="footer-main">
          {/* <ul className="footer-pst">
            <p>
              <Image src={logo} alt="logo" />
            </p>
            <p>TRADING</p>
            <p>RESEARCH & EDUCATION</p>
            <p>COMPANY</p>
            <p>TRADING INSTRUMENTS</p>
          </ul> */}
          <div className="footer-list-text">
            <div>
              <Image src={logo} alt="logo" />
              <p className="text-1">© 2023. All Rights Reserved.</p>
            </div>
            <div>
              <p className="list" onClick={()=>router.push('/trading')}>TRADING</p>
              <p className="text-1">Account Types</p>
              <p className="text-1">Deposits & Withdrawals</p>
            </div>
            <div>
              <p className="list">RESEARCH & EDUCATION</p>
              <p className="text-1">Calculators</p>
              <p className="text-1">E-books</p>
              <p className="text-1">Videos</p>
            </div>
            <div>
              <p className="list">COMPANY</p>
              <p className="text-1">Why Investro</p>
              <p className="text-1">Contact Us</p>
              <p className="text-1">FAQs</p>
            </div>
            <div>
              <p className="list">TRADING INSTRUMENTS</p>
            </div>
          </div>
            <div className="para">
              <p>
                Gain direct access to our vast menu of learning resources which
                are designed to increase your knowledge about trading, trading
                strategies, trading tools, economic indicators, market catalysts
                and more.
              </p>
            </div>
            
        </div>
      </div>
      <div className="mobile-view">
        <MobileViewFooter/>
      </div>
       
    </div>
  );
}
