import React, { Component } from 'react';
import Header from './Header';
import TourDates from './TourDates';
import Newsletter from './Newsletter';
import AlbumPromo from './AlbumPromo';
import VidSection1 from './VidSection1';

class Home extends Component {
    render() {
        return (
            <div className="Home">
              <Header />
              <TourDates />
              <Newsletter />
              <AlbumPromo />
              <VidSection1 />
            </div>
        );
    }
}


export default Home;