import React,{useState} from 'react'
import axios from 'axios'
import { useEffect} from 'react';
import appConfig from '../config';

export default function Predict( {citykey,country,city}){

    const [weather,setWeather]=useState("");
    const [min,setMin]=useState("");
    const [max,setMax]=useState("");
    const [icon,setIcon]=useState("");
    const [intense,setIntense]=useState("");
    const [haspredict,setPredict]=useState("");
    const [iconphrase,setIconphrase]=useState("");
    const [weatherstatue,setWeatherstatus]=useState("");
    const [imgsrc,setImgsrc]=useState("");
    const [errmsg,setErrmsg]=useState("");

     
    useEffect(()=>{
        forcast()
    },[citykey])

    function fahrenheitToCelsius(fahrenheit) 
    {
        var fTemp = fahrenheit;
        var fToCel = (fTemp - 32) * 5 / 9;
        return fToCel.toFixed(0);
    }
     
    function forcast(){
       
        const forcastaddress="https://dataservice.accuweather.com/forecasts/v1/daily/1day/" + citykey + appConfig.apikey;
        axios.get(forcastaddress)
        .then(response=>{ 

          
            
            setMin(fahrenheitToCelsius(response.data.DailyForecasts[0].Temperature.Minimum.Value));
            setMax(fahrenheitToCelsius(response.data.DailyForecasts[0].Temperature.Maximum.Value)); 
            setIcon(response.data.DailyForecasts[0].Day.Icon);
            setPredict(response.data.DailyForecasts[0].Day.HasPrecipitation);
            setIconphrase(response.data.DailyForecasts[0].Day.IconPhrase);
            setImgsrc("https://www.accuweather.com//images/weathericons/"+response.data.DailyForecasts[0].Day.Icon+".svg")
      
            if ( response.data.DailyForecasts[0].Day.HasPrecipitation)  {
                 setWeather(response.data.DailyForecasts[0].Day.PrecipitationType);
                 setIntense( response.data.DailyForecasts[0].Day.PrecipitationIntensity);
                 setWeatherstatus(response.data.DailyForecasts[0].Day.PrecipitationIntensity+" "+response.data.DailyForecasts[0].Day.PrecipitationType);
            }
            else
            {   
                setWeatherstatus(response.data.DailyForecasts[0].Day.IconPhrase);
            }   
            setErrmsg(" ");
            

        })
        .catch(error=> {
           setErrmsg("an error  ocuured");
       })
        
     
    }


    return(
        
       <div className="card">
            <div  className="card-body" >
               
               <div className="container d-flex mb-3 justify-content-center ">
                        <div className="col-xm-auto" style={{ fontSize: '50px' }}>{city}</div>
                        <div className="col-3 "> <span className='badge-warning' style={{padding:'5px',borderRadius: '50%'}}>{country}</span></div>
                
                </div>
                 <h2>Max:{max}<img src="./img/f.jpg" alt="" /></h2>
                 <h2>Min:{min}<img src="./img/f.jpg" alt="" /></h2>
                 <img style={{height: '260px'}} src={imgsrc} alt="" />
                 <h4>{errmsg}</h4>
                 <h4> { weatherstatue} </h4>

           
           </div>
        </div>
        
    )

}