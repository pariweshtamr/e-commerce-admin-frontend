import React from 'react'
import { Link } from 'react-router-dom'

import './sidebar.css' 

const Sidebar = () => {
    return (
        <>
        <div className="sidebar">
        <div className="side-menu">
            <Link to="/dashboard" className="logo">Admin Logo</Link>
        </div>
        <hr style={{border: "1px solid white" }} />

        <div className="menu-list">
            <ul className="menu-items">
                <li>
                    <Link className="menu-item" to="/dashboard"><i className="fas fa-tachometer-alt"></i>Dashboard</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/categories"><i className="fas fa-sitemap"></i>Categories</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/products"><i className="fas fa-boxes"></i>Products</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/orders"><i className="fas fa-sort-amount-up-alt"></i>Orders</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/customers"><i className="fas fa-users"></i>Customers</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/payments"><i className="fas fa-credit-card"></i>Payments</Link>
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Sidebar
