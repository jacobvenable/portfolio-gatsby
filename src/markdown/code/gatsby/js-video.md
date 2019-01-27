```javascript
/**
 * Method that either plays or pauses the video based on whether the video is currently paused.
 */
toggleVideo(){
	//code to play/pause the video here
}

/**
 * If the component is added directly to a static page, componentDidMount() is called on page load.
 */
componentDidMount(){
	//remove browser-default video controls because JS is enabled
	this.setState({defaultControls:false});
}

render(){
	//simplified JSX for the sake of brevity
	return (
		<div className={`video${!this.state.controls?' video--controls-hidden':''}`}>
			//custom play/pause button for the video
			<button onClick={this.toggleVideo}>play video</button>
			//HTML5 video element
			<video
				controls={this.state.defaultControls}
				ref={this.videoElement}
				preload="none"
				poster={this.props.poster.src}
			>
				<source src={this.props.mp4} type="video/mp4"/>
			</video>
		</div>
	);
}
```