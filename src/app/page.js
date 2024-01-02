import { ChakraProvider } from '@chakra-ui/react';
import Image from 'next/image'
import LandingPage from './home'
export default function Home() {
  return (
    <main >
    <LandingPage/>
       {/* <ChakraProvider>
    </ChakraProvider> */}
    </main>
  )
}
