import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Fib from './fib';
import OtherPage from './otherpage'

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to = "/otherpage">OtherPage</Link>
       <div>
         <Route exact path="/" component={Fib}>
         </Route>
         <Route exact path="/otherpage" component={OtherPage}></Route>
       </div>
      </header>
    </div>
    </Router>
  );
}

export default App;