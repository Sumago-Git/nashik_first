import React from 'react';
// import '../Components/Header.css'
import MainBanner from '../../ScreenComponents/MainBanner';
import Foundation from '../../ScreenComponents/Foundation';
import Vission from '../../ScreenComponents/Vission';
import Youtube from '../../ScreenComponents/HomeComponents/Youtube';
import Photogallery from '../../ScreenComponents/HomeComponents/Photogallery';
import Homecounter from '../../ScreenComponents/HomeComponents/Homecounter';
import Supporters from '../../ScreenComponents/HomeComponents/Supporter';


const Home = () => {
    return (
        <div>
            <MainBanner />
            <Foundation/>
            <Vission/>
            <Youtube/>
            <Homecounter/>
            <Photogallery/>
            <Supporters/>
        </div>
    )
}

export default Home
