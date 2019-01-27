import React from 'react';
import generateId from './../utils/generateId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/fontawesome-pro-light';
import { faSpinnerThird } from '@fortawesome/fontawesome-pro-regular';
import { faPlay } from '@fortawesome/fontawesome-pro-solid';
import { faPause } from '@fortawesome/fontawesome-pro-solid';
import { faRedoAlt } from '@fortawesome/fontawesome-pro-regular';

/**
 * A class React component used for placing a custom video player.
 * @param {string} props.title - the title of the video
 * @param {object} props.poster - the imported poster displayed before the video plays
 * @param {object} props.mp4 - the imported mp4 src of the video
 */
class Video extends React.Component {

	constructor(props) {
    super(props);
    this.paused = true;
    this.videoElement = React.createRef();
    this.titleId = generateId('video-title');
    this.videoId = generateId('video');
    this.state = {
      defaultControls:true,
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

  resetVideo(){
    this.paused = true;
    this.setState({
      paused:this.paused,
      reset:true,
    });
    this.showControls();
  }

  toggleVideo(){
    this.paused ? this.playVideo() : this.pauseVideo();
    this.paused = !this.paused;
    this.setState({
      paused:this.paused,
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

  showControls(rescheduleHideControls = !this.paused){
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
    if(this.state.controls && !this.paused){
      this.setState({
        controls:false
      });
      clearTimeout(this.timeoutHideControls);
    }
  }

  playPauseButton(){
    return(
      <button
        aria-controls={this.videoId}
        className={`video__button video__button--play${!this.state.controls?' video__button--hidden':''}`}
        onClick={this.toggleVideo}
        onMouseMove={this.showControls}
        onFocus={this.showControls}
      >
        <span className="sr-only">{this.state.reset?'replay':(this.paused?'play':'pause')}</span>
        <FontAwesomeIcon
          icon={this.state.reset?faRedoAlt:(this.paused?faPlay:(this.state.buffered?faPause:faSpinnerThird))}
          flip={this.state.reset?'horizontal':null}
          rotate={!this.paused && !this.state.buffered ? faSpinnerThird : null}
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
        <label htmlFor={`${this.props.title}-progress`} aria-hidden="true" className="sr-only">{this.props.title} Video Progress</label>
        <input
          type="range"
          id={`${this.props.title}-progress`}
          name={`${this.props.title}-progress`}
          aria-controls={this.videoId}
          className="video__progress video__progress--hidden"
          value={`${this.state.progress}`}
          onChange={this.updateProgress}
          min="0"
          max="100"
          step="0.01"
          onMouseMove={this.showControls}
          onFocus={this.showControls}
        />
        <div className={`video__progress video__progress--visible${!this.state.controls || !this.state.interaction?' video__progress--hidden':''}`} style={{ width:`${this.state.progress}%` }}>
          <div className="video__control video__control--progress"></div>
        </div>
      </div>
    );
  }

  componentDidMount(){
    //remove browser-default video controls because JS is enabled
    this.setState({defaultControls:false});
  }

  render(){
    return (
      <div className={`video${!this.state.controls?' video--controls-hidden':''}`}>
        <div className="video__mask" onClick={this.toggleVideo} onMouseMove={this.showControls}></div>
        <p onLoad={this.test} id={this.titleId} className={`video__title${!this.state.controls?' video__title--hidden':''}`}><FontAwesomeIcon icon={faVideo}/> {this.props.title}</p>
        {this.playPauseButton()}
        {this.progressBar()}
        <video
          controls={this.state.defaultControls}
          ref={this.videoElement}
          id={this.videoId}
          aria-labelledby={this.titleId}
          className={`video__element${!this.state.interaction?' video__element--initial':''}`}
          preload="none"
          poster={this.props.poster.src}
          onEnded={this.resetVideo}
          onTimeUpdate={this.updateProgress}
          onCanPlayThrough={this.bufferedVideo}
        >
          <source src={this.props.mp4} type="video/mp4"/>
        </video>
      </div>
    );
  }

}

export default Video;