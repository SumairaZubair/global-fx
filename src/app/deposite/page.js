"use client"
import React from "react";
import "../styles/depositeWithdraw.css";
import Image from "next/image";
import pattern from "../../../public/assets/images/4.png";
import wave from "../../../public/assets/images/wave.png";
import HeadAndTImeline from "../HeadAndTImeline/HeadAndTImeline";
import CraditDebit from "../craditDebit/craditDebit";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import WithDrawel from "../withDrawel/withDrawel";
import AccountVerification from "../accountVerification/accountVerification";
// import { Parallax } from 'react-parallax';
const depositeWithDraw = () => {
  return (

    <div>
      {/* <Parallax pages={4}>
        <ParallaxLayer speed={1}> */}
      <div className="main-deposite">
        {/* <Navbar/> */}
        <div className="wave-div">
          <Image className="wave-div" src={wave} alt="wave" />
        </div>
        <div className="deposite-withdraw">
          <Image src={pattern} alt="Background" className="bg-img" />
          <div className="overlay-text">
            <h2 className="deposite-head">Deposits &</h2>
            <h2 className="deposite-head withdraw"> Withdrawals</h2>
            <p className="deposite-p">
              Select the Right Trading Account to Meet Your Trading
            </p>
            <p className="deposite-p">Needs</p>
          </div>
        </div>
      </div>
        {/* </ParallaxLayer> */}

        {/* <ParallaxLayer offset={1}> */}
      <HeadAndTImeline/>
        {/* </ParallaxLayer> */}

        {/* <ParallaxLayer> */}
        <CraditDebit/>
        {/* </ParallaxLayer> */}

{/* <ParallaxLayer> */}
      <WithDrawel/>
      <AccountVerification/>
{/* </ParallaxLayer>
      </Parallax> */}
    </div>

  );
};

export default depositeWithDraw;
