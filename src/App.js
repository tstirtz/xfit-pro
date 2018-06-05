import React, { Component } from 'react';
import Header from './user-page/header/header';

import SideBar from './user-page/sidebar/sidebar';

import StatusFeed from './user-page/status-feed/status-feed';


export default function App() {
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

