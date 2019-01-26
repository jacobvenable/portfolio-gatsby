import React from 'react';
import generateId from './../utils/generateId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/fontawesome-pro-light';
import { faSpinnerThird } from '@fortawesome/fontawesome-pro-regular';
import { faPlay } from '@fortawesome/fontawesome-pro-solid';
import { faPause } from '@fortawesome/fontawesome-pro-solid';
import { faRedoAlt } from '@fortawesome/fontawesome-pro-regular';

class Video extends React.Component {

	constructor(props) {
    super(props);
    this.videoMask = React.createRef();
    this.videoElement = React.createRef();
    this.videoPlayPauseButton = React.createRef();
    this.videoProgress = React.createRef();
    this.title = props.title || null;
    this.titleId = generateId('video-title');
    this.videoId = generateId('video');
    this.poster = props.poster || null;
    this.mp4 = props.mp4 || null;
    this.state = {
      controls:true,
      buffered:false,
      paused:true,
      progress:0,
      reset:false,
      interaction:false
    };
    this.resetVideo = this.resetVideo.bind(this);
    this.toggleVideo = this.toggleVideo.bind(this);
    this.bufferedVideo = this.bufferedVideo.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.pauseVideo = this.pauseVideo.bind(this);
    this.showControls = this.showControls.bind(this);
    this.hideControls = this.hideControls.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.updateVideoTime = this.updateVideoTime.bind(this);
  }

  componentDidMount(){
    //remove browser-default video controls
    this.videoElement.current.removeAttribute('controls');

    //attach event listeners to elements
    this.videoMask.current.addEventListener('click',this.toggleVideo);
    this.videoElement.current.addEventListener('ended',this.resetVideo);
    this.videoElement.current.addEventListener('timeupdate',this.updateProgress);
    this.videoElement.current.addEventListener('canplaythrough',this.bufferedVideo);
    this.videoMask.current.addEventListener('mousemove',() => this.showControls(!this.state.paused));
    this.videoPlayPauseButton.current.addEventListener('mousemove',() => this.showControls(!this.state.paused));
    this.videoPlayPauseButton.current.addEventListener('focus',() => this.showControls(!this.state.paused));
    this.videoProgress.current.addEventListener('mousemove',() => this.showControls(!this.state.paused));
    this.videoProgress.current.addEventListener('focus',() => this.showControls(!this.state.paused));
  }

  resetVideo(){
    this.setState({
      paused:true,
      reset:true,
    });
    this.showControls();
  }

  toggleVideo(){
    this.state.paused ? this.playVideo() : this.pauseVideo();
    this.setState({
      paused:!this.state.paused,
      reset:false,
      interaction:true
    });
  }

  bufferedVideo(){
    this.setState({
      buffered:true
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
      if(rescheduleHideControls) this.scheduleHideControls();
      this.setState({
        controls:true
      });
    }
  }

  scheduleHideControls(){
    if(typeof this.timeoutHideControls !== 'undefined') clearTimeout(this.timeoutHideControls);
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
      <button ref={this.videoPlayPauseButton} aria-controls={this.videoId} className={`video__button video__button--play${!this.state.controls?' video__button--hidden':''}`} onClick={this.toggleVideo}>
        <span className="sr-only">{this.state.reset?'replay':(this.state.paused?'play':'pause')}</span>
        <FontAwesomeIcon
          icon={this.state.reset?faRedoAlt:(this.state.paused?faPlay:(this.state.buffered?faPause:faSpinnerThird))}
          flip={this.state.reset?'horizontal':null}
          rotate={!this.state.paused && !this.state.buffered ? faSpinnerThird : null}
          className="video__icon"
        />
      </button>
    );
  }

  updateProgress(e){
    if(typeof e !== 'undefined' && typeof e.target.value !== 'undefined')
    {
      e.preventDefault();
      this.updateVideoTime(parseFloat(e.target.value));
    }
    else{
      this.setState({
        progress:this.videoElement.current.currentTime/this.videoElement.current.duration*100
      });
    }
  }

  updateVideoTime(percent = -1){
    if(this.videoElement.current.readyState > 0 && typeof percent === 'number' && percent > 0)
    {
      let currentTime = parseFloat(this.videoElement.current.duration) * (percent/100);
      this.videoElement.current.currentTime = currentTime;
      if(currentTime < this.videoElement.current.duration)
      {
        this.setState({
          reset:false
        });
      }
    }
  }

  progressBar(){
    return(
      <div>
        <label htmlFor={`${this.title}-progress`} aria-hidden="true" className="sr-only">{this.title} Video Progress</label>
        <input ref={this.videoProgress} type="range" id={`${this.title}-progress`} name={`${this.title}-progress`} aria-controls={this.videoId} className="video__progress video__progress--hidden" value={`${this.state.progress}`} onChange={this.updateProgress} min="0" max="100" step="0.01"/>
        <div className={`video__progress video__progress--visible${!this.state.controls || !this.state.interaction?' video__progress--hidden':''}`} style={{ width:`${this.state.progress}%` }}>
          <div className="video__control video__control--progress"></div>
        </div>
      </div>
    );
  }

  render(){
    return (
      <div className={`video${!this.state.controls?' video--controls-hidden':''}`}>
        <div ref={this.videoMask} className="video__mask"></div>
        <p id={this.titleId} className={`video__title${!this.state.controls?' video__title--hidden':''}`}><FontAwesomeIcon icon={faVideo}/> {this.title}</p>
        {this.playPauseButton()}
        {this.progressBar()}
        <video controls ref={this.videoElement} id={this.videoId} aria-labelledby={this.titleId} className={`video__element${!this.state.interaction?' video__element--initial':''}`} preload="none" poster={this.poster.src}>
          <source src={this.mp4} type="video/mp4"/>
        </video>
      </div>
    );
  }

}

export default Video;