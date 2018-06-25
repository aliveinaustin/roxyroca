import React, { Component } from 'react';
import '../css/TourDates.css';
import '../css/BandsInTown.css';

class TourDates extends Component {
    render() {
        return (
          <section id="tourdates">
            <h2>Upcoming Tour Dates</h2>
            <a role="button" tabIndex="0" className="bit-widget-initializer" data-artist-name="Roxy Roca"
            data-display-past-dates="false" data-link-color="#961A3F" data-background-color="#000" data-text-color="#fff" data-font="Trebuchet MS"
            data-widget-width="100%" data-display-limit="10" data-auto-style="true" data-popup-background-color="#000">Click for Tickets and More Info</a>
          </section>
        );
    }
}

export default TourDates;