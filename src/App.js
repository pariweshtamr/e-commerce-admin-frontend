import './App.css';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
  <Router>
    <Switch>
      <Route path="/registration" children={<Register />} />
      <Route path="/dashboard" children={<Dashboard />} />
      <Route path="/" children={<Login />} />

    </Switch>
  </Router>
  );
}
export default App;
