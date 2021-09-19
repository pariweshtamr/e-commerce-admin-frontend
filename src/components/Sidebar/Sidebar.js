import React from 'react'
import { NavLink } from 'react-router-dom'
import Admin from '../../assets/images/admin-logo.png'

import './sidebar.css' 

const Sidebar = () => {
    return (
    <>
        <div className="sidebar">
            <div className="side-menu">
                <NavLink to="/dashboard">
                    <img className="img" src={Admin} alt="Admin Logo" />
                </NavLink>
            </div>

            <div className="menu-list">
                <ul className="menu-items">
                    <li>
                        <NavLink className="menu-item" activeClassName="active-class" exact to="/dashboard"><i className="fas fa-tachometer-alt me-3"></i>Dashboard</NavLink>
                    </li>
                    <li>
                    <NavLink className="menu-item" activeClassName="active-class" to="/categories"><i className="fas fa-sitemap me-3"></i>Categories</NavLink>
                    </li>
                    <li>
                    <NavLink className="menu-item" activeClassName="active-class" to="/products"><i className="fas fa-boxes me-3"></i>Products</NavLink>
                    </li>
                    <li>
                    <NavLink className="menu-item" activeClassName="active-class" to="/orders"><i className="fas fa-sort-amount-up-alt me-3"></i>Orders</NavLink>
                    </li>
                    <li>
                    <NavLink className="menu-item" activeClassName="active-class" to="/customers"><i className="fas fa-users me-3"></i>Customers</NavLink>
                    </li>
                    <li>
                    <NavLink className="menu-item" activeClassName="active-class" to="/payments"><i className="fas fa-credit-card me-3"></i>Payments</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Sidebar
