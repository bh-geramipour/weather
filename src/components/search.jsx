import React,{useState} from 'react'
import axios from 'axios';
import Predict from './predict';
import appConfig from './../config';




export default function Search({update}){


    const [city,setCity]=useState("");
    const [errmsg,setErrmsg]=useState("");
   
    function findCity(){ 
          
        if (city!=="")
        {  
        let findcityaddress="http://dataservice.accuweather.com/locations/v1/cities/search" + appConfig.apikey +"&q=" + city;  
        axios.get(findcityaddress)
         .then(response=>{
                    update(response.data) ;
                    setErrmsg("");
         }
         )
         .catch(error=> {
            setErrmsg("an error occured")
        })
       }
    }
    
    
        return (
         
             <div className="card">
                  <img src="./img/card5.png" className="card-img-top" alt="..." />
                  <div className="card-body">
                       <h5 className="card-title">weather forcast</h5>
                      <p className="text-left">Here you can see the weather forcast .for using this option write your city name in below and click the button</p>
                       <input type="text"id="txtcityName" className="form-control" onChange={(e)=>{setCity(e.target.value)}}  placeholder="Enter your city name" required="required" />
                      
                       <button className="btn btn-success   mt-3" onClick={()=>{findCity()}}>click me</button>
                       <span>{errmsg}</span>
                   </div>
             </div>
          
        );
  }