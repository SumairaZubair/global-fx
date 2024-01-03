import resources from "./resData";
import  '../styles/resources.css'
export default function RenderResources() {
    return(
        <div className="resMain">
            {resources.map((res)=>(
                <div className='resourcesDiv' key={res.id}> 
                <div className="supportBorder">
                    <h4 className="res-title">{res.title}</h4>
                       <div className="res-text">
                       {res.text}
                        </div>
                    </div>
                    </div>
            ))}
        </div>
    )
}
