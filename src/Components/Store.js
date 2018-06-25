import React, { Component } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/font-awesome/fonts/fontawesome-webfont.woff2';
import Iframe from 'react-iframe';
import '../css/Store.css';

class Store extends Component {

  componentDidMount() {
      document.body.style.overflow  = "hidden";
  }

  componentWillUnmount() {
      document.getElementsByTagName('body')[0].style.overflow = "visible";
  }

    render() {
        return (
            <div className="Store">
              <Iframe url="https://rrstaging.thomasbrandonhays.com/store/index.php" />
            </div>

        );
    }
}


export default Store;