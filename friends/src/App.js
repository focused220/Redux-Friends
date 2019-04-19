import React, { Component } from 'react';
import LoginPage from './components/LoginPage';
import FriendsPage from './components/FriendsPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends Page</Link>
          </li>
        </ul>
        <Route path="/login" component={LoginPage} />
        <Route exact path="/friends" component={FriendsPage} friends={this.props.friends} />
      </div>
    </Router>
    )
  }
}

export default App;
