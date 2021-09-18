import './App.css';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Category from './pages/Category/Category'
import Product from './pages/Product/Product'
import Order from './pages/Order/Order'
import Customer from './pages/Customer/Customer'
import Payment from './pages/Payment/Payment'
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
      <Route path="/dashboard" children={<Dashboard />} />
      <Route path="/categories" children={<Category />} />
      <Route path="/products" children={<Product />} />
      <Route path="/orders" children={<Order />} />
      <Route path="/customers" children={<Customer />} />
      <Route path="/payments" children={<Payment />} />

      <Route path="/registration" children={<Register />} />
      <Route path="/email-verification" children={<EmailVerification />} />
      <Route exact path="/" children={<Login />} />
      <Route path="*" children={<PageNotFound />} />

    </Switch>
  </Router>
  );
}
export default App;
