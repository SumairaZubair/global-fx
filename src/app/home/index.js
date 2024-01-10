"use client";
// import logo from "../../../public/assets/images/Group2.png";
import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import mobile from "../../../public/assets/images/mobile.png";
// import style from '../page.module.css'
import { RxCross1 } from "react-icons/rx";
import guideline from "../home/data";
import style from "../styles/landingPage.module.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import RenderResources from "../resources/resources";
import TradingNews from "../imageSlider/imageSlider";
import EducationalResources from "../educationalResources/educationalRes";
import VideoSlider from "../videoSlider/videoSlider";
import LiveCurrency from "../liveCurrency/liveCurrency";
import WebTraderPlatform from "../platform/webTraderPlatform";
import Stepper from "../stepper/stepper";
import CustomStepper from "../stepper/stepper";
import LandingPageFooter from "../footer/landingPageFooter";
import Accordion from "../footer/landingPageFooter";
import Navbar from "../navbar/navbar";
export default function LandingPage() {
  let data = guideline;
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <div className={style.main}>
        {/* <div className="sticky-navbar">
          <div className={style.navbar}>
            <Image className={style.logo} src={logo} alt="logo" />
            <div>
              <ul className={style.navbarList}>
                <li>TRADING</li>
                <li>TRADING INSTRUMENTS</li>
                <li>RESEARCH & EDUCATION</li>
                <li>COMPANY</li>
              </ul>
            </div>
            <div className={style.signupLogin}>
              <Button className={style.signupBtn}>Sign Up</Button>
              <Button className={style.login}>Login</Button>
            </div>
          </div>
        </div>
        <div className={style.mobileView}>
          <>
            <div className={style.logoMenu}>
              <Image className={style.logo} src={logo} alt="logo" />
              <IoMdMenu className={style.menuIcone} onClick={onOpen} />
            </div>
            <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent className={style.drawer}>
                <Image className={style.logo} src={logo} alt="logo" />
                <RxCross1 className={style.crossIcon} onClick={onClose} />

                <DrawerBody>
                  <div>
                    <ul className={style.navbarList}>
                      <li>TRADING</li>
                      <li>TRADING INSTRUMENTS</li>
                      <li>RESEARCH & EDUCATION</li>
                      <li>COMPANY</li>
                    </ul>
                  </div>
                </DrawerBody>
                <div className={style.signupLoginBtn}>
                  <Button className={style.signupBtn}>Sign Up</Button>
                  <Button className={style.login}>Login</Button>
                </div>
              </DrawerContent>
            </Drawer>
          </>
        </div> */}
        <Navbar/>
        <div className={style.maindiv}>
          <div className={style.text}>
            <p>
              <span className={style.boldLetters}> Unlock</span> Your{" "}
              <span className={style.boldLetters}>Financial Potential</span>{" "}
              with Our Exclusive Path of Stable, Long-term Income through
              Stocks, Indices, and Digital Assets.
            </p>
            <button className={style.regestrationBtn}>Register now</button>
          </div>
          <div className={style.mobileImag}>
            <div className={style.boxShadow}>
              <Image className={style.mobileImg} src={mobile} alt="helllo" />
            </div>
          </div>
        </div>
        <div className={style.whiteMain}>
          <p className={style.globalfxP}>
            <span className={style.globalFxBoldLetter}>Globalfx500</span> –
            Providing You With Everything You Need To Trade Right
          </p>
        </div>
        <div className={style.guidence}>
          {data.map((item) => (
            <div className={style.guidelineData} key={item.id}>
              <Image src={item.icon} alt={`Icon for guideline ${item.id}`} />
              <p className={style.dataP}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <RenderResources />
      <TradingNews />
      <EducationalResources />
      {/* <LiveCurrency/> */}
      <WebTraderPlatform />
      <CustomStepper />
      {/* <Accordion/> */}
      <LandingPageFooter />
      {/* <VideoSlider/> */}
    </>
  );
}
