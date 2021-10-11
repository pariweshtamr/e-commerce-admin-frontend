import './App.css'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Category from './pages/Category/Category'
import Product from './pages/Product/Product'
import NewProduct from './pages/Product/NewProduct'
import EditProduct from './pages/Product/EditProduct'
import Order from './pages/Order/Order'
import Customer from './pages/Customer/Customer'
import AdminProfile from './pages/Admin-profile/AdminProfile'
import ResetPassword from './pages/PasswordReset/ResetPassword'
import Payment from './pages/Payment/Payment'
import Login from './pages/Login/Login'
import PageNotFound from './components/PageNotFound/PageNotFound'
import EmailVerification from './pages/Email-verification/EmailVerification'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import AdminList from './pages/AdminList/AdminList'

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/categories">
          <Category />
        </PrivateRoute>
        <PrivateRoute exact path="/products">
          <Product />
        </PrivateRoute>
        <PrivateRoute exact path="/products/new">
          <NewProduct />
        </PrivateRoute>
        <PrivateRoute exact path="/products/edit/:slug">
          <EditProduct />
        </PrivateRoute>
        <PrivateRoute path="/orders">
          <Order />
        </PrivateRoute>
        <PrivateRoute path="/customers">
          <Customer />
        </PrivateRoute>
        <PrivateRoute path="/admin-profile">
          <AdminProfile />
        </PrivateRoute>
        <PrivateRoute path="/payments">
          <Payment />
        </PrivateRoute>
        <PrivateRoute path="/admin-user">
          <AdminList />
        </PrivateRoute>
        <PrivateRoute path="/registration">
          <Register />
        </PrivateRoute>

        <Route path="/email-verification" children={<EmailVerification />} />
        <Route path="/reset-password" children={<ResetPassword />} />

        <Route exact path="/" children={<Login />} />
        <Route path="*" children={<PageNotFound />} />
      </Switch>
    </Router>
  )
}
export default App
