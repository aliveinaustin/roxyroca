import React, { Component } from 'react';
import ArtLogo from '../assets/art-booking.png';
import '../css/Contact.css';

class Contact extends Component {
    render() {
        return (
          <div>
          <div className="wrapper Contact text-center">
            <div className="card contact-card">

              <div className="card-body">
                <h3 className="card-title">NORTH AMERICAN BOOKING</h3>
                <hr />
                <p className="card-text">ALLEN ROPER</p>
                <p className="card-text"><a href="mailto:allenroper12@gmail.com?subject=Roxy Roca Booking Inquiry">ALLENROPER12@GMAIL.COM</a></p>
                <p className="card-text"><a href="tel:1-706-347-0448">1-706-347-0448</a></p>
              </div>
              {/*<a href="https://www.the-artagency.com/" className="btn btn-primary" target="_blank" rel="noopener noreferrer"><img className="card-img-bottom" src={ArtLogo} alt="The ART Agency - Artists of the Round Table" /></a>*/}
            </div>

            <div className="card contact-card">

              <div className="card-body">
                <h3 className="card-title">PRIVATE EVENT BOOKING</h3>
                <hr />
                <p className="card-text">BLAKE WAXLER</p>
                <p className="card-text"><a href="mailto:blake.waxler@gmail.com?subject=Roxy Roca Private Event Booking Inquiry">BLAKE.WAXLER@GMAIL.COM</a></p>
                <p className="card-text"><a href="tel:1-512-659-8377">1-512-659-8377</a></p>
              </div>
              {/*<a href="https://www.the-artagency.com/" className="btn btn-primary" target="_blank" rel="noopener noreferrer"><img className="card-img-bottom" src={ArtLogo} alt="The ART Agency - Artists of the Round Table" /></a>*/}
            </div>
            </div>
            <div className="vimeo-embed">
              <div className="col-xs-12 col-md-8 padding-zero embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://player.vimeo.com/video/263697836" title="Roxy Roca Sizzle Reel" width="640" height="360" frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
              </div>
            </div>
          </div>

        );
    }
}


export default Contact;