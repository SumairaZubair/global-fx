// import { Grid, GridItem } from '@chakra-ui/react';
// import {
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,
//   } from '@chakra-ui/react'
import '../styles/currency.css'
// export default function LiveCurrency(){
//     return(
//     <div className='currency-main'>
//          <h1>Live Currency & Commodities Quotes</h1>
//          <p>Trade a Choice of Global Forex Pairs and Commodities Online</p>
//          <div className='table'>
//             {/* <h3>ticker
//                 <p>1810 matches</p>
//             </h3>
//             <h3>last</h3>
//             <h3>chg</h3>
//             <h3>chg%</h3>
//             <h3>bid</h3>
//             <h3>ask</h3>
//             <h3>high</h3>
//             <h3>low</h3>
//             <h3>rating</h3> */}
//             <TableContainer>
//   <Table variant='simple' colorScheme='teal' size={'md'}>
//     <TableCaption>Imperial to metric conversion factors</TableCaption>
//     <Thead>
//       <Tr>
//         <Th>ticker
//         1810 matches</Th>
//         <Th>last</Th>
//         <Th>chg</Th>
//         <Th>chg%</Th>
//         <Th>bid</Th>
//         <Th>ask</Th>
//         <Th>high</Th>
//         <Th>low</Th>
//         <Th>rating</Th>
//       </Tr>
//     </Thead>
//     <Tbody>
//       <Tr>
//         <Td>inches</Td>
//         <Td>millimetres (mm)</Td>
//         <Td isNumeric>25.4</Td>
//       </Tr>
//       <Tr>
//         <Td>feet</Td>
//         <Td>centimetres (cm)</Td>
//         <Td isNumeric>30.48</Td>
//       </Tr>
//       <Tr>
//         <Td>yards</Td>
//         <Td>metres (m)</Td>
//         <Td isNumeric>0.91444</Td>
//       </Tr>
//     </Tbody>
//     <Tfoot>
//       <Tr>
//         <Th>To convert</Th>
//         <Th>into</Th>
//         <Th isNumeric>multiply by</Th>
//       </Tr>
//     </Tfoot>
//   </Table>
// </TableContainer>
//          </div>


//    </div>
//     )
// }


import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import '../styles/currency.css';
import currencyData from './currencyData'
export default function LiveCurrency() {
  return (
    <div className='currency-main'>
      <h1>Live Currency & Commodities Quotes</h1>
      <p>Trade a Choice of Global Forex Pairs and Commodities Online</p>
      <div className='table'>
        <TableContainer>
          <Table variant='simple' colorScheme=        'teal' size={'md'}>
            <TableCaption>Currency Quotes</TableCaption>
            <Thead>
              <Tr className="table-list">
                <Th>ticker</Th>
                <Th>last</Th>
                <Th>chg</Th>
                <Th>chg%</Th>
                <Th>bid</Th>
                <Th>ask</Th>
                <Th>high</Th>
                <Th>low</Th>
                <Th>rating</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currencyData.map((currency) => (
                <Tr key={currency.id}>
                  <Td style={{paddingRight:'4px' , width:'100px'  }}>{currency.ticker}</Td>
                  <Td style={{paddingRight:'4px' , width:'100px'  }}>{currency.last}</Td>
                  <Td style={{paddingRight:'4px' , width:'100px'  }}>{currency.chg}</Td>
                  <Td style={{paddingRight:'4px' , width:'100px'  }}>{currency.chg1}</Td>
                  <Td style={{paddingRight:'4px' , width:'100px'  , display:'block'}}>{currency.bid}</Td>
                  <Td style={{paddingRight:'4px' , width:'100px'  }}>{currency.ask}</Td>
                  <Td style={{paddingRight:'4px' , width:'100px'  }}>{currency.high}</Td>
                  <Td style={{paddingRight:'4px' , width:'100px'  }}>{currency.low}</Td>
                  <Td style={{paddingRight:'4px' , width:'100px'  , display:'block'}}>{currency.rating}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
