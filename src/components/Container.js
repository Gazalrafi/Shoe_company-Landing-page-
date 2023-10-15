import React from 'react';
import '../App.css';
import Header from './Header';
import Section from './Section';
import WavingImage from '../WavingImage';
import Footer from '../Footer';



const Container = () => {
    return (
        <div className="container">
           <Header/> 
           <Section/>
           <WavingImage/>
           <Footer/>
        </div>
    )
}

export default Container
