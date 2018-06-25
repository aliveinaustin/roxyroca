import React, { Component } from 'react';
// import YouTube from 'react-youtube';
import YouTube from '@u-wave/react-youtube'
// import YouTube from './youTubeAPI';
import '../css/VidSection.css';

const videos = [
  { id: '6yVepiiw1p0', name: 'ROXY ROCA - "Taurus" (Official Music Video)' },
  { id: null, name: '<none>' },
];

const qualities = ['auto', '240', '380', '480', '720', '1080', '1440', '2160'];

const hashVideoRx = /^#!\/video\/(\d)$/;
const hash = typeof window.location !== 'undefined' ?
  window.location.hash : ''; // eslint-disable-line no-undef
const defaultVideo = hashVideoRx.test(hash) ?
  parseInt(hash.replace(hashVideoRx, '$1'), 10) :
  0;

class VidSection1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      video: defaultVideo,
      suggestedQuality: 'auto',
      volume: 1,
      paused: false,
    };

    this.handlePause = this.handlePause.bind(this);
    this.handlePlayerPause = this.handlePlayerPause.bind(this);
    this.handlePlayerPlay = this.handlePlayerPlay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleQuality = this.handleQuality.bind(this);
  }

  selectVideo(index) {
    this.setState({ video: index });
  }

  handlePause(event) {
    this.setState({
      paused: event.target.checked,
    });
  }

  handlePlayerPause() {
    this.setState({ paused: true });
  }
  handlePlayerPlay() {
    this.setState({ paused: false });
  }

  handleVolume(event) {
    this.setState({
      volume: parseFloat(event.target.value),
    });
  }

  handleQuality(event) {
    this.setState({
      suggestedQuality: qualities[event.target.selectedIndex],
    });
  }

  render() {
    const video = videos[this.state.video];
    return (
      <div className="row max-width-1024">
        <div className="col embed-responsive embed-responsive-16by9">
          <YouTube
            video={video.id}
            width={640}
            height={480}
            autoplay={false}
            controls={true}
            modestBranding={true}
            showCaptions={false}
            showRelatedVideos={false}
            suggestedQuality={this.state.suggestedQuality}
            volume={this.state.volume}
            paused={this.state.paused}
            onPause={this.handlePlayerPause}
            onPlaying={this.handlePlayerPlay}
          />
        </div>
      </div>
    );
  }
}
export default VidSection1;
