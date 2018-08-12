import React from 'react';
import Img from 'gatsby-image';
import generateId from './../../utils/generateId';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/fontawesome-pro-solid';
import { faPause } from '@fortawesome/fontawesome-pro-solid';

class Video extends React.Component {

	constructor(props) {
    super(props);
    this.videoElement = React.createRef();
    this.title = props.title || null;
    this.id = props.id || null;
    this.poster = props.poster || null;
    this.mp4 = props.mp4 || null;
    this.state = {
      paused:true,
      buttonText:'play',
      buttonIcon:faPlay
    };
    this.toggleVideo = this.toggleVideo.bind(this);
    this.resetVideo = this.resetVideo.bind(this);
  }

  componentDidMount(){
    this.videoElement.current.addEventListener('ended',this.resetVideo);
  }

  resetVideo(){
    this.setState({
      buttonText:'play',
      buttonIcon:faPlay,
      paused:true
    });
  }

  toggleVideo(){
    this.state.paused ? this.videoElement.current.play() : this.videoElement.current.pause();
    this.setState({
      buttonText:this.state.paused?'pause':'play',
      buttonIcon:this.state.paused?faPause:faPlay,
      paused:!this.state.paused
    });
  }

  playPauseButton(e){
    return(
      <button className="video__button video__button--play" onClick={this.toggleVideo}>
        <span className="sr-only">{this.state.buttonText}</span>
        <FontAwesomeIcon icon={this.state.buttonIcon} className="video__icon"/>
      </button>
    );
  }

  render(){
    return (
      <div className="video">
        <p id={this.id}>{this.title}</p>
        {this.playPauseButton()}
        <video ref={this.videoElement} aria-labelledby={this.id} className="video__element" preload="none" poster={this.poster}>
          <source src={this.mp4} type="video/mp4"/>
        </video>
      </div>
    );
  }

}

export default Video;