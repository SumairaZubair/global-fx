// import { ChakraProvider } from '@chakra-ui/react';
// import Image from 'next/image'
import LandingPage from './home'
// import { Children } from 'react';
// export default function Home() {
//   return (
//     <main >
//        <ChakraProvider>
//     <LandingPage/>
// {/* {children} */}
//     </ChakraProvider>
//     </main>
//   )
// }
import { ChakraProvider } from '@chakra-ui/react';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
       {/* <LandingPage/> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
