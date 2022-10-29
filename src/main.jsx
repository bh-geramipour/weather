import React from 'react'
import './style.css'
import Header from './components/header';
import Body from './components/body'
import Footer from './components/footer';

export default function Main () {

        return (
             <div className=" container page backcolor">
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
  }
