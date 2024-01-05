import { Box, Text } from '@chakra-ui/react';
import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepSeparator,
  Stepper,
  useSteps,
  StepStatus
} from '@chakra-ui/react';
import '../styles/stepper.css'
import { useRouter } from 'next/navigation';
import { MdArrowDropDownCircle } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import map from '../../../public/assets/images/map.png'
import Image from 'next/image';
const StepRoutes = [
  '/news',
  '/deposite',
  '/next',
];

export default function CustomStepper() {
  const router = useRouter();
  const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: StepRoutes.length,
  });

  return (
    <div className='stepper-main'>
        <div className='stepper-image-container'>
        <Image src={map} alt={'map'} className='map-image'/>
        <div className='overlay-text-stepper'> 
        <h1 className='stepper-head'>Simple Account Registration</h1>
      <div className='steps' >
        <Stepper size={'lg'} index={activeStep}>
          {steps.map((step, index) => (
            <Step key={index} onClick={() => router.push(StepRoutes[index])}>
              <StepIndicator>
                <StepStatus
                  complete={<BsPersonPlus />}
                  incomplete={<FaRegFileAlt />}
                  active={<AiOutlineStock />}
                />
              </StepIndicator>
              
              {/* <Box style={{ display: 'flex', flexDirection: 'column', paddingTop: '20px', margin: 0 }}>
                <StepDescription style={{ fontSize: '18px', color: 'white', marginTop: '60px' }}>
                  {step.description}
                </StepDescription>
              </Box> */}
              <StepSeparator />
            </Step>
           
          ))}
        </Stepper>
      </div>
         <div className='steps-text' >
         <span style={{width:'170px',textAlign:'start',color:'white'}}>Register</span>
          <span style={{width:'280px' ,textAlign:'center',color:'white'}}>Deposit & Verification</span>
          <span style={{width:'190px', textAlign:'end',color:'white'}}>Start Trading</span>
         </div>
        </div>
            </div>
    </div>
  );
}
