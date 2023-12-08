import logo from "../../../public/assets/images/Group 2.png";
import Image from "next/image";
import { Button, ButtonGroup } from "@chakra-ui/react";
// import style from '../page.module.css'
import style from "../styles/landingPage.module.css";
export default function LandingPage() {
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <Image src={logo} alt="logo" />
        <div>
          <ul className={style.navbarList}>
            <li>TRADING</li>
            <li>TRADING INSTRUMENTS</li>
            <li>RESEARCH & EDUCATION</li>
            <li>COMPANY</li>
          </ul>
        </div>
        <div className={style.signupLogin}>
          <Button colorScheme="blue" className={style.signupBtn}>
            Sign Up
          </Button>
          <Button colorScheme="blue" className={style.login}>
            Login
          </Button>
        </div>
      </div>
      <div className={style.maindiv}>
        <div className={style.text}>
         <span className={style.boldLetters}> Unlock</span> Your <span className={style.boldLetters}>Financial Potential</span>  with Our Exclusive Path of Stable,
          Long-term Income through Stocks, Indices, and Digital Assets.
        </div>
        <div>hi</div>
      </div>
    </div>
  );
}
