import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./AdminLayout.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="left bg-dark">
        <Sidebar />
      </div>
      <div className="right">
        <Header />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
