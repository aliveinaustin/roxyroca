import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import Spotify from './Spotify';
import ANFAlbumCover from '../assets/anf-cover.jpg';
import '../css/AlbumPromo.css';

class AlbumPromo extends Component {
    render() {
        return (
          <section className="AlbumPromo">
            <div className="row">
              <div className="col-lg-10 col-md-12 col-sm-12 mx-auto">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 text-center">
                    <img src={ANFAlbumCover} className="img-fluid album-img" alt="Roxy Roca - Ain't Nothin Fancy - Album cover art"/>
                </div>

                <div className="col-lg-6 col-md-12 col-sm-12 streamVendor">
                 <div className="container">

                  <div className="row">
                   <div className="col-sm-12">

                    <div className="card">
                      <div className="card-body ">
                        <h1 className="card-title">Roxy Roca</h1>
                        <h2 className="card-text album-title">Ain&#8217;t Nothin Fancy</h2>
                        <h2 className="card-text">Out Now!</h2>
                      </div>
                      <div className="card-body store-btn">
                        <div className="col-sm-12">
                          <ul className="list-inline">
                            <li className="list-inline-item"><a href="https://itunes.apple.com/us/artist/roxy-roca/940172820" className="btn-sm" target="_blank" rel="noopener noreferrer"><i className="fa fa-apple" aria-hidden="true"></i> Apple Music</a></li>
                            <li className="list-inline-item" ><a href="https://www.amazon.com/Aint-Nothin-Fancy-ROXY-ROCA/dp/B00SSOLG30" className="btn-sm" target="_blank" rel="noopener noreferrer"><i className="fa fa-amazon" aria-hidden="true"></i> Amazon</a></li>
                            <li className="list-inline-item"><a href="https://open.spotify.com/artist/3m28dyU7wbL3ne8WeZqEeF" className="btn-sm" target="_blank" rel="noopener noreferrer"><i className="fa fa-spotify" aria-hidden="true"></i> Spotify</a></li>
                            <li className="list-inline-item"><a href="https://play.google.com/store/music/artist/Roxy_Roca?id=A2cnth4jbleeywej4bwuvvvu3em" className="btn-sm" target="_blank" rel="noopener noreferrer"><i className="fa fa-play" aria-hidden="true"></i> Google Play</a></li>
                          </ul>
                          <hr />
                          {/*
          				        VINYL LP + MORE at the<br />
                          <NavLink exact to="/store" className="btn-sm"><i className="fa fa-shopping-bag" aria-hidden="true"></i> ROXY ROCA Store</NavLink>*/}
                        </div>
                      </div>
                    </div>

                    <div className="card">
                    <div className="card-body">
                      <Spotify />
                    </div>
                    </div>

                   </div>
                  </div>

                 </div>
                </div>
              </div>
              </div>
            </div>
          </section>
        );
    }
}

export default AlbumPromo;