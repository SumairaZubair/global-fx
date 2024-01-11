 import webTrader from '../tradingSitePages/thirdpageData';
 import '../styles/advancedPlateform.css';
 export default function AdvancedPlateform(){
    return(
        <div className='m'>
            <div className='AdvancedPlateform-main'>
            {webTrader.map((web)=>(
                <div key={web.id} className='AdvancedPlateform-data-div'>
                  
                    <h2 className='AdvancedPlateform-title' >  {web.title}</h2>
                    <p className='AdvancedPlateform-desp'>{web.desp}</p>
                </div>
            ))}
            </div>
            <div>
            <button className='start-trade'>Start trading now</button>
            </div>
        </div>
    )
}