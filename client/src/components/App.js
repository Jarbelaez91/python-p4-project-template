import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import HomePage from './HomePage';
import About from './About';
import Services from './Services';
import BookOnline from './BookOnline';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch> 
          <Route exact path="/" component={HomePage} /> 
          <Route path="/about" component={About}/>
          <Route path="/services" component={Services} />
          <Route path="/bookonline" component={BookOnline} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
