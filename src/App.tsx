import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Image} from 'react-bootstrap';
import './fonts/Formula1-Bold.ttf';
import './fonts/Formula1-Regular.ttf';
import Home from './components/Home';
import TableView from './components/TableView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import logo from './assets/f1.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
        <Image src={logo} className="App-logo" />
        </div>
      
      </header>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/seasons/:seasonName/:driverCode" component={TableView} />
          </Switch>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
