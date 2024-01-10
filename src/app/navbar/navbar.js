import style from "../styles/landingPage.module.css";
import logo from "../../../public/assets/images/Group2.png";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
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
  export default function Navbar(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <div>
            <div className="sticky-navbar">
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
              <button className={style.signupBtn}>Sign Up</button>
              <button className={style.login}>Login</button>
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
                  <button className={style.signupBtn}>Sign Up</button>
                  <button className={style.login}>Login</button>
                </div>
              </DrawerContent>
            </Drawer>
          </>
        </div>
        </div>

    )
}