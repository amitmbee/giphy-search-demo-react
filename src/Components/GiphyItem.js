import React from 'react'


class GiphyItem extends React.Component {
  constructor() {
    super()
    this.state = { imageStatus: 'Loading' }
  }

  handleImageLoaded() {
    this.setState({ imageStatus: 'Loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'Failed to Load' });
  }

  render() {
    let itemsObj = this.props.listItems;
    let items = itemsObj.map((item, index) => {
      return (
        <div className="card w-75">
          <div class="card-body">
          <p><strong>Image Status</strong> - {this.state.imageStatus}</p>
          <h1 className="card-title" >{item.title}</h1>
          <img key={item.id} height="480" width="480" className="card-img-top" alt={item.embed_url} src={item.images.preview_gif.url} onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)} />
          <p className="card-text"><strong>Image Source</strong> - <a href={item.source} target="_blank" className="btn btn-primary">{item.source}</a> from {item.source_tld} </p>
          <p className="card-text"><strong>mp4 Link</strong> - <a href={item.images.original_mp4.mp4} target="_blank" className="btn btn-primary">{item.images.original_mp4.mp4}</a></p>
          <p className="card-text"><strong>Image Rating</strong> - {item.rating}</p>
          <p className="card-text"><strong>Short URL</strong> - <a href={item.bitly_url}  target="_blank" className="btn btn-primary">{item.bitly_url} </a></p>
          <p className="card-text"><strong>When was it trending</strong> - {item.trending_datetime}</p>          
          </div>
        </div>
      );
    });
    if (itemsObj.length) {
       return <div class="row">{items}</div>;
    } else {
      return <div>Enter Search Text</div>;
    }
  }
}

export default GiphyItem