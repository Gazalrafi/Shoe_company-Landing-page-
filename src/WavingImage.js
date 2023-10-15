import React from 'react';
import "./App.css";

const WavingImage = () => {
  return (
    <>
    <div className='wsection'>
       <div className='wave'>
         <img src="https://hips.hearstapps.com/hmg-prod/images/hoka-zinal-13085-1643565794.jpg?crop=1.00xw:0.849xh;0,0.151xh&resize=2048:*" alt="shoe"/>
       </div>

       <div className='wave'>
         <img src="https://media.wired.co.uk/photos/606d9f466a2b7484dab92d87/master/w_1600,c_limit/nike_air_zoom_alphafly_next_percent_original.jpg" alt="shoe"/>
       </div>

       <div className='wave'>
         <img src="https://img.etimg.com/thumb/msid-95893756,width-300,height-225,imgsize-77978,,resizemode-75/skx52942_shopbystylegridupdate_men_750x664_casual_sneakers.jpg" alt="shoe"/>
       </div>
    </div>
    </>
  )
}

export default WavingImage