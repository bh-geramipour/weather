import React,{useState} from 'react'
import Search from './search';
import Predict from './predict';

export default function Body(){

    const [result,setResult]=useState();

    const updateResult = (inputValue) => {
        setResult(inputValue);
      
    }



        const classCol="col col-md-6 col-sm-12 mb-2"
        return (
            <div className="container d-md-flex align-items-center  mt-3 pt-5" >
                <div className={classCol}>
                     <Search update={updateResult}/>
                </div> 
                <div className={classCol}>
                    { (result && result[0] && result[0].Key) ? 
                      <Predict citykey={result[0].Key}  country={result[0].Country.ID}  city={result[0].LocalizedName} />  : 
                      <Predict citykey={"133091"} country={"FI"}  city={"Espoo"} />
                       }
                </div>
           
         </div>
        );
    }
