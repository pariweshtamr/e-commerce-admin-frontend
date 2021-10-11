import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import CustomTable from '../../components/CustomTable/CustomTable'
import AdminLayout from '../Layout/AdminLayout'
import Register from '../Register/Register'

const AdminList = () => {
  return (
    <div>
      <AdminLayout>
        <h2>Admin Users</h2>
        <div className="button-section text-end">
          <NavLink to="/registration">
            {' '}
            <Button variant="warning">Add new Admin</Button>
          </NavLink>
        </div>
        <hr />
        <CustomTable />
      </AdminLayout>
    </div>
  )
}

export default AdminList
