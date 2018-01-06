import React from 'react'
import GiphyItem from './GiphyItem'


class GiphyBox extends React.Component {
  constructor(){
    super()
    this.state = { imageStatus : 'Loading'}
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'Loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'Failed to Load' });
  }

  render() {
    return <GiphyItem listItems={this.props.listItems} />
  }
}

export default GiphyBox