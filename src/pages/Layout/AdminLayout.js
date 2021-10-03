import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/Sidebar/Sidebar'

import './AdminLayout.css'

const AdminLayout = ({ children }) => {
  const [sideToggle, setSideToggle] = useState(false)

  const toggleSidebar = () => setSideToggle(!sideToggle)
  console.log(sideToggle)
  return (
    <div className="admin-layout">
      <div className="side">
        <Sidebar sideToggle={sideToggle} />
      </div>
      <div className="right">
        <div className="show">
          <button onClick={toggleSidebar}>Sidebar</button>
        </div>
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default AdminLayout
