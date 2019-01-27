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

    //create built-in property to instantly update whether the video is paused or not
    this.paused = true;

    //create a reference for the <video> element for easier access to browser video API
    this.videoElement = React.createRef();

    //create an IDs for the video title and video using imported utility
    this.titleId = generateId('video-title');
    this.videoId = generateId('video');

    //create states to determine if default browser controls should display on the video, whether the custom controls are visible, if the video has been buffered, if the video is paused, the current progress of the video (from 0 - 100), whether the video has been reset, and whether the video has been interacted with
    this.state = {
      defaultControls:true,
      controls:true,
      buffered:false,
      paused:true,
      progress:0,
      reset:false,
      interaction:false
    };

    //bind the this object to methods
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

  /**
   * Method that makes the video ready to be reset, which sets the video as paused and changes the play/pause button icon to the reset icon. Called when the video ends.
   */
  resetVideo(){
    this.paused = true;
    this.setState({
      paused:this.paused,
      reset:true,
    });
    this.showControls();
  }

  /**
   * Method that either plays or pauses the video based on whether the video is currently paused.
   */
  toggleVideo(){
    this.paused ? this.playVideo() : this.pauseVideo();
    this.paused = !this.paused;
    this.setState({
      paused:this.paused,
      reset:false,
      interaction:true
    });
  }

  /**
   * Method that sets that the video has buffered enough to start playing.
   */
  bufferedVideo(){
    this.setState({
      buffered:true
    });
  }

  /**
   * Method that plays the video element and schedules the video controls to become hidden.
   */
  playVideo(){
    this.scheduleHideControls();
    this.videoElement.current.play();
  }

  /**
   * Method that pauses the video element and makes the video controls visible.
   */
  pauseVideo(){
    this.videoElement.current.pause();
    this.showControls();
  }

  /**
   * Method that makes the video controls visible and reschedules them to be hidden if the video is not currently paused.
   * @param {boolean} rescheduleHideControls - (optional) boolean identifying if the controls should be scheduled to be hidden.
   */
  showControls(rescheduleHideControls = !this.paused){
    if(!this.state.controls){
      if(rescheduleHideControls) this.scheduleHideControls();
      this.setState({
        controls:true
      });
    }
  }

  /**
   * Method that schedules the video controls to be hidden via timemout. If the controls have already been scheduled to be hidden, it clears that timeout and creates a new one.
   */
  scheduleHideControls(){
    if(typeof this.timeoutHideControls !== 'undefined') clearTimeout(this.timeoutHideControls);
    this.timeoutHideControls = setTimeout(() => this.hideControls(),2000);
  }

  /**
   * Method that hides the video's controls and clears the potential timeout that will also hide the controls.
   */
  hideControls(){
    if(this.state.controls && !this.paused){
      this.setState({
        controls:false
      });
      clearTimeout(this.timeoutHideControls);
    }
  }

  /**
   * Method containing the JSX for the play/pause/reset button.
   * @return {object} the JSX for the play/pause/reset button.
   */
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

  /**
   * Method used to update the progress bar associated with the video.
   * @param {object} e - event object that initiated the method.
   */
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

  /**
   * Method used to calculate the current time of the video and set the 'reset' state as fall if not at the end of the video.
   * @param {number} percent - the percentage of the video that has already been played.
   */
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

  /**
   * Method containing the JSX for the progress bar.
   * @return {object} the JSX for the progress bar.
   */
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

  /**
   * React component method called when the component successfully mounts. This is used to hide the browser-built-in controls when JS is enabled.
   */
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