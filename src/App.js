import React, { Component } from 'react';
import Article from './Article';

import './style/style.css';

import {articles} from "./fixtures/fixtures";

const article = articles[0];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Article article={article} />
      </div>
    );
  }
}

export default App;
