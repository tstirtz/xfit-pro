import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './user-page/header/header';
import SideBar from './user-page/sidebar/sidebar';
import StatusFeed from './user-page/status-feed/status-feed';
import About from './about-page/about';

// TODO
// Set up pictures route and gym route
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          <Route exact path="/about" component={About}/>
          <Route exact path="/pictures"/>
          <Route exact path="/gym"/>
          {/* <Route exact path="/" component={}/> */}
        </main>
        <div className = "sidebar">
          <SideBar />
        </div>

        <StatusFeed />

      </div>
    </Router>
  );
}

export default App;
