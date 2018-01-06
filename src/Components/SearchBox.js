import React from 'react'

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }
  handleTextChange() {
    this.props.onTextChange(this.refs.EnteredInputText.value);
  }

  render() {
    return (
      <div>
        <br />
        <input
        type="text"
          className="form-control mb-2 mr-sm-2" placeholder="Enter Search Term"
        onChange={this.handleTextChange.bind(this)}
        ref="EnteredInputText"
      />
      </div>
    );
  }
}

export default SearchBox
