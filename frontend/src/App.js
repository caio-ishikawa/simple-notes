import './App.css'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './templates/Main';
import Homepage from './templates/Homepage';
import Login from './templates/Login';
import Register from './templates/Register';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/notes">
            <Main/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
     
    </div>

  );
}

export default App;
