import React, { Component } from 'react';
import ProgressiveImage from 'react-progressive-image';
import headerBGblur from '../assets/header_vignette-small.jpg';
import headerBG from '../assets/header_vignette.jpg';
import logo from '../assets/header-img.png';
import '../css/Header.css';

const imageStyle = {
  maxWidth: 1900,
  width: '100%'
}

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="jumbotron">
                  <img src={logo} id="logo" alt="Roxy Roca Music"/>
                  <ProgressiveImage src={ headerBG } placeholder= { headerBGblur }>
                    {(image) => <img style={ imageStyle } src={ image } alt="Roxy Roca Band" />}
                  </ProgressiveImage>
                </div>                
            </div>
        );
    }
}

export default Header;