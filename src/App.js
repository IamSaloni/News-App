import React, { Component } from 'react';
import './App.css';
import {Router, Route, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import StoriesDetails from "./components/StoriesDetails"
import Stories from "./components/Stories"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      hits : []
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
     <Router>
       <div>
         <Route path="/" component={Stories}></Route>
         <Route path="/Stories" component={StoriesDetails}></Route>
       </div>
     </Router>
    );
  }
}

export default App;
