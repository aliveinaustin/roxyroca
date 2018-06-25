import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
              <section id="outro">
                <div className="footerCopyright">
                  &copy; 2018 ROXY ROCA. All rights reserved.
                </div>
              </section>
            </div>
        );
  }
}

export default Footer;