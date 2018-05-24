import React, { Component } from 'react';
import Header from './user-page/header/header';
<<<<<<< HEAD
import SideBar from './user-page/sidebar/sidebar';
=======
import StatusFeed from './user-page/status-feed/status-feed';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

      	<div className = "sidebar">
      		<SideBar />
      	</div>

        <StatusFeed />

      </div>
    );
  }
}

export default App;
