import React from 'react';
import Img from 'gatsby-image';
import generateId from './../../utils/generateId';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/fontawesome-pro-solid';
import { faPause } from '@fortawesome/fontawesome-pro-solid';

class Video extends React.Component {

	constructor(props) {
    super(props);
    this.videoMask = React.createRef();
    this.videoElement = React.createRef();
    this.videoPlayPauseButton = React.createRef();
    this.title = props.title || null;
    this.id = props.id || null;
    this.poster = props.poster || null;
    this.mp4 = props.mp4 || null;
    this.state = {
      paused:true,
      controls:true,
      progress:0
    };
    this.resetVideo = this.resetVideo.bind(this);
    this.toggleVideo = this.toggleVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
  }

  componentDidMount(){
    this.videoElement.current.addEventListener('ended',this.resetVideo);
    this.videoMask.current.addEventListener('click',this.toggleVideo);
    this.videoElement.current.addEventListener('timeupdate',this.updateProgress);
    this.videoMask.current.addEventListener('mousemove',() => this.showControls(!this.state.paused));
    this.videoPlayPauseButton.current.addEventListener('mousemove',() => this.showControls(!this.state.paused));
  }

  resetVideo(){
    this.setState({
      paused:true
    });
    this.showControls();
  }

  toggleVideo(){
    console.log('toggle');
    this.state.paused ? this.playVideo() : this.pauseVideo();
    this.setState({
      paused:!this.state.paused
    });
  }

  playVideo(){
    this.scheduleHideControls();
    this.videoElement.current.play();
  }

  pauseVideo(){
    this.videoElement.current.pause();
    this.showControls();
  }

  showControls(rescheduleHideControls = false){
    if(!this.state.controls){
      rescheduleHideControls ? this.scheduleHideControls() : null;
      this.setState({
        controls:true
      });
    }
  }

  scheduleHideControls(){
    typeof this.timeoutHideControls !== 'undefined' ? clearTimeout(this.timeoutHideControls) : null;
    this.timeoutHideControls = setTimeout(() => this.hideControls(),2000);
  }

  hideControls(){
    if(this.state.controls && !this.state.paused){
      this.setState({
        controls:false
      });
      clearTimeout(this.timeoutHideControls);
    }
  }

  playPauseButton(){
    return(
      <button ref={this.videoPlayPauseButton} className={`video__button video__button--play${!this.state.controls?' video__button--hidden':''}`} onClick={this.toggleVideo}>
        <span className="sr-only">{this.state.paused?'play':'pause'}</span>
        <FontAwesomeIcon icon={this.state.paused?faPlay:faPause} className="video__icon"/>
      </button>
    );
  }

  updateProgress(){
    this.setState({
      progress:this.videoElement.current.currentTime/this.videoElement.current.duration*100
    });
  }

  progressBar(){
    return(
      <progress className="video__progress" value={this.state.progress} max="100"></progress>
    );
  }

  render(){
    return (
      <div className={`video${!this.state.controls?' video--controls-hidden':''}`}>
        <div ref={this.videoMask} className="video__mask"></div>
        <p id={this.id} className={`video__title${!this.state.controls?' video__title--hidden':''}`}>{this.title}</p>
        {this.playPauseButton()}
        {this.progressBar()}
        <video ref={this.videoElement} aria-labelledby={this.id} className="video__element" preload="none" poster={this.poster}>
          <source src={this.mp4} type="video/mp4"/>
        </video>
      </div>
    );
  }

}

export default Video;