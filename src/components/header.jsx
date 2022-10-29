import React from 'react';
import '../style.css'

export default function Header (){
        return (  
               
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                           
                            <img src="./img/logo.png" alt="weather" className="Logo"  />
                        
                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                           <ul className="navbar-nav">
                                <li className="nav-item active">
                                      <a className="nav-link" href="#"> Home<span className="sr-only">(current)</span></a>
                                 </li>
                                 <li className="nav-item">
                                      <a className="nav-link" href="#">about us</a>
                                </li>
                                <li className="nav-item">
                                      <a className="nav-link" href="#">register</a>
                                </li>
                                 <li className="nav-item">
                                      <a className="nav-link" href="#">Login</a>
                                </li>
                            </ul>
                           </div> 
                    </nav>
                </div>
            
        );
    }
