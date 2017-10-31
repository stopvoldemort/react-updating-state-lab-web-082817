// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClickHandler() {
    this.setState({
      settings: {...this.state.settings, bitrate: 12}

    })
  }

  resolutionClickHandler() {
    this.setState({
      settings: {...this.state.settings, video: {resolution: '720p'}}
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.bitrateClickHandler.bind(this)} >
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.resolutionClickHandler.bind(this)} >
          {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}

export default YouTubeDebugger
