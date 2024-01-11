import Navbar from "../navbar/navbar";
import SuperiorTrading from "../tradingSitePages/firstPage";
import DynamicWebTrader from "../tradingSitePages/secondPage";
import AdvancedPlateform from "../tradingSitePages/thirdPage";

export default function Trading(){
    return(
        <div>
            <SuperiorTrading/>
            <DynamicWebTrader/>
            <AdvancedPlateform/>
        </div>
    )
}