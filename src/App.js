import React, { Component } from 'react';
import Header from './user-page/header/header';
import SideBar from './user-page/sidebar/sidebar';

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
      </div>
    );
  }
}

export default App;
