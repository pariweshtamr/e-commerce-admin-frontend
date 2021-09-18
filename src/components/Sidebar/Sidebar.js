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
                    <Link className="menu-item" to="/dashboard"><i class="fas fa-tachometer-fast"></i>Dashboard</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/categories"><i class="fas fa-sitemap"></i>Categories</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/products"><i class="fas fa-boxes"></i>Products</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/orders"><i class="fas fa-sort-amount-up-alt"></i>Orders</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/customers"><i class="fas fa-users"></i>Customers</Link>
                </li>
                <li>
                    <Link className="menu-item" to="/payments"><i class="fas fa-credit-card"></i>Payments</Link>
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}

export default Sidebar
