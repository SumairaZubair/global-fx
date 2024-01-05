import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  import '../styles/mobileViewFooter.css'
import { Box } from "@chakra-ui/react";
import image from "../../../public/assets/images/Group2.png";
import Image from 'next/image';
import { IoHome } from "react-icons/io5";

export default function MobileViewFooter(){
    return(
        <div>
        <div className="m">
        <div className='logo-img'>
              <Image src={image} alt="logo" />
             < IoHome className='home'/>
            </div>
            <div className='accordian'>

        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        TRADING
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <p className="text-1">Account Types</p>
              <p className="text-1">Deposits & Withdrawals</p>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        RESEARCH & EDUCATION
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <p className="text-1">Calculators</p>
              <p className="text-1">E-books</p>
              <p className="text-1">Videos</p>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2 className='h2'>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <p className="list">COMPANY</p>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <p className="text-1">Why Investro</p>
              <p className="text-1">Contact Us</p>
              <p className="text-1">FAQs</p>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            </div>
            <div>
                <p className='rights'>© 2023. All Rights Reserved.</p>
            </div>
        </div>
        </div>
    )
}