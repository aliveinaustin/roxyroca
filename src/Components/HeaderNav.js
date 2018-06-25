import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../assets/header-img-sm.png';
import '../css/HeaderNav.css';

class HeaderNav extends Component {

    render() {
        return (

            <div className="HeaderNav fixed-top clearfix">
                <nav className="navbar navbar-expand-md navbar-inverse bg-inverse clearfix">
                  <img src={logo} id="logoNav" alt="Roxy Roca Music" />
                  <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#collapse_target">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapse_target">

                  <ul className="navbar-nav main-nav">
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink exact activeClassName="activeNav" to="/" target="_self" className="nav-link">Home</NavLink></li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink activeClassName="activeNav" to="/contact" className="nav-link">Contact</NavLink></li>
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><HashLink to="/#tourdates" target="_self" className="nav-link">Tour</HashLink></li>

                    {/* <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><a href="http://www.rrstaging.thomasbrandonhays.com/store/index.php" className="nav-link" target="_blank" rel="noopener noreferrer">Store</a></li>*/}
                    <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show"><a href="https://sites.google.com/view/roxyrocaepk/home" className="nav-link" target="_blank" rel="noopener noreferrer">EPK</a></li>
                  </ul>

                  <ul className="navbar-nav social-nav list-inline ml-auto">
                    <li className="list-inline-item">
                      <a href="https://twitter.com/roxyroca" className="nav-link" target="_blank"  rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fa fa-twitter" aria-hidden="true" ></i>
                          <span className="sr-only">Twitter</span>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/roxyrocamusic/" className="nav-link" target="_blank"  rel="noopener noreferrer" aria-label="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i>
                        <span className="sr-only">Instagram</span>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="https://www.youtube.com/user/roxyrocamusic" className="nav-link" target="_blank"  rel="noopener noreferrer" aria-label="YouTube"><i className="fa fa-youtube-play" aria-hidden="true"></i>
                        <span className="sr-only">YouTube</span>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/roxyroca/" className="nav-link" target="_blank"  rel="noopener noreferrer" aria-label="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i>
                        <span className="sr-only">Facebook</span>
                      </a>
                    </li>

                    <li className="list-inline-item">
                      <a href="https://www.snapchat.com/add/roxy.roca" className="nav-link" target="_blank"  rel="noopener noreferrer" aria-label="Snapchat"><i className="fa fa-snapchat-ghost" aria-hidden="true"></i>
                        <span className="sr-only">Snapchat</span>
                      </a>
                    </li>
                  </ul>
                </div>
                </nav>
            </div>

        );
    }
}

export default HeaderNav;