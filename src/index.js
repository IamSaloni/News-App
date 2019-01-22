import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom"

import StoryDetail from "./components/StoryDetail"

ReactDOM.render(<Router>
    <div>
      <Route path="/" exact component={App}></Route>
      <Route path="/story/:id" component={StoryDetail}></Route>
    </div>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
