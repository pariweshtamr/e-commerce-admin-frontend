import './App.css';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login'
import PageNotFound from './components/PageNotFound/PageNotFound';
import EmailVerification from './pages/Email-verification/EmailVerification';


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
      <Route path="/email-verification" children={<EmailVerification />} />
      <Route exact path="/" children={<Login />} />
      <Route path="*" children={<PageNotFound />} />

    </Switch>
  </Router>
  );
}
export default App;
