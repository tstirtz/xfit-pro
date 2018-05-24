import React, { Component } from 'react';
import Header from './user-page/header/header';
import StatusFeed from './user-page/status-feed/status-feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <StatusFeed />
      </div>
    );
  }
}

export default App;
