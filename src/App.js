import './App.css';
import List from './List';
import AnotherDummy from './AnotherDummy';
import './nav.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="nav">
          <h1><Link to='/'> List Component </Link></h1>
          <h1><Link to='/another'> Another Dummy Component </Link></h1>
        </div>
        <Switch>
          <Route path="/" exact component={List} />
          <Route path='/another' component={AnotherDummy} />
        </Switch>
      </div>
    </Router>

  );
}
export default App;
