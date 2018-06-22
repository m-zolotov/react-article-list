import React, { Component } from 'react';
import ArticleList from "./components/ArticleList";

import {articles} from './fixtures/fixtures';

import './style/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
