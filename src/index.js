import React from 'react';
import { render } from 'react-dom';
import SearchBox from './Components/SearchBox';
import GiphyBox from './Components/GiphyBox'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  handleInputChange(enteredText) {
    let results = [];
    $.get(
      "https://api.giphy.com/v1/gifs/search?q=" +
      enteredText +
      "&api_key=HNd0jyByjbDaZ9OF8DIwoRaJ4Ufw0lSE&limit=5",
      res => {
        if (res.data) {
          for (let i in res.data) {
            results[i] = res.data[i];
          }
          this.setState({ results: results });
        }
      }
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <SearchBox onTextChange={this.handleInputChange.bind(this)} />
        <section id="results-container">
          <GiphyBox listItems={this.state.results} />
        </section>
      </div>
    );
  }
}


render(<App />, document.getElementById('root'));
