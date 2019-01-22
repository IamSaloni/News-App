import React, { Component } from 'react';
import './App.css';

// import { BrowserRouter , Route, Link } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";
import StoriesDetails from "./components/StoriesDetails"
import Stories from "./components/Stories"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
      hits : []
    }
  }

  componentDidMount() {
      fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story`)
         .then(response=>response.json())
          .then(data => {
              console.log(data.hits)
              this.setState({
                loading: false,
                hits: data.hits 
              })
          })
  }

  render() {
    return (
      (this.state.loading) ? " " : <Stories hits={this.state.hits} />
    )
  }
}

export default App;
