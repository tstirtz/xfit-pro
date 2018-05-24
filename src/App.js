import React, { Component } from 'react';
import Header from './user-page/header/header';
<<<<<<< HEAD
import SideBar from './user-page/sidebar/sidebar';
=======
import StatusFeed from './user-page/status-feed/status-feed';
>>>>>>> 4dbc0398f322172da7affbb544978f420484d8a6

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
<<<<<<< HEAD
      	<div className = "sidebar">
      		<SideBar />
      	</div>
=======
        <StatusFeed />
>>>>>>> 4dbc0398f322172da7affbb544978f420484d8a6
      </div>
    );
  }
}

export default App;
